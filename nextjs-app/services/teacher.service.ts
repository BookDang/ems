export const getTeachers = async (): Promise<unknown[]> => {
    try {
        await new Promise((resolve) => setTimeout(resolve, 3000))
        console.log("Đã chờ xong 3 giây!")
        // throw new Error("DATABASE_CONNECTION_FAILED")
        return []
    } catch (error) {
        console.error("Error fetching teachers:", error)
        throw new Error(
            error instanceof Error ? error.message : "Unknown error"
        )
    }
}
