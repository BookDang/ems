export async function getTeachers(): Promise<
    {
        id: string
        last_name: string
        first_name: string
        email: string
        phone_number: string
        date_of_birth: string
        address: string
    }[]
> {
    console.log("Fetching teachers from the database...")
    await new Promise((resolve) => setTimeout(resolve, 5000))
    console.log("Finished fetching teachers.")
    return []
}
