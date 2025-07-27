import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="bg-midnight text-light">{children}</main>
      <Footer />
    </>
  );
}
