const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

// Rutas básicas de prueba
app.get('/api/health', (req, res) => {
	res.status(200).json({ message: 'SanitTest API running' });
});

// Iniciar servidor
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
