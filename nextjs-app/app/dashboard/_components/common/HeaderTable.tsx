import { TableHead, TableRow, TableCell } from "@mui/material"
import { IColumnConfig } from "@/types/table"

type HeaderTableProps<T> = {
    columns: IColumnConfig<T>[]
}

const HeaderTable = <T,>({ columns }: HeaderTableProps<T>) => {
    return (
        <TableHead>
            <TableRow>
                {columns.map((col) => (
                    <TableCell
                        key={col.key as string}
                        style={{ width: col.width }}
                        className={`p-2 !bg-light-blue-ems !text-white !font-semibold ${col.className || ""}`}
                    >
                        {col.label}
                    </TableCell>
                ))}
                <TableCell className="p-2 text-center !bg-light-blue-ems !text-white !font-semibold">
                    Actions
                </TableCell>
            </TableRow>
        </TableHead>
    )
}

export default HeaderTable
