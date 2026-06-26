import DashboardHeader from "@/components/DashboardHeader";
import Footer from "@/components/Footer";

export default function DashboardLayout({
  children,
  sidebar,
  contents,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  contents: React.ReactNode;
}) {
  return (
    <div className="flex h-full w-full">
      <aside className="w-[250px] shrink-0 bg-blue-900 h-screen">
        {sidebar}
      </aside>
      <div className="flex flex-1 flex-col">
        <DashboardHeader />
        <div className="flex-1 mx-5">
          {children}
          {contents}
        </div>
        <Footer />
      </div>
    </div>
  );
}
