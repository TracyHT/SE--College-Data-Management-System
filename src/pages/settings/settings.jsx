import ContactInfo from "./ContactInfo";
import Profile from "../settings/profile";
import Pass from "../settings/Pass";
import SystemSet from "./SystemSet";

export default function Settings() {
  return (
    <div className="h-[800px] w-[1200px] flex space-x-6 space-y-2 ml-20">
      <div className="flex flex-col ">
        <Profile />

        <Pass />
      </div>

      <div className="flex flex-col">
        <ContactInfo />
        <SystemSet />
      </div>
    </div>
  );
}
