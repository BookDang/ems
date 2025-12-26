import { Teacher, User } from "@/generated/prisma/browser"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type TeacherType = User & Teacher

type TeacherState = {
    teachers: TeacherType[]
}

const initialState: TeacherState = {
    teachers: [],
}

export const teacherSlice = createSlice({
    name: "teacher",
    initialState,
    reducers: {
        setTeachers(state, action: PayloadAction<TeacherType[]>) {
            state.teachers = action.payload
        },
        addTeacher(state, action: PayloadAction<TeacherType>) {
            state.teachers.push(action.payload)
        },
        removeTeacher(state, action: PayloadAction<number>) {
            state.teachers = state.teachers.filter(
                (teacher) => teacher.id !== action.payload
            )
        },
    },
})
export const { setTeachers, addTeacher, removeTeacher } = teacherSlice.actions
export const selectTeachers = (state: { teacher: TeacherState }) =>
    state.teacher.teachers
export default teacherSlice.reducer
