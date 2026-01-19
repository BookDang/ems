import { ReactNode } from "react"

export interface IColumnConfig<T> {
    key: keyof T | string
    label: string
    type: "string" | "date" | "number" | "action" | "boolean"

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    render?: (value: any, row: T) => ReactNode

    booleanLabels?: {
        true: ReactNode
        false: ReactNode
    }

    width?: string | number
    className?: string
}
