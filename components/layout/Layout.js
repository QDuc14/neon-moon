import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="pt-16 -mt-px">{children}</main>
      <Footer />
    </>
  );
}
