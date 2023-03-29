import LayoutAdmin from "@/components/layout-admin";
import { Loading, Tooltip } from "@nextui-org/react";
import dayjs from "dayjs";
import "dayjs/locale/id";
import relativeTime from "dayjs/plugin/relativeTime";
import { getAuth } from "firebase/auth";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import homeroute from "../../../public/homeroute.svg";
import { db } from "@/db/firebase";
import styles from "../../styles/Home.module.css";

export default function Users() {
  const [visible, setVisible] = useState(false);
  const auth = getAuth();
  dayjs.locale("id");
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };
  dayjs.extend(relativeTime);
  const snapshot = useRef(null);
  const [isLoading, setIsloading] = useState(true);
  const getDBFromFirestore = async () => {
    const querySnapshot = query(
      collection(db, "berita"),
      orderBy("tanggal", "desc")
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

  return (
    <LayoutAdmin>
      <div className="flex p-4 place-items-center gap-2">
        <Image width={20} src={homeroute} alt={"#"} />
        <h1 className="text-xs">Admin / Kelola Berita</h1>
      </div>
      {isLoading ? (
        <div className={styles.main}>
          <Loading color={"currentColor"} />
        </div>
      ) : (
        <div className="flex flex-col my-10 mx-10">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Judul Berita
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Isi Berita
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Tanggal
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only"> </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {snapshot.current.map((e, i) => {
                      const data = e.data();
                      return (
                        <tr key={i} className={"hover:bg-slate-200"}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {`${data.judul}`.slice(0, 30)}
                            {`${data.judul}`.length > 50 ? "..." : ""}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {`${data.isi}`.slice(0, 30)}
                            {`${data.isi}`.length > 50 ? "..." : ""}
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <Tooltip content={data.tanggal_download}>
                              {dayjs(data.tanggal).fromNow()}
                            </Tooltip>
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a
                              href={`/berita/${e.id}`}
                              target={"_blank"}
                              className="text-slate-900 border px-2 rounded-lg border-slate-900 hover:bg-slate-900 hover:text-white"
                              rel="noreferrer"
                            >
                              Lihat
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </LayoutAdmin>
  );
}
