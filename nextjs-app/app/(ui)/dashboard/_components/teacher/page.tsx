import Link from "next/link"

const Teacher = () => {
    return (
        <div className="teacher-container h-full w-full bg-white/50 p-4 rounded-lg shadow-md backdrop-sepia-0">
            <h6 className="mb-2 leading-none text-gray-600 font-semibold">
                Teachers
            </h6>
            <div className="teacher-content">
                <div className="amount-of-teachers border-b border-gray-300 mb-2 pb-2">
                    <TeachersStat
                        spanColor="text-green-700"
                        amount={25}
                        title="Total Teachers"
                    />
                    <TeachersStat
                        spanColor="text-blue-700"
                        amount={20}
                        title="Active Teachers"
                    />
                    <TeachersStat
                        spanColor="text-red-700"
                        amount={5}
                        title="Inactive Teachers"
                    />
                </div>
            </div>
            <Link
                href="#"
                className="text-blue-500 hover:underline text-sm float-right"
            >
                See more {">>"}
            </Link>
        </div>
    )
}

export default Teacher

type TeachersStatProps = {
    spanColor: string
    amount: number
    title: string
}
const TeachersStat = (props: TeachersStatProps) => {
    return (
        <p className="text-sm text-gray-700 font-medium">
            • {props.title}:{" "}
            <span className={`${props.spanColor} font-semibold`}>
                {props.amount}
            </span>
        </p>
    )
}
