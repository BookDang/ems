import {
    getAllTeachers,
    getTeacherById as getTeacherByIdAPI,
} from "@/services/mocks/teachers.mock"
import { ITeacher } from "@/types/teacher"
import { faker } from "@faker-js/faker"

export const getTeachers = async (): Promise<ITeacher[] | unknown[]> => {
    try {
        await new Promise((resolve) =>
            setTimeout(resolve, faker.number.int({ min: 100, max: 5000 }))
        )
        // throw new Error("DATABASE_CONNECTION_FAILED")
        // const teachers = await generateMockTeachers(15)
        const teachers = await getAllTeachers()
        return teachers
    } catch (error) {
        console.error("Error fetching teachers:", error)
        throw new Error(
            error instanceof Error ? error.message : "Unknown error"
        )
    }
}

export const getTeacherById = async (
    id: string
): Promise<ITeacher | undefined> => {
    try {
        await new Promise((resolve) =>
            setTimeout(resolve, faker.number.int({ min: 100, max: 5000 }))
        )
        // throw new Error("DATABASE_CONNECTION_FAILED")
        const teacher = await getTeacherByIdAPI(id)
        return teacher
    } catch (error) {
        console.error("Error fetching teacher:", error)
        throw new Error(
            error instanceof Error ? error.message : "Unknown error"
        )
    }
}
