import React from "react"
import TeacherTable from "@/app/dashboard/_components/teacher/TeacherTable"
import { getTeachers } from "@/services/teacher.service"
import Error500 from "@/app/_components/errors/Error500"

export const TeacherList: React.FC = async () => {
    let teachers: unknown[] = []
    let errorMessage = null

    try {
        teachers = await getTeachers()
    } catch (error: unknown) {
        errorMessage = error instanceof Error ? error.message : String(error)
        throw new Error("Something went wrong while fetching teachers.")
    }

    if (errorMessage) {
        return <Error500 />
    }

    return <TeacherTable teachers={teachers} />
}

export default TeacherList
