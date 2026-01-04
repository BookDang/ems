export const handleResponse = async (res: Response) => {
    const data = await res.json()
    if (!res.ok) {
        throw new Error(data.message || `Error ${res.status}`)
    }
    return data
}
