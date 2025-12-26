import { UserT } from "@/types/user"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type TeacherState = {
    teachers: UserT[]
}

const initialState: TeacherState = {
    teachers: [],
}

export const teacherSlice = createSlice({
    name: "teacher",
    initialState,
    reducers: {
        setTeachers(state, action: PayloadAction<UserT[]>) {
            state.teachers = action.payload
        },
        addTeacher(state, action: PayloadAction<UserT>) {
            state.teachers.push(action.payload)
        },
        updateTeacher(state, action: PayloadAction<UserT>) {
            const index = state.teachers.findIndex(
                (teacher) => teacher.id === action.payload.id
            )
            if (index !== -1) {
                state.teachers[index] = action.payload
            }
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
