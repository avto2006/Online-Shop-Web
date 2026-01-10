const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());


const products = [
  {
    id: 1,
    title: "ჩემი პირველი Node.js პროდუქტი",
    price: 150,
    image: "https://via.placeholder.com/200",
    category: "electronics", // შენი ფილტრი რომ ამუშაოს
    rating: { rate: 9.5 }    // შენი HTML ამას ითხოვს
  }
];

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.listen(3000, () => console.log('Backend is running!'));