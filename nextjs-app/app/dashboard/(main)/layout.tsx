"use client"

import { SideNav } from "@/app/dashboard/_components"
import { store } from "@/store"
import { Provider } from "react-redux"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={store}>
            <div className="dashboard-layout md:overflow-hidden login-container flex gap-2 p-3 sm:p-0 h-full w-full">
                <SideNav />
                <div className="flex-1 h-full rounded-r-xl bg-white/30 p-4">
                    {children}
                </div>
            </div>
        </Provider>
    )
}

export default DashboardLayout
