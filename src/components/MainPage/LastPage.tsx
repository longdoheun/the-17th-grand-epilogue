import AppLayout from "@/Layout/AppLayout";
import MainText from "./MainText";
import "@/styles/MainPage/MainPage.css";
import SignUp from "./SignUp";
import Footer from "@/Layout/Footer";

export default function LastPage() {
  return (
    <div className="last-con">
      <AppLayout.Invitation>
        <section className="section-left">
          <MainText />
        </section>
        <section className="section-right">
          <SignUp />
        </section>
      </AppLayout.Invitation>
      <Footer />
    </div>
  );
}
