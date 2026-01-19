import { IColumnConfig } from "@/types/table"
import { ITeacher } from "@/types/teacher"

export const teacherCols: IColumnConfig<ITeacher>[] = [
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
]
