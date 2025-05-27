import { Request, Response, Router} from "express";
import { Company } from "../entities/company";
import  companyRepository  from "../repositories/company";

const companyController = Router();

companyController.get('/companies', async (_req: Request, res: Response): Promise<void> => {
    try {
        const companies = await companyRepository.getUsers();
        res.status(200).json(companies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar empresas', details: error });
    }
});

export default companyController