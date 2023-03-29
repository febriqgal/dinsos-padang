/* eslint-disable @next/next/no-img-element */
/* This example requires Tailwind CSS v2.0+ */
import Image from "next/image";
import Link from "next/link";
import { Toaster } from "react-hot-toast";
import Head from "next/head";
import { useRouter } from "next/router";
import editprofile from "../../../public/editprofile.svg";

import CardProfile from "./card-profile";

const LayoutAdmin = ({ children }) => {
  const navigation = [
    { name: "Beranda", icon: editprofile, href: "/admin" },
    { name: "Tambah Berita", icon: editprofile, href: "/admin/tambah-berita" },
    { name: "Tambah Download", icon: editprofile, href: "/admin/download" },
    { name: "Kelola Header", icon: editprofile, href: "/admin/ganti-header" },
    { name: "Kelola Pengguna", icon: editprofile, href: "/admin/users" },
    {
      name: "Kelola Pengaduan",
      icon: editprofile,
      href: "/admin/pengaduan",
    },

    { name: "Kelola Berita", icon: editprofile, href: "/admin/berita" },
    { name: "Keluar", icon: editprofile, href: "/" },
  ];
  const route = useRouter();
  return (
    <>
      <Toaster />
      <Head>
        <title>Admin - BPTD III Sumbar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>
      {/* Mobile */}
      <div className="md:hidden w-full py-2 m-auto items-center bottom-1 fixed z-[9999]">
        <div className="shadow-xl mx-5 p-5 flex justify-between rounded-lg">
          {navigation.map((e, i) => (
            <Link className="flex justify-around" key={i} href={e.href}>
              <Image src={e.icon} width={30} alt={"#"} />
            </Link>
          ))}
        </div>
      </div>
      {/* Destop */}
      <div className="hidden outline-1 border-x-2 md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex-1 flex flex-col min-h-0 shadow-xl">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto ">
            <Link
              href={"/"}
              className="pt-4 pb-8 text-center font-bold text-xl"
            >
              Admin
            </Link>

            <nav className="flex-1 text-sm flex flex-col px-2 space-y-1 ">
              {navigation.map((e, i) => (
                <div key={i} div className="flex gap-2 mx-2">
                  <Image src={e.icon} alt={e.name} />
                  <Link
                    className={
                      route.pathname === e.href
                        ? `bg-slate-900 text-slate-50 py-1 flex items-center px-2 rounded-lg`
                        : `hover:bg-slate-900 hover:text-white py-1 flex items-center hover:px-2 rounded-lg duration-1000`
                    }
                    href={e.href}
                  >
                    {e.name}
                  </Link>
                </div>
              ))}
            </nav>
          </div>
          <CardProfile />
        </div>
      </div>
      <div className="pl-0 md:pl-64 flex flex-col flex-1">
        <div>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export default LayoutAdmin;
