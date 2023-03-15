import Layout from "@/components/layout";
import Styles from "../styles/Home.module.css";
import Lottie from "lottie-react";
import Welcome from "../../public/welcome.json";
export default function index() {
  return (
    <Layout title={""}>
      <div className={`${Styles.center}`}>
        <h1>Home</h1>
      </div>
    </Layout>
  );
}
