import { UserI } from "@/interfaces/user"

export async function getTeachers(): Promise<UserI[]> {
    console.log("Fetching teachers from the database...")
    await new Promise((resolve) => setTimeout(resolve, 5000))
    console.log("Finished fetching teachers.")
    return []
}
