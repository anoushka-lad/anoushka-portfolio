import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
