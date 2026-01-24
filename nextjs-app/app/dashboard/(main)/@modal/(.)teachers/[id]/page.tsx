"use client"

import { usePathname, useRouter } from "next/navigation"
import { useSelector } from "react-redux"
import { selectTeacherById } from "@/store/features/teacher/teacherSlice"
import { ITeacher } from "@/types/teacher"
import { IColumnConfig } from "@/types/table"

const Page = () => {
    const router = useRouter()
    const pathname = usePathname()
    const teacherId = pathname.split("/").pop() as string

    const teacher = useSelector(selectTeacherById(teacherId))

    const backToTeachers = () => {
        router.back()
    }

    const teacherCols: IColumnConfig<ITeacher, unknown>[] = [
        {
            key: "lastName",
            label: "Last Name",
            type: "string",
        },
        {
            key: "firstName",
            label: "First Name",
            type: "string",
        },
        {
            key: "email",
            label: "Email",
            type: "string",
        },
        {
            key: "phoneNumber",
            label: "Phone Number",
            type: "string",
        },
        {
            key: "dateOfBirth",
            label: "Date of Birth",
            type: "date",
        },
        {
            key: "address",
            label: "Address",
            type: "string",
        },
        {
            key: "expertise",
            label: "Expertise",
            type: "expertise",
        },
        {
            key: "hireDate",
            label: "Hire Date",
            type: "date",
        },
        {
            key: "salaryBasic",
            label: "Basic Salary",
            type: "number",
        },
        {
            key: "qualification",
            label: "Qualification",
            type: "qualification",
        },
        {
            key: "allowances",
            label: "Allowances",
            type: "record",
        },
    ]

    const renderCell = (
        col: IColumnConfig<ITeacher, unknown>,
        teacher: ITeacher
    ) => {
        const value = teacher[col.key as keyof ITeacher]

        if (col.render) {
            return col.render(value, teacher)
        }

        if (col.type === "date" && value) {
            const date = new Date(value as string | number | Date)
            return date.toLocaleDateString()
        }

        if (col.type === "expertise" && value) {
            const expertise = value as ITeacher["expertise"]
            if (Array.isArray(expertise)) {
                return expertise
                    .map((exp) =>
                        typeof exp === "string"
                            ? exp
                            : `${exp.primarySubject} (${exp.yearsOfExperience} years)`
                    )
                    .join(", ")
            } else if (typeof expertise === "object") {
                return `${expertise.primarySubject} (${expertise.yearsOfExperience} years)`
            }
        }

        if (col.type === "qualification" && value) {
            const qualifications = value as ITeacher["qualification"]
            return qualifications
                .map(
                    (qual) =>
                        `${qual.degree} from ${qual.institution} (${qual.year})`
                )
                .join("; ")
        }

        if (col.type === "record" && value) {
            const record = value as Record<string, number>
            return Object.entries(record)
                .map(([key, val]) => `${key}: ${val}`)
                .join(", ")
        }

        return value?.toString() || "-"
    }

    return (
        <>
            <div
                id="modalContainer"
                className="fixed inset-0 z-50 flex items-center justify-center"
            >
                <div className="fixed inset-0 bg-black/30 backdrop-blur-sm"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full m-4 p-6 transform transition-all">
                    <div className="flex justify-between items-center border-b pb-3">
                        <h3 className="text-xl font-semibold text-gray-900"></h3>
                        <button
                            id="closeModal"
                            className="text-gray-400 hover:text-gray-600 text-2xl cursor-pointer"
                            onClick={backToTeachers}
                        >
                            &times;
                        </button>
                    </div>

                    <div className="py-2 space-y-3 mt-2">
                        {teacher ? (
                            <div className="grid grid-cols-2 gap-3">
                                {teacherCols.map((col) => (
                                    <div
                                        key={col.key}
                                        className="flex flex-col border-b border-gray-50 pb-2"
                                    >
                                        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                                            {col.label}
                                        </span>
                                        {renderCell(col, teacher)}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-center py-4 text-gray-500 italic">
                                Không tìm thấy thông tin giáo viên.
                            </p>
                        )}
                    </div>

                    <div className="flex justify-end gap-3 mt-4">
                        <button
                            id="cancelBtn"
                            className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
                        >
                            Hủy
                        </button>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-lg shadow-blue-200">
                            Xác nhận
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page
