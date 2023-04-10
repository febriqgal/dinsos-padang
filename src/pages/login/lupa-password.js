import LayoutLogin from "@/components/layout-login";
import React from "react";
import Styles from "../../styles/Home.module.css";
import { auth } from "@/db/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { Button, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import { useState } from "react";
import Head from "next/head";
export default function LupaPassword() {
  const [isDisable, setDisable] = useState(false);
  const { register, handleSubmit } = useForm();
  const resetPassword = (data) => {
    const push = async () => {
      await sendPasswordResetEmail(auth, data.email);
      setDisable(true);
    };
    toast.promise(push(), {
      loading: "Mohon tunggu...",
      success: <b>Berhasil reset password, silahkan cek email / spam email</b>,
      error: <b>Terjadi kesalahan, silahkan coba lagi.</b>,
    });
  };

  return (
    <LayoutLogin title={"Lupa Password - "}>
      <Toaster />
      <div className={"flex min-h-screen items-center flex-col justify-center"}>
        <form className="flex flex-col" onSubmit={handleSubmit(resetPassword)}>
          <input
            className="mb-2 py-1 px-3  rounded-lg mr-2 shadow-lg"
            placeholder="Masukan email"
            disabled={isDisable}
            {...register("email", { required: true })}
          />
          <Button disabled={isDisable} type="submit">
            Kirim
          </Button>
        </form>
      </div>
    </LayoutLogin>
  );
}
