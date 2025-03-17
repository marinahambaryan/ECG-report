import Sidebar from "@/app/documentation/components/Sidebar";

export default function DocumentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-25 p-8 w-full bg-white text-black">{children}</main>
    </div>
  );
}
