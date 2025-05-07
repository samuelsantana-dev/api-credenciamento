import { Router } from "express";
import companyController from "../controllers/company";


const routers = Router();

routers.use('/company', companyController);

export default routers;