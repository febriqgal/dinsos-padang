/* eslint-disable @next/next/no-img-element */
import { auth } from "@/db/firebase";
import { signOut, updatePassword } from "firebase/auth";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import protectLogin from "../../protect/protect-login";
import styles from "../../styles/Home.module.css";
const GantiPassword = () => {
  const { register, handleSubmit, control } = useForm();

  const user = auth.currentUser;
  const addDataImageHeader = async (data) => {
    try {
      await updatePassword(user, data.password);
      await signOut(auth);
      alert("Berhasil ganti password, silahkan login kembali!");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Head>
        <title>Ganti Password</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className={styles.main}>
        <Toaster />
        <form onSubmit={handleSubmit(addDataImageHeader)}>
          <input
            type={"password"}
            className="mb-2 py-1 px-3 rounded-lg mr-2 shadow-lg"
            placeholder="Password baru"
            control={control}
            {...register("password", { required: true })}
          />
          <button
            className="hover:bg-gray-900 duration-1000 shadow-lg hover:text-white mb-2 py-1 px-3 rounded-lg hover:cursor-pointer"
            type="submit"
          >
            Kirim
          </button>
        </form>
      </div>
    </>
  );
};
export default protectLogin(GantiPassword);
