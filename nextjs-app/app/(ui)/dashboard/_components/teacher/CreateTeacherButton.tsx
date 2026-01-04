"use client"

import { useApi } from "@/hooks/useApi"
import { UserWithoutPasswordT } from "@/types/user"
import { handleResponse } from "@/utils/api"
import { MdAutoAwesome } from "react-icons/md"

const CreateTeacherButton: React.FC = () => {
    const { isLoading, execute } = useApi<UserWithoutPasswordT[]>()

    const handleCreateMockTeachers = async () => {
        try {
            const data = await execute(
                fetch("/api/teachers/mocks", { method: "POST" }).then(
                    handleResponse
                )
            )
            console.log("Created mock teachers:", data)
        } catch (err) {
            console.log("Error creating mock teachers:", err)
        }
    }

    return (
        <button
            type="button"
            className="btn btn-normal-blue-ems flex items-center cursor-pointer"
            onClick={handleCreateMockTeachers}
        >
            <MdAutoAwesome className="mr-1 hover:text-medium-blue-ems" />
        </button>
    )
}

export default CreateTeacherButton
