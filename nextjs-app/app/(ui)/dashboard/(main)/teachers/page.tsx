import React, { Suspense } from "react"
import { FaChalkboardTeacher } from "react-icons/fa"
import PageTitle from "@/app/(ui)/dashboard/_components/common/PageTitle"
import TeacherList from "@/app/(ui)/dashboard/_components/teacher/TeacherList"
import TeacherTableSkeleton from "@/app/(ui)/dashboard/_components/teacher/TeacherTableSkeleton"

const Teacher: React.FC = async () => {
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
                <Suspense fallback={<TeacherTableSkeleton />}>
                    <TeacherList />
                </Suspense>
            </div>
        </>
    )
}

export default Teacher
