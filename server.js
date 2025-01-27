require('dotenv').config();
const express = require('express');
const cors = require('cors');

const flashdriveRoutes = require('./routes/flashdrives');

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/flashdrives', flashdriveRoutes);

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
