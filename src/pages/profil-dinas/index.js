import Layout from "@/components/layout";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Pic from "../../../public/pic.jpg";

export default function ProfilDinas() {
  const route = useRouter();
  const people = [
    {
      name: "H. Abdul Gafar, SE, MM",
      title: "19601225 198303 1 010",
      role: "Kepala Dinas",
      ig: "#",
      tw: "#",
      linkedin: "#",
      imageUrl: Pic,
    },
    {
      name: "Ramawi, S.Pd",
      title: "19621231 198901 1 012",
      role: "Sekretaris",
      ig: "#",
      tw: "#",
      linkedin: "#",
      imageUrl: Pic,
    },
    {
      name: "Hj. Esti Pratiwi, SH, MH",
      title: "19620819 199003 2 003",
      role: "Kepala Bidang Pemberdayaan Sosial",
      ig: "#",
      tw: "#",
      linkedin: "#",
      imageUrl: Pic,
    },
    {
      name: "Heni Yunida, SE",
      title: "19680612 199403 2 009",
      role: "Kepala Bidang Penanganan Fakir Miskin",
      ig: "#",
      tw: "#",
      linkedin: "#",
      imageUrl: Pic,
    },
    {
      name: "Drs. Suyanto",
      title: "19680425 199303 1 004",
      role: "Kepala Bidang Rehabilitasi Sosial",
      ig: "#",
      tw: "#",
      linkedin: "#",
      imageUrl: Pic,
    },
    {
      name: "Irwan Basir, SH, MM",
      title: "19671021 199403 1 007",
      role: "Kepala Bidang Perlindungan & Jaminan Sosial",
      ig: "#",
      tw: "#",
      linkedin: "#",
      imageUrl: Pic,
    },
    {
      name: "Drs. Achmad Khusairi",
      title: "19640805 199403 1 005",
      role: "Kepala Panti Sosial Asuhan Anak Bina Remaja Budi Utama Lubuk Alung",
      ig: "#",
      tw: "#",
      linkedin: "#",
      imageUrl: Pic,
    },
    {
      name: "Drs. Faizal, MM",
      title: "19640811 199102 1 001",
      role: "Kepala Panti Sosial Asuhan Anak Tri Murni Padang Panjang",
      ig: "#",
      tw: "#",
      linkedin: "#",
      imageUrl: Pic,
    },
    {
      name: "Drs. Kamisar Kamus",
      title: "19650611 199303 1 008",
      role: "Kepala Panti Sosial Bina Remaja Harapan Padang Panjang",
      ig: "#",
      tw: "#",
      linkedin: "#",
      imageUrl: Pic,
    },
    {
      name: "Andriati, S.Sos",
      title: "19640710 199203 2 006",
      role: "Kepala Panti Sosial Tresna Werdha Kasih Sayang Ibu Cubadak Batusangkar",
      ig: "#",
      tw: "#",
      linkedin: "#",
      imageUrl: Pic,
    },
    {
      name: "Drs. Syahbana",
      title: "19640806 199303 1 003",
      role: "Kepala Panti Sosial Tresna Werdha Sabai Nan Aluih Sicincin",
      ig: "#",
      tw: "#",
      linkedin: "#",
      imageUrl: Pic,
    },
    {
      name: "Sayarni, S.Sos, MM",
      title: "19690621 199103 2 004",
      role: "Kepala Panti Sosial Bina Grahita Harapan Ibu Kalumbuk",
      ig: "#",
      tw: "#",
      linkedin: "#",
      imageUrl: Pic,
    },
    {
      name: "Dra. Erliza Rupiah Riawati",
      title: "19631203 198903 2 006",
      role: "Kepala Panti Sosial Bina Netra Tuah Sakato Kalumbuk",
      ig: "#",
      tw: "#",
      linkedin: "#",
      imageUrl: Pic,
    },
    {
      name: "Afzaidir, A.Ks. MM",
      title: "19680308 198901 1 001",
      role: "Kepala Panti Sosial Karya Wanita Andam Dewi Sukarami",
      ig: "#",
      tw: "#",
      linkedin: "#",
      imageUrl: Pic,
    },

    // More people...
  ];
  return (
    <Layout title={"Profil Dinas - "}>
      <a
        onClick={() => {
          document.documentElement.scrollTop = 0;
        }}
        className="bottom-10 right-10 bg-sky-900 w-10 aspect-square fixed z-50 items-center flex justify-center text-white rounded-full"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M20 14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14C4 9.58172 7.58172 6 12 6C16.4183 6 20 9.58172 20 14Z"
            fill="#ffffff"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.46967 6.53033C7.17678 6.23744 7.17678 5.76257 7.46967 5.46967L11.4696 1.46967C11.6103 1.32902 11.801 1.25 12 1.25C12.1989 1.25 12.3896 1.32901 12.5303 1.46967L16.5303 5.46967C16.8232 5.76256 16.8232 6.23743 16.5303 6.53033C16.2374 6.82322 15.7626 6.82322 15.4697 6.53033L12.75 3.81065L12.75 16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16L11.25 3.81067L8.53033 6.53033C8.23744 6.82322 7.76257 6.82322 7.46967 6.53033Z"
            fill="#ffffff"
          />
        </svg>
      </a>
      <div className="flex flex-col items-center lg:flex-row gap-4 justify-center my-10 mx-10 lg:px-0">
        <a href="#strukturorganisasi">
          <Button className="bg-sky-900">Struktur Organisasi</Button>
        </a>
        <a href="#visidanmisi">
          <Button className="bg-sky-900">Visi Dan Misi</Button>
        </a>
        <a href="#tugasdanfungsi">
          <Button className="bg-sky-900">Tugas Dan Fungsi</Button>
        </a>

        <a href="#singkatsejarah">
          <Button className="bg-sky-900">Singkat Sejarah</Button>
        </a>
      </div>
      <div>
        <section id="strukturorganisasi" className={`min-h-screen text-center`}>
          <ul
            role="list"
            // 76 height nav
            className={`my-[92px] px-16  grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}
          >
            {people.map((e, i) => (
              <li
                key={i}
                className="col-span-1 flex flex-col shadow-2xl text-center bg-white rounded-lg  divide-y divide-gray-200 border"
              >
                <div className="flex-1 flex flex-col p-8">
                  <div className="overflow-clip w-40 aspect-square flex-shrink-0 mx-auto rounded-full border-4 shadow-2xl">
                    <Image
                      className="hover:scale-110 duration-700"
                      src={e.imageUrl}
                      alt="#"
                    />
                  </div>
                  <h3 className="mt-6 text-gray-900 text-sm font-bold">
                    {e.name}
                  </h3>
                  <dl className="mt-1 flex-grow flex flex-col justify-between">
                    <dt className="sr-only">Title</dt>
                    <dd className="text-gray-500 text-sm">{e.title}</dd>
                    <dt className="sr-only">Role</dt>
                    <dd className="mt-3">
                      <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                        {e.role}
                      </span>
                    </dd>
                  </dl>
                </div>
                <div>
                  <div className="-mt-px flex divide-x divide-gray-200">
                    {/* ig */}
                    <div className="w-0 flex-1 flex">
                      <Link
                        target={"_blank"}
                        href={e.ig}
                        className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                      >
                        <svg
                          className=" fill-slate-500 hover:fill-slate-900 hover:-translate-y-2 duration-700 h-6"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.4"
                            d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6Z"
                          />
                          <circle cx="18" cy="6" r="1" />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                          />
                        </svg>
                      </Link>
                    </div>
                    {/* Twitter */}
                    <div className="-ml-px w-0 flex-1 flex">
                      <Link
                        target={"_blank"}
                        href={e.tw}
                        className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                      >
                        <svg
                          className=" fill-slate-500 hover:fill-slate-900 hover:-translate-y-2 duration-700 h-6"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.4"
                            d="M15.2861 4C13.1822 4 11.4767 5.79086 11.4767 8C11.4767 8.33382 11.5157 8.65809 11.589 8.96808C9.56611 8.96808 6.51914 8.55908 3.97444 6.00961C3.63605 5.67059 3.01208 5.89726 3.03556 6.37568C3.41268 14.0627 6.70477 16.3049 8.4001 16.4444C7.30535 17.5257 5.7151 18.3791 4.11489 18.7622C3.69256 18.8633 3.58824 19.3256 4.0012 19.4599C5.14623 19.8323 6.78516 19.9758 7.66735 20C13.9082 20 18.9806 14.7471 19.0935 8.22229C19.9129 7.68945 20.4377 6.5325 20.7326 5.71291C20.8044 5.5133 20.4773 5.28073 20.2815 5.36226C19.6694 5.61708 18.8923 5.67749 18.2304 5.46181C17.5318 4.56927 16.4722 4 15.2861 4Z"
                          />
                        </svg>
                      </Link>
                    </div>
                    {/* Linkendin */}
                    <div className="-ml-px w-0 flex-1 flex items-center justify-center">
                      <Link target={"_blank"} href={e.linkedin}>
                        <svg
                          className=" fill-slate-500 hover:fill-slate-900 hover:-translate-y-2 duration-700 h-6"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="4" cy="4" r="2" />
                          <path d="M2 8.5H6V22H2V8.5Z" />
                          <g opacity="0.4">
                            <path d="M13 8.5H9V15V22H13V15C13 13.8954 13.8954 13 15 13C16.1046 13 17 13.8954 17 15V22H21V15C21 11.6863 18.3137 9 15 9C14.2987 9 13.6256 9.12031 13 9.34141V8.5Z" />
                          </g>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section
          id="visidanmisi"
          className={`min-h-screen flex flex-col justify-center items-center`}
        >
          <div>
            <div className="text-center">
              <h1>{`Visi`}</h1>
              <h1>
                Terwujudnya Sumatera Barat Madani yang Unggul dan Berkelanjutan
              </h1>
            </div>
            <table class="table-auto m-auto mt-4">
              <thead className="bg-sky-900">
                <tr>
                  <th></th>
                  <th className="text-white ">Misi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1. </td>
                  <td>{`Meningkatkan kualitas sumber daya manusia yang sehat, berpengetahuan, terampil dan berdaya saing.`}</td>
                </tr>
                <tr>
                  <td>2. </td>
                  <td>{`Meningkatkan tata kehidupan sosial kemasyarakatan berdasarkan Falsafah Adaiak Basandi Syara', Syara' Basandi Kitabullah.`}</td>
                </tr>
                <tr>
                  <td>3. </td>
                  <td>{`Meningkatkan nilai tambah dan produktifitas pertanian, perkebunan, perternakan dan perikanan`}</td>
                </tr>
                <tr>
                  <td>4. </td>
                  <td>{`Meningkatkan usaha perdagangan dan industri kecil/menengah serta ekonomi berbasis digital.`}</td>
                </tr>
                <tr>
                  <td>5. </td>
                  <td>{`Meningkatkan ekonomi kreatif dan daya saing kepariwisataan.`}</td>
                </tr>
                <tr>
                  <td>6. </td>
                  <td>{`Meningkatkan pembangunan infrastruktur yang berkeadilan dan berkelanjutan`}</td>
                </tr>
                <tr>
                  <td>7. </td>
                  <td>{`Mewujudkan tata kelola pemerintah dan pelayanan publik yang bersih, akuntabel serta berkualitas`}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <h1
          id="tugasdanfungsi"
          className={`min-h-screen  flex flex-col justify-center items-center`}
        >
          Tugas dan Fungsi
        </h1>

        <h1
          id="singkatsejarah"
          className={`min-h-screen  flex flex-col justify-center items-center`}
        >
          Singkat Sejarah
        </h1>
      </div>
    </Layout>
  );
}
