import { AppDataSource } from "../../database/data-source";
import { Company } from "../entities/company";

const companyRepository = AppDataSource.getRepository(Company);

const getAllCompanies = (): Promise<Company[]> => {
  return companyRepository.find();
};

const getCompanyById = (id: number): Promise<Company | null> => {
  return companyRepository.findOneBy({ id });
};

const createCompany = (companyData: Partial<Company>): Promise<Company> => {
  const company = companyRepository.create(companyData);
  return companyRepository.save(company);
};

const updateCompany = async (
  id: number,
  updatedData: Partial<Company>
): Promise<Company | null> => {
  const company = await companyRepository.findOneBy({ id });
  if (!company) return null;

  Object.assign(company, updatedData);
  return companyRepository.save(company);
};

const deleteCompany = async (id: number): Promise<boolean> => {
  const result = await companyRepository.delete(id);
  return result.affected !== 0;
};

export default {
  getAllCompanies,
  getCompanyById,
  createCompany,
  updateCompany,
  deleteCompany,
};
