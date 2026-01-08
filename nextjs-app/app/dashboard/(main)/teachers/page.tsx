import React, { Suspense } from "react"
import { FaChalkboardTeacher } from "react-icons/fa"
import PageTitle from "@/app/dashboard/_components/common/PageTitle"
import TeacherList from "@/app/dashboard/_components/teacher/TeacherList"
import TeacherTableSkeleton from "@/app/dashboard/_components/teacher/TeacherTableSkeleton"
import CreateTeacherButton from "@/app/dashboard/_components/teacher/CreateTeacherButton"
import CreateTeacherStoreButton from "@/app/dashboard/_components/teacher/CreateTeacherStoreButton"
import RemoveTeachersStore from "@/app/dashboard/_components/teacher/RemoveTeachersStore"

const Teacher: React.FC = async () => {
    return (
        <div className="flex flex-col h-full">
            <PageTitle
                title="Teachers"
                icon={
                    <FaChalkboardTeacher
                        size={28}
                        className="text-medium-blue-ems
                    "
                    />
                }
            >
                <CreateTeacherButton />

                <CreateTeacherStoreButton />
            </PageTitle>
            <div className="mt-1 flex-1 overflow-y-auto">
                <Suspense fallback={<TeacherTableSkeleton />}>
                    <TeacherList />
                </Suspense>
            </div>
            <RemoveTeachersStore />
        </div>
    )
}

export default Teacher
