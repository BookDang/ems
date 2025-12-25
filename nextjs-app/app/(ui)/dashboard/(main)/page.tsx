const DashboardPage = () => {
    return (
        <div className="w-full h-full">
            <h2 className="text-2xl mb-4 leading-none text-gray-600 font-semibold">
                Dashboard
            </h2>
            <div className="dashboard-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
        </div>
    )
}

export default DashboardPage
