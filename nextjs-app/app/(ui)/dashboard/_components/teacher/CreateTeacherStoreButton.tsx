"use client"

import React from "react"
import { MdAutoAwesome } from "react-icons/md"
import {
    errorTeachers,
    fetchTeachers,
    loadingTeachers,
    selectTeachers,
} from "@/store/features/teacher/teacherSlice"
import { useAppDispatch } from "@/store/hooks"
import { useAppSelector } from "@/store/hooks"

const CreateTeacherStoreButton: React.FC = () => {
    const dispatch = useAppDispatch()
    const isLoading = useAppSelector(loadingTeachers)
    const error = useAppSelector(errorTeachers)
    const teachers = useAppSelector(selectTeachers)

    const handleCreateMockTeachers = async () => {
        dispatch(fetchTeachers())
    }

    React.useEffect(() => {
        if (error) {
            console.error("Error fetching teachers:", error)
        } else {
            console.log("Teachers fetched successfully:", teachers)
        }
    }, [error, teachers])

    return (
        <button
            type="button"
            className="btn btn-normal-blue-ems flex items-center cursor-pointer"
            onClick={handleCreateMockTeachers}
        >
            {isLoading ? "Loading..." : "Fetch Teachers"}
            {error && <span className="ml-2 text-red-500">Error!</span>}
            <MdAutoAwesome className="mr-1 hover:text-medium-blue-ems" />
        </button>
    )
}

export default CreateTeacherStoreButton
