/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/layout";
import { Carousel } from "flowbite-react";
import { Loading, Tooltip } from "@nextui-org/react";
import dayjs from "dayjs";
import "dayjs/locale/id";
import relativeTime from "dayjs/plugin/relativeTime";
import {
  collection,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { db } from "@/db/firebase";
import dibuat from "../../public/dibuat.svg";
import penulis from "../../public/penulis.svg";
import styles from "../styles/Home.module.css";
export default function Index() {
  const route = useRouter();
  dayjs.locale("id");
  dayjs.extend(relativeTime);
  const snapshot = useRef(null);
  const [isLoading, setIsloading] = useState(true);
  const getDBFromFirestore = async () => {
    const querySnapshot = query(
      collection(db, "berita"),
      limit(4),
      orderBy("dilihat", "desc")
    );
    const gettt = await getDocs(querySnapshot);
    snapshot.current = gettt.docs;
    setTimeout(() => {
      setIsloading(false);
    }, 1000);
  };

  useEffect(() => {
    getDBFromFirestore();
  }, []);

  if (isLoading) {
    return (
      <div className={styles.main}>
        <Loading color={"currentColor"} />
      </div>
    );
  } else {
    const post = snapshot.current;
    const data = Object.values(post);
    return (
      <Layout>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 scale-[1.02]">
          <Carousel leftControl=" " rightControl=" ">
            <Image
              width={900}
              height={100}
              src="https://firebasestorage.googleapis.com/v0/b/dinsos-padang.appspot.com/o/image%2Fheader%2F1?alt=media&token=050e2e85-9e21-4497-9f13-4980ddb1d6a8"
              alt="..."
            />
            <Image
              width={900}
              height={100}
              src="https://firebasestorage.googleapis.com/v0/b/dinsos-padang.appspot.com/o/image%2Fheader%2F2?alt=media&token=050e2e85-9e21-4497-9f13-4980ddb1d6a8"
              alt="..."
            />
            <Image
              width={900}
              height={100}
              src="https://firebasestorage.googleapis.com/v0/b/dinsos-padang.appspot.com/o/image%2Fheader%2F3?alt=media&token=050e2e85-9e21-4497-9f13-4980ddb1d6a8"
              alt="..."
            />
            <Image
              width={900}
              height={100}
              src="https://firebasestorage.googleapis.com/v0/b/dinsos-padang.appspot.com/o/image%2Fheader%2F4?alt=media&token=050e2e85-9e21-4497-9f13-4980ddb1d6a8"
              alt="..."
            />
          </Carousel>
        </div>
        <h1 className="mt-5 text-center m-auto font-bold">Berita Terpopuler</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-5 px-10 gap-5">
          {data.map((e, i) => {
            const Data = e.data();
            return (
              <div
                key={i}
                className="mx-auto w-full rounded-xl shadow-lg bg-white max-w-sm"
              >
                <div className="overflow-clip rounded-t-lg rounded-br-3xl shadow-xl">
                  <img
                    onClick={async () => {
                      route.push(`/berita/${e.id}`);
                      const frankDocRef = doc(db, "berita", `${e.id}`);
                      await updateDoc(frankDocRef, {
                        dilihat: Data.dilihat + 1,
                      });
                    }}
                    className="object-cover h-48 w-full hover:scale-110 duration-1000 hover:cursor-pointer"
                    src={`https://firebasestorage.googleapis.com/v0/b/dinsos-padang.appspot.com/o/image%2Fberita%2F${Data?.gambar}?alt=media&token=c7f8bf32-09db-4b9b-ace9-8f34a52d35fa`}
                    alt={"#"}
                  />
                </div>
                <div className="px-5 py-5">
                  <div className="justify-between mb-4">
                    <h5 className="text-gray-900 text-xl font-bold">
                      <div className={styles.truncate2}>{Data.judul}</div>
                    </h5>
                    <div className="flex justify-between mt-1">
                      <div className="flex items-center gap-2">
                        <Image src={penulis} width={20} alt={"#"} />
                        <h5 className="text-gray-900 text-xs font-medium ">
                          {Data.penulis}
                        </h5>
                      </div>
                      <div className="flex items-center gap-2">
                        <Image src={dibuat} width={20} alt={"#"} />
                        <Tooltip shadow={true} content={Data.tanggal_berita}>
                          <h5 className="text-gray-900 text-xs font-medium ">
                            {dayjs(Data.tanggal).fromNow()}
                          </h5>
                        </Tooltip>
                      </div>
                    </div>
                  </div>
                  <div className="text-gray-700  h-20 text-base">
                    <h1 className={styles.truncate3}>{Data.isi}</h1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Layout>
    );
  }
}
