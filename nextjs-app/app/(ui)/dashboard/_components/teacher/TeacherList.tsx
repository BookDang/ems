import React from "react"
import { getTeachers } from "@/lib/data"
import TeacherTable from "@/app/(ui)/dashboard/_components/teacher/TeacherTable"
import { setTeachers } from "@/store/features/teacher/teacherSlice"

export const TeacherList: React.FC = async () => {
    const teachers = await getTeachers()
    setTeachers(teachers)
    return <TeacherTable />
}

export default TeacherList
