import "@/styles/Invitation/Invitation.css";
import AppLayout from "@/Layout/AppLayout";
import { UNDERGRADUATE } from "@/lib/InvitationText";
import Logo from "@/assets/svg/logo.svg";

export default function Invitation() {
  return (
    <>
      <div className="invitation-con">
        <AppLayout.Invitation>
          <div className="invitation-title">Invitation</div>
          <section className="invitation-left">{UNDERGRADUATE}</section>
          <section className="invitation-right">
            <div className="inv-info">
              The 17th Global Economics Student Council
            </div>
            <Logo />
          </section>
        </AppLayout.Invitation>
      </div>
    </>
  );
}
