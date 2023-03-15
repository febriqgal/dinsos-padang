import React from "react";
import { Loading } from "@nextui-org/react";
import Styles from "../../styles/Home.module.css";
import Layout from "@/components/layout";
export default function ProfilDinas() {
  return (
    <Layout title={"Profil Dinas - "}>
      <div className={Styles.center}>
        <h1>Profile Dinas</h1>
      </div>
    </Layout>
  );
}
