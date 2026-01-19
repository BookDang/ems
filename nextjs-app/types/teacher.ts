import { IUser } from "@/types/user"
export interface IExpertise {
    skills: string[]
    primarySubject: string
    yearsOfExperience: number
}

export interface IQualification {
    degree: string
    institution: string
    year: number
}

export interface ITeacher extends IUser {
    expertise: IExpertise | string[]
    qualification: IQualification[]
    hireDate: string | Date
    salaryBasic: number
    allowances: Record<string, number>
}
