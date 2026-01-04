import { useState, useCallback } from "react"

interface ApiState<T> {
    data: T | null
    isLoading: boolean
    error: string | null
}

export const useApi = <T>() => {
    const [state, setState] = useState<ApiState<T>>({
        data: null,
        isLoading: false,
        error: null,
    })

    const execute = useCallback(async (apiPromise: Promise<T>) => {
        setState({ data: null, isLoading: true, error: null })

        try {
            // throw new Error("Simulated API error for testing purposes")
            const result = await apiPromise
            const cleanData = JSON.parse(JSON.stringify(result))

            setState({
                data: cleanData,
                isLoading: false,
                error: null,
            })

            return cleanData as T
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            const errorMessage = err.message || "Đã có lỗi xảy ra"
            setState({
                data: null,
                isLoading: false,
                error: errorMessage,
            })
            throw err
        }
    }, [])

    return { ...state, execute }
}
