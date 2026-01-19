import {
    Paper,
    Skeleton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
} from "@mui/material"
import { teacherCols } from "@/app/dashboard/_components/teacher/data"
import HeaderTable from "@/app/dashboard/_components/common/HeaderTable"

const TeacherTableSkeleton: React.FC = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <HeaderTable columns={teacherCols} />
                <TableBody>
                    {[...Array(11)].map((_, index) => (
                        <TableRow key={index}>
                            {teacherCols.map((col) => (
                                <TableCell key={col.key}>
                                    <Skeleton variant="text" />
                                </TableCell>
                            ))}
                            <TableCell className="p-2 flex">---</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TeacherTableSkeleton
