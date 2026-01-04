"use client"

import { useAppDispatch } from "@/store/hooks"
import React from "react"

const RemoveTeachersStore = () => {
    const dispatch = useAppDispatch()
    React.useEffect(() => {
        return () => {
            dispatch({ type: "teacher/removeAllTeachers" })
        }
    }, [])
    return <></>
}

export default RemoveTeachersStore
