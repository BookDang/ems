"use client"

import {
    TableContainer,
    Paper,
    Table,
    TableRow,
    TableCell,
    TableBody,
    IconButton,
} from "@mui/material"
import { BsTrash2Fill } from "react-icons/bs"
import { CiCreditCard2 } from "react-icons/ci"
import React, { useEffect } from "react"
import { teacherCols } from "@/app/dashboard/_components/teacher/data"
import {
    loadingTeachers,
    selectTeachers,
    setTeachers,
} from "@/store/features/teacher/teacherSlice"
import { useDispatch, useSelector } from "react-redux"
import { generateColumnDefs } from "@/utils/column-generator"
import HeaderTable from "@/app/dashboard/_components/common/HeaderTable"
import Link from "next/link"
import TeacherTableSkeleton from "./TeacherTableSkeleton"

type TeacherTableProps = {
    teachers: unknown[]
}

export const TeacherTable: React.FC<TeacherTableProps> = (props) => {
    const dispatch = useDispatch()
    const columns = generateColumnDefs(teacherCols)

    useEffect(() => {
        dispatch(setTeachers(props.teachers))
    }, [props, dispatch])

    const teachers = useSelector(selectTeachers)
    const isLoading = useSelector(loadingTeachers)
    console.log("TeacherTable -> Teachers: ", teachers)

    if (isLoading) {
        return <TeacherTableSkeleton />
    }

    return (
        <TableContainer component={Paper} sx={{ maxHeight: 640 }}>
            <Table
                sx={{ minWidth: 650 }}
                aria-label="sticky table"
                stickyHeader={true}
            >
                <HeaderTable columns={teacherCols} />
                <TableBody>
                    {teachers.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={columns.length} align="center">
                                No teachers available.
                            </TableCell>
                        </TableRow>
                    ) : (
                        teachers.map((teacher) => (
                            <TableRow key={teacher.id}>
                                {columns.map((col) => (
                                    <TableCell
                                        key={col.accessorKey}
                                        className="p-2"
                                    >
                                        {col.cell(teacher)}
                                    </TableCell>
                                ))}
                                <TableCell className="p-2 flex">
                                    <Link
                                        href={`/dashboard/teachers/${teacher.id}`}
                                    >
                                        <IconButton aria-label="view">
                                            <CiCreditCard2 />
                                        </IconButton>
                                    </Link>
                                    <IconButton aria-label="delete">
                                        <BsTrash2Fill />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TeacherTable
