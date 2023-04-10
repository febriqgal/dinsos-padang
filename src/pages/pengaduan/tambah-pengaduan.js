import { db, FirebaseStorage } from "@/db/firebase";
import protectLogin from "@/protect/protect-login";
import protectPengaduan from "@/protect/protect-pengaduan";
import dayjs from "dayjs";
import "dayjs/locale/id";
import relativeTime from "dayjs/plugin/relativeTime";
import { getAuth } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
const TambahPengaduan = () => {
  dayjs.locale("id");
  dayjs.extend(relativeTime);
  const route = useRouter();
  const { register, handleSubmit, control, reset } = useForm();
  const uid = uuidv4();
  const auth = getAuth();
  const user = auth.currentUser;
  const [imageUpload, setImageUpload] = useState();
  const storageRef = ref(FirebaseStorage, `image/pengaduan/${uid}`);
  const addDatafromDBFirestore = async (data) => {
    uploadBytes(storageRef, imageUpload);
    const push = async () => {
      await addDoc(collection(db, "pengaduan"), {
        judul: data.judul,
        isi: data.isi,
        penulis: user?.displayName,
        tanggal_pengaduan: dayjs().format("ddd, MMM D, YYYY HH:mm"),
        tanggal: dayjs().format(),
        dilihat: 0,
        gambar: storageRef.name,
      });
      reset();
      route.back();
    };
    toast.promise(push(), {
      loading: "Mohon tunggu...",
      success: <b>Berhasil menambahkan pengaduan</b>,
      error: <b>Terjadi kesalahan, silahkan coba lagi.</b>,
    });
  };
  return (
    <div className={"min-h-screen flex flex-col justify-center items-center"}>
      <Toaster />
      <form
        className="flex flex-col w-full md:w-[500px] m-auto pt-10 px-10"
        onSubmit={handleSubmit(addDatafromDBFirestore)}
      >
        <textarea
          className="mb-2 py-1 px-3 w-full rounded-lg mr-2 shadow-lg"
          placeholder="Masukan judul pengaduan"
          control={control}
          {...register("judul", { required: true })}
        />
        <div>
          <label className="mr-2">Pilih Foto:</label>
          <input
            className="mb-2 py-1 px-3 w-full rounded-lg mr-2 shadow-lg"
            type="file"
            {...register("gambar", { required: true })}
            onChange={(event) => {
              setImageUpload(event.target.files[0]);
            }}
          />
        </div>
        <textarea
          rows={"6"}
          className="mb-2 py-1 px-3 w-full rounded-lg mr-2 shadow-lg"
          placeholder="Masukan isi pengaduan"
          control={control}
          {...register("isi", { required: true })}
        />
        <button
          className="hover:bg-gray-900 w-full duration-1000 shadow-lg hover:text-white mb-2 py-1 px-3 rounded-lg hover:cursor-pointer"
          type="submit"
        >
          Kirim
        </button>
      </form>
    </div>
  );
};

export default protectPengaduan(TambahPengaduan);
