import 'reflect-metadata';
import express from "express";
import cors from "cors";
import { AppDataSource } from './database/data-source';
import routers from './app/routes/company';

const app = express();

app.use(cors());
app.use(express.json());

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
      console.log(`Server running at http://localhost:${process.env.PORT || 3000}`);
    });

    server.setTimeout(5000);
  })
  .catch(error => {
    console.error("Database connection error:", error);
    process.exit(1);
  });