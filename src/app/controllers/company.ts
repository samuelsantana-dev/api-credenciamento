import { Request, Response, Router} from "express";
import { Company } from "../entities/company";
import  companyRepository  from "../repositories/company";

const companyController = Router();

companyController.get('/companies', async (_req: Request, res: Response): Promise<void> => {
    try {
        const companies = await companyRepository.getAllCompanies();
        res.status(200).json(companies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar empresas', details: error });
    }
});

companyController.get('/companies/:id', async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const company = await companyRepository.getCompanyById(Number(id));
        if (company) {
            res.status(200).json(company);
        } else {
            res.status(404).json({ error: 'Empresa não encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar empresa', details: error });
    }
});

companyController.post('/companies', async (req: Request, res: Response): Promise<void> => {
    const companyData: Partial<Company> = req.body;
    try {
        const newCompany = await companyRepository.createCompany(companyData);
        res.status(201).json(newCompany);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar empresa', details: error });
    }
});

companyController.put('/companies/:id', async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const updatedData: Partial<Company> = req.body;
    try {
        const updatedCompany = await companyRepository.updateCompany(Number(id), updatedData);
        if (updatedCompany) {
            res.status(200).json(updatedCompany);
        } else {
            res.status(404).json({ error: 'Empresa não encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar empresa', details: error });
    }
});

companyController.delete('/companies/:id', async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const deleted = await companyRepository.deleteCompany(Number(id));
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Empresa não encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao deletar empresa', details: error });
    }
});

export default companyController