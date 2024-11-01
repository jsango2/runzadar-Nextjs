import Footer from "../components/footer/footer";
import Meta from "../components/meta";
import Header from "./header";

export default function Layout({ preview, children, hasButtonSignUp }) {
  return (
    <>
      <Header hasButtonSignUp={hasButtonSignUp} />
      <Meta />
      <main>{children}</main>
      <Footer />
    </>
  );
}
