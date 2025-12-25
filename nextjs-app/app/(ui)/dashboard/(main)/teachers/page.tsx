import React from "react"
import { FaChalkboardTeacher } from "react-icons/fa"
import PageTitle from "@/app/(ui)/dashboard/_components/common/PageTitle"

const Teacher: React.FC = () => {
    return (
        <>
            <PageTitle
                title="Teachers"
                icon={
                    <FaChalkboardTeacher size={28} className="text-gray-600" />
                }
            />
        </>
    )
}

export default Teacher
