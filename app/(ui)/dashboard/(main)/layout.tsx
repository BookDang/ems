import { SideNav } from "@/app/(ui)/dashboard/_components";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="dashboard-layout md:overflow-hidden login-container flex gap-2 justify-center p-3 sm:p-0 h-full w-full">
      <div className="w-full md:w-64 h-full ">
        <SideNav />
      </div>
      <div className="grow md:overflow-y-auto h-full rounded-xl bg-white/30 p-4">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
