import 'reflect-metadata';
import express from "express";
import cors from "cors";
import { AppDataSource } from './database/data-source';
import routers from './app/routes/company';

const app = express();

// Configurações básicas
app.use(cors());
app.use(express.json());

// Rota de health check obrigatória para o Railway
app.get('/', (req, res) => {
  res.status(200).json({ status: 'online' });
});

app.use('/api', routers);

const PORT = process.env.PORT || 8080;

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");
    
    const server = app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

    // Timeout para evitar conexões pendentes
    server.setTimeout(5000);
  })
  .catch(error => {
    console.error("Database connection error:", error);
    process.exit(1); // Encerra o processo se o banco falhar
  });