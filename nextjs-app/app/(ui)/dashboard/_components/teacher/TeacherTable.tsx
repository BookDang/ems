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
import React, { useEffect } from "react"
import Loading from "@/app/(ui)/dashboard/_components/common/Loading"
import { cols } from "@/app/(ui)/dashboard/_components/teacher/data"
import {
    selectTeachers,
    setTeachers,
} from "@/store/features/teacher/teacherSlice"
import { useDispatch, useSelector } from "react-redux"
import { UserWithoutPasswordT } from "@/types/user"

type TeacherTableProps = {
    teachers: UserWithoutPasswordT[]
}

export const TeacherTable: React.FC<TeacherTableProps> = (props) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setTeachers(props.teachers))
    }, [props, dispatch])

    const teachers = useSelector(selectTeachers)
    console.log("TeacherTable -> Teachers: ", teachers)

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
                    {teachers.length === 0 ? (
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
                                    {teacher.date_of_birth
                                        ? new Date(
                                              teacher.date_of_birth
                                          ).toLocaleDateString()
                                        : ""}
                                    <br />
                                    {teacher.salary_basic +
                                        teacher.salary_basic}
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
