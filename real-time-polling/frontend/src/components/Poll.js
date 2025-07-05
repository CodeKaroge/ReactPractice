import React, { useEffect, useState } from 'react';
import { socket } from '../services/socket';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Button } from '@mui/material';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Poll = ({ poll }) => {
  const [votes, setVotes] = useState(poll.votes ?? {});

  useEffect(() => {
    socket.on('voteUpdate', (updatedPoll) => {
      if (updatedPoll.id === poll.id) {
        setVotes(updatedPoll.votes ?? {});
      }
    });
    return () => socket.off('voteUpdate');
  }, [poll.id]);

  const vote = (option) => {
    socket.emit('submitVote', { pollId: poll.id, option });
  };

  const chartData = {
    labels: Object.keys(votes),
    datasets: [{
      label: 'Votes',
      data: Object.values(votes),
      backgroundColor: Object.keys(votes).map((_, i) =>
        ['#1976d2', '#388e3c', '#fbc02d', '#d32f2f', '#7b1fa2'][i % 5]
      ),
    }]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: false },
    },
  };

  return (
    <div>
      <h3>{poll.question}</h3>
      <small>Created by: {poll.creator}</small>
      {poll.options.map(opt => (
        <Button
          key={opt}
          onClick={() => vote(opt)}
          variant="outlined"
          sx={{ m: 0.5 }}
        >
          {opt}
        </Button>
      ))}
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};


export default Poll;
