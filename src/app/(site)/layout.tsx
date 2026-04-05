import Footer from "@/components/Footer";
import MotionRoot from "@/components/MotionRoot";
import Navbar from "@/components/Navbar";

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <MotionRoot />
      <Navbar />
      <main className="site-main">
        {children}
      </main>
      <Footer />
    </>
  );
}
