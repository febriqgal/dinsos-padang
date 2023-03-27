import LayoutLogin from "@/components/layout-login";
import React from "react";
import Styles from "../../styles/Home.module.css";
export default function LupaPassword() {
  return (
    <LayoutLogin>
      <div className={Styles.center}>
        <h1 className="text-white">Lupa Password</h1>
      </div>
    </LayoutLogin>
  );
}
