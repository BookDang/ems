"use client"

import {
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from "@mui/material"
import React from "react"
import Loading from "@/app/(ui)/dashboard/_components/common/Loading"
import { cols } from "@/app/(ui)/dashboard/_components/teacher/data"
import { selectTeachers } from "@/store/features/teacher/teacherSlice"
import { useSelector } from "react-redux"

export const TeacherTable: React.FC = (props) => {
    const [isLoading, setIsLoading] = React.useState(false)
    const teachers = useSelector(selectTeachers)
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
                    {isLoading ? (
                        <TableRow>
                            <TableCell colSpan={cols.length} align="center">
                                <Loading />
                            </TableCell>
                        </TableRow>
                    ) : teachers.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={cols.length} align="center">
                                No teachers available.
                            </TableCell>
                        </TableRow>
                    ) : (
                        teachers.map((teacher) => (
                            <TableRow key={teacher.id}>
                                <TableCell>{teacher.last_name}</TableCell>
                                <TableCell>{teacher.first_name}</TableCell>
                                <TableCell>{teacher.email}</TableCell>
                                <TableCell>{teacher.phone_number}</TableCell>
                                <TableCell>
                                    {teacher.date_of_birth instanceof Date
                                        ? teacher.date_of_birth.toLocaleDateString()
                                        : teacher.date_of_birth}
                                </TableCell>
                                <TableCell>{teacher.address}</TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TeacherTable
