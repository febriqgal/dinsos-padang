/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// import { getStorage, ref, uploadBytes } from "firebase/storage";
import { FirebaseStorage } from "@/db/firebase";
import { ref } from "firebase/storage";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import homeroute from "../../../public/homeroute.svg";
import LayoutAdmin from "../../components/layout-admin";
import { uploadBytes } from "firebase/storage";
export default function UploadHeader() {
  const { register, handleSubmit } = useForm();
  //======================= 1
  const [imageUploadHeader1, setImageUploadHeader1] = useState();
  const storageRefHeader1 = ref(FirebaseStorage, `image/header/1`);
  const addDataImageHeader1 = () => {
    const push = async () => {
      if (imageUploadHeader1 == null) return;
      await uploadBytes(storageRefHeader1, imageUploadHeader1);
    };

    toast.promise(push(), {
      success: "Berhasil",
      loading: "Mohon tunggu...",
      error: "Terjadi kesalahan",
    });
  };

  //======================= 2
  const [imageUploadHeader2, setImageUploadHeader2] = useState();
  const storageRefHeader2 = ref(FirebaseStorage, `image/header/2`);
  const addDataImageHeader2 = async () => {
    const push = async () => {
      if (imageUploadHeader2 == null) return;
      await uploadBytes(storageRefHeader2, imageUploadHeader2);
    };
    toast.promise(push(), {
      success: "Berhasil",
      loading: "Mohon tunggu...",
      error: "Terjadi kesalahan",
    });
  };
  //======================= 3
  const [imageUploadHeader3, setImageUploadHeader3] = useState();
  const storageRefHeader3 = ref(FirebaseStorage, `image/header/3`);
  const addDataImageHeader3 = async () => {
    const push = async () => {
      if (imageUploadHeader3 == null) return;
      await uploadBytes(storageRefHeader3, imageUploadHeader3);
    };
    toast.promise(push(), {
      success: "Berhasil",
      loading: "Mohon tunggu...",
      error: "Terjadi kesalahan",
    });
  };
  //======================= 4
  const [imageUploadHeader4, setImageUploadHeader4] = useState();
  const storageRefHeader4 = ref(FirebaseStorage, `image/header/4`);
  const addDataImageHeader4 = async () => {
    const push = async () => {
      if (imageUploadHeader4 == null) return;
      await uploadBytes(storageRefHeader4, imageUploadHeader4);
    };
    toast.promise(push(), {
      success: "Berhasil",
      loading: "Mohon tunggu...",
      error: "Terjadi kesalahan",
    });
  };

  return (
    <LayoutAdmin>
      <div className="flex p-4 place-items-center gap-2">
        <Image width={20} src={homeroute} alt={"#"} />
        <h1 className="text-xs">Admin / Ganti Header</h1>
      </div>
      {/* //======================= 1 */}
      <form
        className="flex gap-4 w-full md:w-[800px] m-auto pt-10 px-10"
        onSubmit={handleSubmit(addDataImageHeader1)}
      >
        <div className="w-[400px] aspect-video overflow-hidden rounded-xl">
          <img
            className="hover:scale-110 duration-1000"
            src={
              "https://firebasestorage.googleapis.com/v0/b/dinsos-padang.appspot.com/o/image%2Fheader%2F1?alt=media&token=050e2e85-9e21-4497-9f13-4980ddb1d6a8"
            }
          />
        </div>

        <input
          className="mb-2 py-1 px-3 w-full rounded-lg mr-2 shadow-lg"
          type="file"
          onChange={(event) => {
            setImageUploadHeader1(event.target.files[0]);
          }}
        ></input>
        <button
          className="text-xs hover:bg-gray-900 w-full mt-2 duration-1000 shadow-lg hover:text-white mb-2 py-1 px-3 rounded-lg hover:cursor-pointer"
          type="submit"
        >
          Kirim
        </button>
      </form>
      {/* //======================= 2 */}
      <form
        className="flex w-full gap-4 md:w-[800px] m-auto pt-10 px-10"
        onSubmit={handleSubmit(addDataImageHeader2)}
      >
        <div className="w-[400px] aspect-video overflow-hidden rounded-xl">
          <img
            className="hover:scale-110 duration-1000"
            src={
              "https://firebasestorage.googleapis.com/v0/b/dinsos-padang.appspot.com/o/image%2Fheader%2F2?alt=media&token=050e2e85-9e21-4497-9f13-4980ddb1d6a8"
            }
          />
        </div>
        <input
          className="mb-2 py-1 px-3 w-full rounded-lg mr-2 shadow-lg"
          type="file"
          onChange={(event) => {
            setImageUploadHeader2(event.target.files[0]);
          }}
        ></input>
        <button
          className="text-xs hover:bg-gray-900 w-full mt-2 duration-1000 shadow-lg hover:text-white mb-2 py-1 px-3 rounded-lg hover:cursor-pointer"
          type="submit"
        >
          Kirim
        </button>
      </form>
      {/* //======================= 3 */}
      <form
        className="flex w-full gap-4 md:w-[800px] m-auto pt-10 px-10"
        onSubmit={handleSubmit(addDataImageHeader3)}
      >
        <div className="w-[400px] aspect-video overflow-hidden rounded-xl">
          <img
            className="hover:scale-110 duration-1000"
            src={
              "https://firebasestorage.googleapis.com/v0/b/dinsos-padang.appspot.com/o/image%2Fheader%2F3?alt=media&token=050e2e85-9e21-4497-9f13-4980ddb1d6a8"
            }
          />
        </div>
        <input
          className="mb-2 py-1 px-3 w-full rounded-lg mr-2 shadow-lg"
          type="file"
          onChange={(event) => {
            setImageUploadHeader3(event.target.files[0]);
          }}
        ></input>
        <button
          className="text-xs hover:bg-gray-900 w-full mt-2 duration-1000 shadow-lg hover:text-white mb-2 py-1 px-3 rounded-lg hover:cursor-pointer"
          type="submit"
        >
          Kirim
        </button>
      </form>
      {/* //======================= 4 */}
      <form
        className="flex w-full gap-4 md:w-[800px] m-auto pt-10 px-10"
        onSubmit={handleSubmit(addDataImageHeader4)}
      >
        <div className="w-[400px] aspect-video overflow-hidden rounded-xl">
          <img
            className="hover:scale-110 duration-1000"
            src={
              "https://firebasestorage.googleapis.com/v0/b/dinsos-padang.appspot.com/o/image%2Fheader%2F4?alt=media&token=050e2e85-9e21-4497-9f13-4980ddb1d6a8"
            }
          />
        </div>
        <input
          className="mb-2 py-1 px-3 w-full rounded-lg mr-2 shadow-lg"
          type="file"
          onChange={(event) => {
            setImageUploadHeader4(event.target.files[0]);
          }}
        ></input>
        <button
          className="text-xs hover:bg-gray-900 w-full mt-2 duration-1000 shadow-lg hover:text-white mb-2 py-1 px-3 rounded-lg hover:cursor-pointer"
          type="submit"
        >
          Kirim
        </button>
      </form>
    </LayoutAdmin>
  );
}
