import SideNav from "../_components/sidenav/page";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="dashboard-layout md:overflow-hidden login-container flex justify-center p-3 sm:p-0 h-full w-full">
      <div className="w-full md:w-64 h-full border-r md:border-r-0 md:border-b p-2">
        <SideNav />
      </div>
      <div className="grow p-5 md:overflow-y-auto h-full">{children}</div>
    </div>
  );
};

export default DashboardLayout;
