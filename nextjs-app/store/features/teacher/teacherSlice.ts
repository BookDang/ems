import { getTeachers } from "@/lib/data"
import { UserWithoutPasswordT } from "@/types/user"
import { handleResponse } from "@/utils/api"
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
                state.error = null
            })
            .addCase(fetchTeachers.fulfilled, (state, action) => {
                state.loading = false
                console.log("Fetched teachers:", action.payload)
                const teachers: UserWithoutPasswordT[] =
                    action.payload.teachers || []
                // const teachersStr = action.payload
                // const teachers = JSON.parse(teachersStr)
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

export const { setTeachers, addTeacher, removeTeacher } = teacherSlice.actions
export const selectTeachers = (state: { teacher: TeacherState }) =>
    state.teacher.teachers
export const loadingTeachers = (state: { teacher: TeacherState }) =>
    state.teacher.loading
export const errorTeachers = (state: { teacher: TeacherState }) =>
    state.teacher.error
export default teacherSlice.reducer
