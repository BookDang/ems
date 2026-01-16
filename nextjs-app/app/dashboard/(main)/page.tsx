import PageTitle from "@/app/dashboard/_components/common/PageTitle"
import { FaChalkboardTeacher } from "react-icons/fa"
import { MdDashboard } from "react-icons/md"

const DashboardPage = () => {
    return (
        <div className="w-full h-full">
            <PageTitle
                title="Dashboard"
                icon={
                    <MdDashboard
                        size={28}
                        className="text-medium-blue-ems
                    "
                    />
                }
            ></PageTitle>
            <div className="dashboard-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
        </div>
    )
}

export default DashboardPage
