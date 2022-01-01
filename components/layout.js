import Footer from "../components/footer/footer";
import Meta from "../components/meta";
import Header from "./header";

export default function Layout({ preview, children }) {
  return (
    <>
      <Header />
      <Meta />
      <main>{children}</main>
      <Footer />
    </>
  );
}
