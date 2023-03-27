import React from "react";
import { Button, Loading } from "@nextui-org/react";
import Styles from "../../styles/Home.module.css";
import Layout from "@/components/layout";
import { useRouter } from "next/router";
import Link from "next/link";
export default function ProfilDinas() {
  const route = useRouter();
  return (
    <Layout title={"Profil Dinas - "}>
      <a
        onClick={() => {
          document.documentElement.scrollTop = 0;
        }}
        className="bottom-10 right-10 bg-sky-900 w-10 aspect-square fixed z-50 items-center flex justify-center text-white rounded-full"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M20 14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14C4 9.58172 7.58172 6 12 6C16.4183 6 20 9.58172 20 14Z"
            fill="#ffffff"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.46967 6.53033C7.17678 6.23744 7.17678 5.76257 7.46967 5.46967L11.4696 1.46967C11.6103 1.32902 11.801 1.25 12 1.25C12.1989 1.25 12.3896 1.32901 12.5303 1.46967L16.5303 5.46967C16.8232 5.76256 16.8232 6.23743 16.5303 6.53033C16.2374 6.82322 15.7626 6.82322 15.4697 6.53033L12.75 3.81065L12.75 16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16L11.25 3.81067L8.53033 6.53033C8.23744 6.82322 7.76257 6.82322 7.46967 6.53033Z"
            fill="#ffffff"
          />
        </svg>
      </a>
      <div className="flex flex-col items-center lg:flex-row gap-4 justify-center my-10 mx-10 lg:px-0">
        <a href="#kepaladinas">
          <Button className="bg-sky-900">Kepala Dinas</Button>
        </a>
        <a href="#visidanmisi">
          <Button className="bg-sky-900">Visi Dan Misi</Button>
        </a>
        <a href="#tugasdanfungsi">
          <Button className="bg-sky-900">Tugas Dan Fungsi</Button>
        </a>
        <a href="#strukturorganisasi">
          <Button className="bg-sky-900">Struktur Organisasi</Button>
        </a>
        <a href="#singkatsejarah">
          <Button className="bg-sky-900">Singkat Sejarah</Button>
        </a>
      </div>
      <div>
        <h1 id="kepaladinas" className={`min-h-screen text-center`}>
          Kepala Dinas
        </h1>
        <h1 id="visidanmisi" className={`min-h-screen text-center`}>
          Visi dan Misi
        </h1>
        <h1 id="tugasdanfungsi" className={`min-h-screen text-center`}>
          Tugas dan Fungsi
        </h1>
        <h1 id="strukturorganisasi" className={`min-h-screen text-center`}>
          Struktur Organisasi
        </h1>
        <h1 id="singkatsejarah" className={`min-h-screen text-center`}>
          Singkat Sejarah
        </h1>
      </div>
    </Layout>
  );
}
