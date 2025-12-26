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
import { UserI } from "@/interfaces/user"

interface TeacherTableProps {
    teachers: UserI[]
    isLoading?: boolean
}

export const TeacherTable: React.FC<TeacherTableProps> = (props) => {
    const [isLoading, setIsLoading] = React.useState(false)

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
                    ) : props.teachers.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={cols.length} align="center">
                                No teachers available.
                            </TableCell>
                        </TableRow>
                    ) : (
                        props.teachers.map((teacher) => (
                            <TableRow key={teacher.id}>
                                <TableCell>{teacher.last_name}</TableCell>
                                <TableCell>{teacher.first_name}</TableCell>
                                <TableCell>{teacher.email}</TableCell>
                                <TableCell>{teacher.phone_number}</TableCell>
                                <TableCell>{teacher.date_of_birth}</TableCell>
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
