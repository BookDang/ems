import React from "react"
import TeacherTable from "@/app/dashboard/_components/teacher/TeacherTable"
import { getTeachers } from "@/services/teacher.service"

export const TeacherList: React.FC = async () => {
    let teachers: unknown[] = []
    // const errorMessage = null

    try {
        teachers = await getTeachers()
    } catch (error: unknown) {
        // errorMessage = error instanceof Error ? error.message : String(error)
        throw new Error("Something went wrong while fetching teachers.", {
            cause: error,
        })
    }

    return <TeacherTable teachers={teachers} />
}

export default TeacherList
