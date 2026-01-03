import { Teacher, User } from "@/generated/prisma/browser"

type TeacherDataT = Omit<
    User & Teacher,
    "password" | "username" | "user_id" | "salary_basic"
> & {
    salary_basic: number
}

export async function getTeachers(): Promise<string> {
    await new Promise((resolve) => setTimeout(resolve, 5000))
    const teachers: TeacherDataT[] = [
        {
            id: 1,
            first_name: "John",
            last_name: "Doe",
            email: "johndoe@example.com",
            phone_number: "123-456-7890",
            date_of_birth: new Date("1980-01-30"),
            address: "123 Main St, Anytown, USA",
            created_at: null,
            updated_at: null,
            expertise: null,
            qualification: null,
            hire_date: new Date("2019-08-15"),
            salary_basic: 50000.8,
            allowances: null,
        },
    ]
    return JSON.stringify(teachers)
}
