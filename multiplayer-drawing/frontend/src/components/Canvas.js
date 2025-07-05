import { useEffect, useRef, useState } from 'react';
import socket from '../socket';
import { Box, Button, Slider, Input, ToggleButtonGroup, ToggleButton } from '@mui/material';
import BrushIcon from '@mui/icons-material/Brush';
import DeleteIcon from '@mui/icons-material/Delete';

const Canvas = () => {
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [tool, setTool] = useState('brush');
    const [lineColor, setLineColor] = useState('#000000');
    const [lineWidth, setLineWidth] = useState(4);
    const [canvasSize] = useState({ width: 730, height: 560 });
    const [history, setHistory] = useState([]);
    const [redoStack, setRedoStack] = useState([]);


    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.lineCap = 'round';

        const drawFromSocket = (data) => {
            const { x0, y0, x1, y1, color, width } = data;
            ctx.strokeStyle = color;
            ctx.lineWidth = width;
            ctx.beginPath();
            ctx.moveTo(x0, y0);
            ctx.lineTo(x1, y1);
            ctx.stroke();
        };
        const clearCanvasFromSocket = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        };

        socket.on('drawing', drawFromSocket);
        socket.on('clear-canvas', clearCanvasFromSocket);
        return () => {
            socket.off('drawing', drawFromSocket);
            socket.off('clear-canvas', clearCanvasFromSocket);
        };
    }, []);

    const draw = (x0, y0, x1, y1, emit = true) => {
        const ctx = canvasRef.current.getContext('2d');
        const currentColor = tool === 'eraser' ? '#ffffff' : lineColor;
        const currentWidth = lineWidth;
        ctx.strokeStyle = currentColor;
        ctx.lineWidth = currentWidth;
        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.lineTo(x1, y1);
        ctx.stroke();
        if (!emit) return;
        socket.emit('drawing', {
            x0,
            y0,
            x1,
            y1,
            color: currentColor,
            width: currentWidth,
        });
    };

    const getPos = (e) => {
        const rect = canvasRef.current.getBoundingClientRect();
        if (e.touches) {
            return {
                x: e.touches[0].clientX - rect.left,
                y: e.touches[0].clientY - rect.top,
            };
        }
        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        };
    };

    const startDrawing = (e) => {
        saveHistory();
        setIsDrawing(true);
        canvasRef.current.prev = getPos(e);
    };

    const stopDrawing = () => {
        setIsDrawing(false);
    };

    const drawMouseMove = (e) => {
        if (!isDrawing) return;
        const curr = getPos(e);
        const prev = canvasRef.current.prev;
        draw(prev.x, prev.y, curr.x, curr.y);
        canvasRef.current.prev = curr;
    };

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        socket.emit('clear-canvas');
    };

    const saveHistory = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        setHistory(prev => [...prev, ctx.getImageData(0, 0, canvas.width, canvas.height)]);
        socket.emit('saveHistory', {
            // logic for managing histrory for others
        });
    };

    const handleUndo = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (history.length === 0) return;
        const newHistory = [...history];
        const lastState = newHistory.pop();
        setRedoStack(prev => [...prev, ctx.getImageData(0, 0, canvas.width, canvas.height)]);
        if (lastState) {
            ctx.putImageData(lastState, 0, 0);
            setHistory(newHistory);
        }
    };

    const handleRedo = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (redoStack.length === 0) return;
        setHistory(prev => [...prev, ctx.getImageData(0, 0, canvas.width, canvas.height)]);
        const newRedoStack = [...redoStack];
        const restoredState = newRedoStack.pop();
        if (restoredState) {
            ctx.putImageData(restoredState, 0, 0);
            setRedoStack(newRedoStack);
        }
    };

    return (
        <Box sx={{ textAlign: 'center' }}>
            <canvas
                ref={canvasRef}
                width={canvasSize.width}
                height={canvasSize.height}
                style={{
                    border: '2px solid #1976d2',
                    borderRadius: '12px',
                    backgroundColor: '#fefefe',
                    touchAction: 'none',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
                    margin: '20px auto',
                    display: 'block',
                    transition: 'all 0.3s ease-in-out',
                }}
                onMouseDown={startDrawing}
                onMouseMove={drawMouseMove}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onTouchStart={startDrawing}
                onTouchMove={drawMouseMove}
                onTouchEnd={stopDrawing}
            />
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 3,
                }}
            >
                <Box>
                    <Input
                        type="color"
                        value={lineColor}
                        onChange={(e) => setLineColor(e.target.value)}
                        disabled={tool === 'eraser'}
                        sx={{
                            width: 50,
                            height: 50,
                            padding: 0,
                            border: 'none',
                            borderRadius: '50%',
                            cursor: tool === 'eraser' ? 'not-allowed' : 'pointer',
                            backgroundColor: lineColor,
                            boxShadow: '0 0 6px rgba(0, 0, 0, 0.2)',
                            '&::-webkit-color-swatch-wrapper': {
                                padding: 0,
                                borderRadius: '50%',
                            },
                            '&::-webkit-color-swatch': {
                                border: 'none',
                                borderRadius: '50%',
                            },
                        }}
                    />
                </Box>
                <Box sx={{ width: 200 }}>
                    <Slider
                        min={1}
                        max={30}
                        value={lineWidth}
                        onChange={(e, val) => setLineWidth(val)}
                        valueLabelDisplay="auto"
                    />
                </Box>
                <Box>
                    <ToggleButtonGroup
                        value={tool}
                        exclusive
                        onChange={(e, val) => val && setTool(val)}
                        aria-label="drawing tool"
                    >
                        <ToggleButton value="brush" aria-label="brush">
                            <BrushIcon /> Brush
                        </ToggleButton>
                        <ToggleButton value="eraser" aria-label="eraser" color='red'>
                            <DeleteIcon color='red' /> Eraser
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Box>
                <Button variant="contained" color="error" onClick={clearCanvas}>
                    Clear Canvas
                </Button>
                <Button variant="contained" color="info" onClick={handleUndo}>
                    Undo
                </Button>
                <Button variant="contained" color="info" onClick={handleRedo}>
                    Redo
                </Button>
            </Box>
        </Box>
    );
};

export default Canvas;