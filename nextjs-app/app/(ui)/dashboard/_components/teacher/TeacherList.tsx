import React from "react"
import { getTeachers } from "@/lib/data"
import { setTeachers } from "@/store/features/teacher/teacherSlice"
import TeacherTable from "@/app/(ui)/dashboard/_components/teacher/TeacherTable"

export const TeacherList: React.FC = async () => {
    const teachersStr = await getTeachers()
    const teachers = JSON.parse(teachersStr)
    setTeachers(teachers)
    console.log("TeacherList -> Teachers: ", teachers)
    return <TeacherTable teachers={teachers} />
}

export default TeacherList
