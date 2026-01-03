import {
    User as UserPrisma,
    Teacher as TeacherPrisma,
} from "@/generated/prisma/browser"

type Teacher = Omit<
    TeacherPrisma,
    "user_id" | "hire_date" | "created_at" | "updated_at" | "salary_basic"
> & {
    hire_date: string
    salary_basic: number
    created_at: string | null
    updated_at: string | null
}

type User = Omit<UserPrisma, "created_at" | "updated_at" | "date_of_birth"> & {
    created_at: string | null
    updated_at: string | null
    date_of_birth: string | null
}

export type UserT = User & Teacher
export type UserWithoutPasswordT = Omit<
    UserT,
    "password" | "username" | "user_id"
>
