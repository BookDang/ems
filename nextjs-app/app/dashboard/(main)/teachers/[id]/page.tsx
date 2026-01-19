import { PageTitle } from "@/app/dashboard/_components"
import BackButton from "@/app/dashboard/_components/common/BackButton"
import { MOCK_TEACHERS, getTeacherById } from "@/services/mocks/teachers.mock"
import { IExpertise } from "@/types/teacher"
import { notFound } from "next/navigation"
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
    console.log("TeacherDetail params - Book:", params)
    const { id } = await params
    const teacher = getTeacherById(id)

    if (!teacher) {
        notFound()
    }

    const expertise = teacher.expertise as IExpertise

    return (
        <div className="flex flex-col h-full">
            <PageTitle
                title="Teacher Details"
                icon={
                    <RiFileUserLine
                        size={28}
                        className="text-medium-blue-ems
                    "
                    />
                }
            >
                <BackButton />
            </PageTitle>
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
                            <span className="text-gray-700">
                                {teacher.email}
                            </span>
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
                                {expertise.primarySubject}
                            </span>
                        </div>

                        <div>
                            <strong className="text-bold-blue-ems block mb-1">
                                Experience:
                            </strong>
                            <span className="text-gray-700">
                                {expertise.yearsOfExperience} years
                            </span>
                        </div>

                        <div>
                            <strong className="text-bold-blue-ems block mb-2">
                                Skills:
                            </strong>
                            <div className="flex flex-wrap gap-2">
                                {expertise.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="bg-light-blue-ems text-white px-3 py-1 rounded-full text-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
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
        </div>
    )
}

export default TeacherDetail
