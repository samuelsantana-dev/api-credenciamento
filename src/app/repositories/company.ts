import { AppDataSource } from "../../database/data-source"
import { Company } from "../entities/company"


const companyRepository = AppDataSource.getRepository(Company)

const getUsers = (): Promise<Company[]> => {
    return companyRepository.find()
}

export default {
    getUsers
}