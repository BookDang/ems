import React from "react"
import { getTeachers } from "@/lib/data"
import TeacherTable from "@/app/(ui)/dashboard/_components/teacher/TeacherTable"

export const TeacherList: React.FC = async () => {
    const teachers = await getTeachers()

    return <TeacherTable teachers={teachers} />
}

export default TeacherList
