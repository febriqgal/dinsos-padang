import LayoutLogin from "@/components/layout-login";
import { useRouter } from "next/router";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/db/firebase";
import { toast, Toaster } from "react-hot-toast";
import Head from "next/head";
export default function Login() {
  const route = useRouter();
  const { register, handleSubmit, reset } = useForm();
  const user = auth.currentUser;

  const login = async (data) => {
    const push = async () => {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      setTimeout(() => {
        route.replace("/");
      }, 2000);
    };
    toast.promise(push(), {
      loading: "Mohon tunggu...",
      success: <b>Berhasil login</b>,
      error: (error) => {
        if (error.code === "auth/wrong-password") {
          toast.error("Password Salah!");
        } else if (error.code === "auth/user-not-found") {
          toast.error("Email tidak terdaftar!");
        } else {
          toast.error(
            "Tidak bisa login! karena banyak upaya login yang gagal, cobalah beberapa saat lagi!"
          );
        }
      },
    });
    reset();
  };
  return (
    <LayoutLogin title={"Login -"}>
      <Toaster />
      <div className="min-h-screen flex w-full items-center lg:flex lg:flex-col lg:justify-center lg:items-center lg:w-[400px] lg:m-auto">
        <div className="bg-white mx-5  px-5 py-5  shadow-xl rounded-md">
          <h2 className="text-center mb-8 text-3xl font-extrabold text-slate-900">
            Login
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit(login)}>
            <div>
              <input
                className="mb-2 py-2 px-4 rounded-md  w-full shadow-xl text-slate-900"
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
              />

              <input
                className="py-2 px-4 rounded-md bg-white w-full shadow-xl text-slate-900"
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
              />
            </div>
            <div className="text-center">
              <Link
                href={"/login/lupa-password"}
                className="font-medium text-sky-900"
              >
                Lupa password?
              </Link>
            </div>

            <div>
              <Link
                href={"/login/buat-akun"}
                className="text-sky-900 mb-2 w-full flex justify-center py-2 px-4 rounded-lg shadow-xl text-sm font-medium focus:outline-none focus:ring-1 focus:ring-offset-2 ring-sky-900 outline outline-1 outline-sky-800"
              >
                Buat Akun
              </Link>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-xl text-sm font-medium text-white bg-sky-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-800"
              >
                Masuk
              </button>
            </div>
          </form>
        </div>
      </div>
    </LayoutLogin>
  );
}
