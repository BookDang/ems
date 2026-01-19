import { IColumnConfig } from "@/types/table"
import { ReactNode } from "react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getValueByPath = (obj: any, path: string) => {
    return path.split(".").reduce((prev, curr) => prev?.[curr], obj)
}

export const generateColumnDefs = <T>(configs: IColumnConfig<T>[]) => {
    return configs.map((col) => ({
        header: col.label,
        accessorKey: col.key as string,
        width: col.width,
        className: col.className,

        cell: (row: T): ReactNode => {
            const rawValue = getValueByPath(row, col.key as string)

            if (col.render) {
                return col.render(rawValue, row)
            }

            if (rawValue === null || rawValue === undefined) return "—"

            switch (col.type) {
                case "boolean":
                    return rawValue === true
                        ? (col.booleanLabels?.true ?? "Yes")
                        : (col.booleanLabels?.false ?? "No")

                case "date":
                    return new Date(rawValue).toLocaleDateString("vi-VN")

                case "number":
                    return new Intl.NumberFormat("vi-VN").format(
                        Number(rawValue)
                    )

                case "string":
                default:
                    return String(rawValue)
            }
        },
    }))
}
