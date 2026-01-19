import { PageTitle } from "@/app/dashboard/_components"
import BackButton from "@/app/dashboard/_components/common/BackButton"
import { MOCK_TEACHERS } from "@/services/mocks/teachers.mock"
import { getTeacherById } from "@/services/teacher.service"
import { IExpertise } from "@/types/teacher"
import { notFound } from "next/navigation"
import { Suspense } from "react"
import { RiFileUserLine } from "react-icons/ri"

export function generateStaticParams() {
    return MOCK_TEACHERS.map((teacher) => ({
        id: teacher.id,
    }))
}

interface TeacherDetailProps {
    params: {
        id: string
    }
}

const TeacherDetail = async ({ params }: TeacherDetailProps) => {
    const { id } = await params

    return (
        <div className="flex flex-col h-full">
            <PageTitle
                title="Teacher Details"
                icon={
                    <RiFileUserLine
                        size={28}
                        className="text-medium-blue-ems"
                    />
                }
            >
                <BackButton />
            </PageTitle>

            <Suspense fallback={<TeacherDetailSkeleton />}>
                <TeacherContent id={id} />
            </Suspense>
        </div>
    )
}

export default TeacherDetail

const TeacherContent = async ({ id }: { id: string }) => {
    const teacher = await getTeacherById(id)

    if (!teacher) return notFound()
    return (
        <div className="bg-light_1-blue-ems/50 shadow-lg rounded-lg p-6 h-full overflow-hidden flex-1 flex flex-col">
            <h3 className="text-2xl mb-6 text-dark-blue-ems">
                {teacher.firstName} {teacher.lastName}
            </h3>
            <div className="flex-1 overflow-y-auto">
                <div className="space-y-4">
                    <div>
                        <strong className="text-bold-blue-ems block mb-1">
                            Email:
                        </strong>
                        <span className="text-gray-700">{teacher.email}</span>
                    </div>

                    <div>
                        <strong className="text-bold-blue-ems block mb-1">
                            Phone:
                        </strong>
                        <span className="text-gray-700">
                            {teacher.phoneNumber}
                        </span>
                    </div>

                    <div>
                        <strong className="text-bold-blue-ems block mb-1">
                            Subject:
                        </strong>
                        <span className="bg-medium-blue-ems text-white px-3 py-1 rounded-full text-sm inline-block">
                            {(teacher.expertise as IExpertise).primarySubject}
                        </span>
                    </div>

                    <div>
                        <strong className="text-bold-blue-ems block mb-1">
                            Experience:
                        </strong>
                        <span className="text-gray-700">
                            {
                                (teacher.expertise as IExpertise)
                                    .yearsOfExperience
                            }{" "}
                            years
                        </span>
                    </div>

                    <div>
                        <strong className="text-bold-blue-ems block mb-2">
                            Skills:
                        </strong>
                        <div className="flex flex-wrap gap-2">
                            {(teacher.expertise as IExpertise).skills.map(
                                (skill, index) => (
                                    <span
                                        key={index}
                                        className="bg-light-blue-ems text-white px-3 py-1 rounded-full text-sm"
                                    >
                                        {skill}
                                    </span>
                                )
                            )}
                        </div>
                    </div>

                    <div>
                        <strong className="text-bold-blue-ems block mb-1">
                            Salary:
                        </strong>
                        <span className="text-dark-blue-ems font-bold text-lg">
                            ${teacher.salaryBasic.toLocaleString()}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const TeacherDetailSkeleton = () => (
    <div className="bg-gray-100 animate-pulse shadow-lg rounded-lg p-6 h-full flex flex-col">
        <div className="h-8 bg-gray-300 rounded w-1/2 mb-6"></div>
        <div className="space-y-4 flex-1">
            {[...Array(5)].map((_, i) => (
                <div key={i}>
                    <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
                    <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                </div>
            ))}
        </div>
    </div>
)
