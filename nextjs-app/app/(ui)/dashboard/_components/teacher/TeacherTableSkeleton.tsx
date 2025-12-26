import { cols } from "@/app/(ui)/dashboard/_components/teacher/data"
import {
    Paper,
    Skeleton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material"

const TeacherTableSkeleton: React.FC = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {cols.map((col) => (
                            <TableCell key={col.key}>{col.label}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {[...Array(10)].map((_, index) => (
                        <TableRow key={index}>
                            {cols.map((col) => (
                                <TableCell key={col.key}>
                                    <Skeleton variant="text" />
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TeacherTableSkeleton
