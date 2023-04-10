/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { Loading } from "@nextui-org/react";
import dayjs from "dayjs";
import "dayjs/locale/id";
import relativeTime from "dayjs/plugin/relativeTime";
import { deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { deleteObject, getStorage, ref } from "firebase/storage";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import styles from "../../styles/Home.module.css";
import { db, FirebaseStorage } from "@/db/firebase";
export default function detail() {
  const { register, handleSubmit, control } = useForm();
  const [isLoading, setIsloading] = useState(true);
  const route = useRouter();
  const { iddownload } = route.query;
  const snapshot = useRef(null);
  const [isDisable, setIsDisble] = useState(false);
  dayjs.locale("id");
  dayjs.extend(relativeTime);

  const datadownload = async () => {
    const docRef = doc(db, "download", `${iddownload}`);
    const docSnap = await getDoc(docRef);
    snapshot.current = docSnap.data();
    setIsloading(false);
  };
  const updateDataa = async (data) => {
    const push = async () => {
      const docRef = doc(db, "download", `${iddownload}`);
      await updateDoc(docRef, {
        judul: data.judul,
        link: data.link,
      });
      route.back();
    };
    toast.promise(push(), {
      loading: "Menyimpan...",
      success: <b>Berhasil edit download</b>,
      error: <b>Terjadi kesalahan, silahkan coba lagi!</b>,
    });
    setIsDisble(true);
  };

  useEffect(() => {
    datadownload();
  });
  if (isLoading) {
    return (
      <div className={styles.center}>
        <Loading color={"currentColor"} />
      </div>
    );
  } else {
    const post = snapshot.current;

    return (
      <div className={'min-h-screen flex items-center'}>
        <Toaster />
        <form
          className="flex flex-col text-slate-900 w-full px-5 sm:w-[500px]"
          onSubmit={handleSubmit(updateDataa)}
        >
          <label className="text-center mb-2">
            Judul
            <textarea
              className="mb-2  py-1 px-3 w-full rounded-lg mr-2 shadow-lg"
              placeholder="Masukan judul*"
              control={control}
              disabled={isDisable}
              defaultValue={post ? post.judul : ""}
              {...register("judul", { required: true })}
            />
          </label>
          <label className="text-center mb-2">
            link download
            <textarea
              rows={"10"}
              className="mb-2 py-1 px-3 w-full rounded-lg mr-2 shadow-lg"
              placeholder="Masukan link*"
              control={control}
              disabled={isDisable}
              defaultValue={post ? post.link : ""}
              {...register("link")}
            />
          </label>
          <button
            type="button"
            onClick={async () => {
              const docRef = doc(db, "download", `${iddownload}`);
              await deleteDoc(docRef);
              route.back();
            }}
            className="hover:bg-gray-900 w-full duration-1000 shadow-lg hover:text-white mb-2 py-1 px-3 rounded-lg hover:cursor-pointer"
          >
            Hapus
          </button>
          <button
            disabled={isDisable}
            className="hover:bg-gray-900 w-full duration-1000 shadow-lg hover:text-white mb-2 py-1 px-3 rounded-lg hover:cursor-pointer"
            type="submit"
          >
            Kirim
          </button>
        </form>
      </div>
    );
  }
}
