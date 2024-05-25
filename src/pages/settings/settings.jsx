import { useState } from "react";
import images from "../../assets";
import Switch from "../../components/switch/Switch";
import ClickSwitch from "../../components/switch/ClickSwitch";
import Dropdown from "../../components/switch/Dropdown";
import ContactInfo from "./ContactInfo";
import Profile from "../settings/profile";
import Pass from "../settings/Pass";
import SystemSet from "./SystemSet";

export default function Settings() {
  return (
    <div className="flex space-x-6 space-y-2 w-full">
      <div className="flex flex-auto w-1/3 flex-col ">
        <Profile />

        <Pass />
      </div>

      <div className="flex flex-auto w-2/3 flex-col">
        <ContactInfo />
        <SystemSet />
      </div>
    </div>
  );
}
