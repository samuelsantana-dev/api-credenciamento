import { Request, Response, Router} from "express";
import { Company } from "../entities/company";
import  companyRepository  from "../repositories/company";

const companyController = Router();

companyController.get('/companies', async (_req: Request, res: Response): Promise<void> => {
    const companies = await companyRepository.getUsers();
    res.status(200).json(companies);
});

export default companyController