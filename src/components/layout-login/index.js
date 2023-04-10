import Head from "next/head";
import Styles from "../../styles/Home.module.css";
export default function LayoutLogin({ children, title }) {
  return (
    <section className="bg-sky-900">
      <Head>
        <title>{title} Dinas Sosial Prov. Sumatera Barat</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>{children}</main>
    </section>
  );
}
