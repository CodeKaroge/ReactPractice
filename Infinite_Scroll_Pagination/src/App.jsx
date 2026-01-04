import { useEffect, useRef, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Typography
} from "@mui/material";

function App() {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [limit, setlimit] = useState(10);
  const loaderRef = useRef(null);

  const fetchProducts = async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    const res = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    );
    const result = await res.json();
    setProducts(prev => [...prev, ...result.products]);
    setSkip(prev => prev + limit);
    setlimit(prev => prev + 10)
    if (result.products.length < limit) {
      setHasMore(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        fetchProducts();
      }
    });
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [loaderRef, hasMore]);
  

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h5" gutterBottom>
        Infinite Scroll Products Table (MUI)
      </Typography>
      <TableContainer component={Paper} style={{ maxHeight: "600px" }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell><strong>Title</strong></TableCell>
              <TableCell><strong>Price (₹)</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product, index) => (
              <TableRow key={index}>
                <TableCell>{product.title}</TableCell>
                <TableCell>{product.price}</TableCell>
              </TableRow>
            ))}
            <TableRow ref={loaderRef}>
              <TableCell colSpan={2} align="center" style={{ padding: "20px" }}>
                {loading && <CircularProgress size={24} />}
                {!loading && !hasMore && "No more data"}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
