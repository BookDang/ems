import { getTeachers } from "@/lib/data"
import { UserWithoutPasswordT } from "@/types/user"
import {
    createAsyncThunk,
    createSlice,
    PayloadAction,
    AnyAction,
} from "@reduxjs/toolkit"

type TeacherState = {
    teachers: UserWithoutPasswordT[]
    loading: boolean
    error: string | null
}

const initialState: TeacherState = {
    teachers: [],
    loading: false,
    error: null,
}

export const teacherSlice = createSlice({
    name: "teacher",
    initialState,
    reducers: {
        setTeachers(state, action: PayloadAction<UserWithoutPasswordT[]>) {
            state.teachers = action.payload
        },
        addTeacher(state, action: PayloadAction<UserWithoutPasswordT>) {
            state.teachers.push(action.payload)
        },
        updateTeacher(state, action: PayloadAction<UserWithoutPasswordT>) {
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
    extraReducers: (builder) => {
        builder
            .addCase(fetchTeachers.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchTeachers.fulfilled, (state, action) => {
                state.loading = false
                const teachersStr = action.payload
                const teachers = JSON.parse(teachersStr)
                state.teachers = teachers
            })
            .addMatcher(
                (action) => action.type.endsWith("/rejected"),
                (state, action: AnyAction) => {
                    state.loading = false
                    state.error = action.payload || "Đã có lỗi xảy ra"
                }
            )
    },
})

export const fetchTeachers = createAsyncThunk("teachers/fetchAll", async () => {
    const res = await getTeachers()
    return res
})

export const { setTeachers, addTeacher, removeTeacher } = teacherSlice.actions
export const selectTeachers = (state: { teacher: TeacherState }) =>
    state.teacher.teachers
export const loadingTeachers = (state: { teacher: TeacherState }) =>
    state.teacher.loading
export default teacherSlice.reducer
