import React from "react"
import { FaChalkboardTeacher } from "react-icons/fa"
import PageTitle from "@/app/(ui)/dashboard/_components/common/PageTitle"
import TeacherList from "@/app/(ui)/dashboard/_components/teacher/TeacherList"

const Teacher: React.FC = () => {
    return (
        <>
            <PageTitle
                title="Teachers"
                icon={
                    <FaChalkboardTeacher
                        size={28}
                        className="text-medium-blue-ems
                    "
                    />
                }
            />
            <div className="mt-1">
                <TeacherList teachers={[]} />
            </div>
        </>
    )
}

export default Teacher
