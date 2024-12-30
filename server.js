// Import required modules
const express = require('express');
const path = require('path');  // Required to serve static files
const yahooFinance = require('yahoo-finance2').default;
const cors = require('cors');  // To enable CORS for frontend access

// Create an instance of Express
const app = express();
const PORT = 3000;

// Enable CORS for development
app.use(cors());

// Serve the static frontend files (e.g., index.html)
app.use(express.static(path.join(__dirname, 'public'))); // Adjust 'public' to your static directory

// API route to fetch stock data from Yahoo Finance API
app.get('/api/stock/:symbol', async (req, res) => {
  const symbol = req.params.symbol;  // Get the stock symbol from the URL
  try {
    // Fetch stock data using Yahoo Finance API
    const stockData = await yahooFinance.quote(symbol);

    // Send relevant stock data to the frontend in JSON format
    res.json({
      symbol: stockData.symbol,
      price: stockData.regularMarketPrice,
      change: stockData.regularMarketChange,
      percentChange: stockData.regularMarketChangePercent,
      dayHigh: stockData.regularMarketDayHigh,
      dayLow: stockData.regularMarketDayLow,
    });
  } catch (error) {
    console.error('Error fetching stock data:', error);  // Log the error for debugging
    res.status(500).json({ error: 'Failed to fetch stock data' });
  }
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
