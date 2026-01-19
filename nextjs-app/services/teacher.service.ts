import { generateMockTeachers } from "@/services/mocks/teachers.mock"
import { faker } from "@faker-js/faker"

export const getTeachers = async (): Promise<unknown[]> => {
    try {
        await new Promise((resolve) =>
            setTimeout(resolve, faker.number.int({ min: 100, max: 5000 }))
        )
        // throw new Error("DATABASE_CONNECTION_FAILED")
        const teachers = await generateMockTeachers(15)
        return teachers
    } catch (error) {
        console.error("Error fetching teachers:", error)
        throw new Error(
            error instanceof Error ? error.message : "Unknown error"
        )
    }
}
