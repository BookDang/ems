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

interface TeacherListProps {
    teachers: {
        id: string
        last_name: string
        first_name: string
        email: string
        phone_number: string
        date_of_birth: string
        address: string
    }[]
}

const cols = [
    {
        key: "last_name",
        label: "Last Name",
    },
    {
        key: "first_name",
        label: "First Name",
    },
    {
        key: "email",
        label: "Email",
    },
    {
        key: "phone_number",
        label: "Phone Number",
    },
    {
        key: "date_of_birth",
        label: "Birth Date",
    },
    {
        key: "address",
        label: "Address",
    },
]

export const TeacherList: React.FC<TeacherListProps> = ({ teachers }) => {
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
                                Loading...
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

export default TeacherList
