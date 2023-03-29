/* eslint-disable @next/next/no-img-element */
import { getAuth, updateProfile } from "firebase/auth";
import Head from "next/head";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { auth } from "@/db/firebase";
import styles from "../../styles/Home.module.css";
import { toast, Toaster } from "react-hot-toast";
import protectLogin from "../../protect/protect-login";
import { useRouter } from "next/router";
const GantiNama = () => {
  const route = useRouter();
  const [isDisable, setDisable] = useState(false);
  const { register, handleSubmit, control } = useForm();

  const user = auth.currentUser;
  const addDataImageHeader = async (data) => {
    const push = async () => {
      await updateProfile(auth.currentUser, {
        displayName: data.nama,
      });
      setDisable(true);
      setTimeout(() => {
        route.replace("/");
      }, 2000);
    };
    toast.promise(push(), {
      loading: "Mohon tunggu",
      success: <b>Berhasil mengganti nama</b>,
      error: <b>Terjadi kesalahan</b>,
    });
  };
  return (
    <>
      <Head>
        <title>Ganti Nama</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className={styles.main}>
        <Toaster />
        <form onSubmit={handleSubmit(addDataImageHeader)}>
          <input
            type={"text"}
            maxLength={16}
            className="mb-2 py-1 px-3 rounded-lg mr-2 shadow-lg"
            placeholder="Nama baru*"
            control={control}
            defaultValue={`${user.displayName ?? ""}`}
            {...register("nama", { required: true, disabled: isDisable })}
          />
          <button
            className="hover:bg-gray-900 duration-1000 shadow-lg hover:text-white mb-2 py-1 px-3 rounded-lg hover:cursor-pointer"
            type="submit"
            disabled={isDisable}
          >
            Kirim
          </button>
        </form>
      </div>
    </>
  );
};
export default protectLogin(GantiNama);
