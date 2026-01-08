import React from "react"
import TeacherTable from "@/app/dashboard/_components/teacher/TeacherTable"

export const TeacherList: React.FC = async () => {
    const teachers: unknown[] = []
    return <TeacherTable teachers={teachers} />
}

export default TeacherList
