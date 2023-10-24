import Footer from "../Components/Footer.js";
import Header from "../Components/Header.js";
import PageBody from "../Components/PageBody.js";
import "../theme.css";
import "./root.css";

export default function Root() {
  return (
    <div id="root">
      <Header />
      <PageBody />
      <Footer />
    </div>
  );
}
