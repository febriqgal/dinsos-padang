import { Loading } from "@nextui-org/react";
import dayjs from "dayjs";
import "dayjs/locale/id";
import relativeTime from "dayjs/plugin/relativeTime";
import { getAuth } from "firebase/auth";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import LayoutAdmin from "../../components/layout-admin";
import homeroute from "../../../public/homeroute.svg";
import { db } from "@/db/firebase";
import styles from "../../styles/Home.module.css";
import Layout from "@/components/layout";
import Link from "next/link";
import { useUser } from "@/context/user";
export default function Users() {
  const { email } = useUser();
  dayjs.locale("id");
  dayjs.extend(relativeTime);
  const snapshot = useRef(null);
  const [isLoading, setIsloading] = useState(true);
  const getDBFromFirestore = async () => {
    const querySnapshot = query(
      collection(db, "download"),
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
    <Layout>
      {isLoading ? (
        <div className={styles.center}>
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
                        Nama Dokumen
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Tanggal
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Dibuat
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Download
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {snapshot.current.map((e, i) => {
                      const data = e.data();
                      return (
                        <tr key={i} className={"hover:bg-slate-200"}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {data.judul}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {dayjs(data.tanggal).fromNow()}
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {`${data.penulis}`}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <Link target={"_blank"} href={`${data.link}`}>
                              Link
                            </Link>
                            {email != "admin@dinsos.com" ? null : (
                              <Link className="ml-4" href={`/download/${e.id}`}>
                                Edit
                              </Link>
                            )}
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
    </Layout>
  );
}
