/* eslint-disable @next/next/no-img-element */
import { auth, db } from "@/db/firebase";
import dayjs from "dayjs";
import "dayjs/locale/id";
import {
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import Head from "next/head";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import styles from "../../styles/Home.module.css";
import LayoutLogin from "@/components/layout-login";
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const titlePage = "Daftar";
  const route = useRouter();

  auth.currentUser;
  const daftar = async (data) => {
    const push = async () => {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      await setDoc(doc(db, "users", `${data.email}`), {
        uid: auth.currentUser.uid,
        nama: data.nama,
        email: data.email,
        nohp: data.nohp,
        tanggal: dayjs().format(),
      });
      await updateProfile(auth.currentUser, { displayName: data.nama });
      await signOut(auth);
      setTimeout(async () => {
        route.back();
      }, 2000);
    };
    toast.promise(push(), {
      loading: "Mohon tunggu...",
      success: <b>Berhasil, silahkan login.</b>,
      error: (error) => {
        const errorCode = error.code;
        if (errorCode === "auth/email-already-in-use") {
          toast.error("email sudah dipakai");
        } else if (errorCode === "auth/weak-password") {
          toast.error("Password terlalu lemah");
        } else {
          toast.error("Terjadi kesalahan, silahkan diulang kembali.");
        }
      },
    });
  };

  return (
    <LayoutLogin title={"Daftar - "}>
      <div className={styles.main}>
        <Toaster />

        <div className="mx-auto w-full lg:w-96">
          <div className="bg-white mx-5 p-5 shadow-xl rounded-lg">
            <h2 className="text-center mb-8 text-3xl font-extrabold text-slate-900">
              Daftar
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit(daftar)}>
              <div>
                <input
                  className="mb-2 py-2 px-4 rounded-lg w-full shadow-xl text-slate-900"
                  type={"text"}
                  maxLength={10}
                  placeholder="Nama"
                  {...register("nama", { required: true })}
                />

                <input
                  className="mb-2 py-2 px-4 rounded-lg w-full shadow-xl text-slate-900"
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />

                <input
                  className="mb-2 py-2 px-4 rounded-lg w-full shadow-xl text-slate-900"
                  type="password"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
                <input
                  className="py-2 px-4 rounded-lg w-full shadow-xl text-slate-900"
                  type={"tel"}
                  maxLength={15}
                  placeholder="No. Handphone / WA"
                  {...register("nohp", { required: true })}
                />
              </div>
              <div className="text-center"></div>
              <div>
                <button
                  onClick={() => {
                    route.back();
                  }}
                  className="text-sky-900 mb-2 w-full flex justify-center py-2 px-4 rounded-lg shadow-xl text-sm font-medium focus:outline-none focus:ring-1 focus:ring-offset-2 ring-sky-900 outline outline-1 outline-sky-800"
                >
                  Kembali
                </button>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Daftar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>{" "}
    </LayoutLogin>
  );
}
