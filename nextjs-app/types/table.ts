import { ReactNode } from "react"

export interface IColumnConfig<T, S> {
    key: keyof T | string
    label: string
    type:
        | "string"
        | "date"
        | "number"
        | "action"
        | "boolean"
        | "expertise"
        | "qualification"
        | "record"

    render?: (value: S, row: T) => ReactNode

    booleanLabels?: {
        true: ReactNode
        false: ReactNode
    }

    width?: string | number
    className?: string
}
