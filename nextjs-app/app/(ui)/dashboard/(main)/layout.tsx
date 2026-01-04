"use client"

import { SideNav } from "@/app/(ui)/dashboard/_components"
import { store } from "@/store"
import { Provider } from "react-redux"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={store}>
            <div className="dashboard-layout md:overflow-hidden login-container flex gap-2 justify-center p-3 sm:p-0 h-full w-full">
                <SideNav />
                <div className="grow h-full rounded-r-xl bg-white/30 p-4">
                    {children}
                </div>
            </div>
        </Provider>
    )
}

export default DashboardLayout
