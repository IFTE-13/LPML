import { Footer } from "@/components/app/shared/footer";
import { Navbar } from "@/components/app/shared/navbar";

export default async  function AppLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
          <Navbar />
          {children}
          <Footer />
        </>
    );
  }