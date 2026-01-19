import { handleResponse } from "@/utils/api"
import {
    createAsyncThunk,
    createSlice,
    PayloadAction,
    AnyAction,
} from "@reduxjs/toolkit"

type TeacherState = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    teachers: any[]
    loading: boolean
    error: string | null
}

const initialState: TeacherState = {
    teachers: [],
    loading: true,
    error: null,
}

export const teacherSlice = createSlice({
    name: "teacher",
    initialState,
    reducers: {
        setTeachers(state, action: PayloadAction<unknown[]>) {
            state.teachers = action.payload
            state.loading = false
            state.error = null
        },
        addTeacher(state, action: PayloadAction<unknown>) {
            state.teachers.push(action.payload)
        },
        updateTeacher(state, action: PayloadAction<{ id: number }>) {
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
        removeAllTeachers(state) {
            state.teachers = []
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTeachers.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchTeachers.fulfilled, (state, action) => {
                state.loading = false
                console.log("Fetched teachers:", action.payload)
                const teachers: unknown[] = action.payload.teachers || []
                state.teachers = teachers
            })
            .addMatcher(
                (action) => action.type.endsWith("/rejected"),
                (state, action: AnyAction) => {
                    console.log("Error fetching teachers book:", action.payload)
                    state.loading = false
                    state.error = action.payload || "Đã có lỗi xảy ra"
                }
            )
    },
})

export const fetchTeachers = createAsyncThunk(
    "teachers/fetchAll",
    async (_, { rejectWithValue }) => {
        try {
            const res = await fetch("/api/teachers/mocks", {
                method: "POST",
            }).then(handleResponse)
            return res
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            return rejectWithValue(err.message || "Đã có lỗi xảy ra")
        }
    }
)

export const { setTeachers, addTeacher, removeTeacher, removeAllTeachers } =
    teacherSlice.actions
export const selectTeachers = (state: { teacher: TeacherState }) =>
    state.teacher.teachers
export const loadingTeachers = (state: { teacher: TeacherState }) =>
    state.teacher.loading
export const errorTeachers = (state: { teacher: TeacherState }) =>
    state.teacher.error
export default teacherSlice.reducer
