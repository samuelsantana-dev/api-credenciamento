export type CompanyType = {
    id: number;
    name_company: string;
    cnpj_company: string;
    address: string;
    telephone?: string | null;
    email?: string | null;
    foundation_date?: Date | null;
}