import { Tooltip } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

export default function FooterC() {
  return (
    <footer className="bg-sky-900 flex flex-col-reverse mt-10  lg:flex-row justify-between items-center p-10 text-white">
      <div className="flex flex-col text-center mt-10 lg:mt-0">
        <div className="mb-4 flex gap-4 justify-center items-center">
          <Link
            target="_blank"
            href={"https://www.instagram.com/dinsos.sumbar/"}
          >
            <svg
              className="fill-slate-50"
              width="24"
              height="24"
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
          <Link target="_blank" href={"https://www.facebook.com/dinsos.sumbar"}>
            <svg
              className="fill-slate-50"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M18 2H6C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2Z"
              />
              <path d="M17 7H14.5C12.2909 7 10.5 8.79086 10.5 11V13H7V16H10.5V22H13.5V16H17V13H13.5V11C13.5 10.4477 13.9477 10 14.5 10H17V7Z" />
            </svg>
          </Link>
          <Link
            target="_blank"
            href={"https://www.youtube.com/@dinassosialprovinsisumater5622"}
          >
            <svg
              className="fill-slate-50"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M2 7C2 4.79086 3.79086 3 6 3H18C20.2091 3 22 4.79086 22 7V17C22 19.2091 20.2091 21 18 21H6C3.79086 21 2 19.2091 2 17V7Z"
              />
              <path d="M10.4472 8.72356L15.2111 11.1055C15.9482 11.4741 15.9482 12.5259 15.2111 12.8944L10.4472 15.2763C9.78231 15.6088 9 15.1253 9 14.3819V9.61799C9 8.87461 9.78231 8.39111 10.4472 8.72356Z" />
            </svg>
          </Link>
          <Link target="_blank" href={"https://www.tiktok.com/"}>
            <svg
              className="fill-slate-50"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M10 21C13.3137 21 16 18.3137 16 15V8.19731C16.8825 8.70782 17.9071 9 19 9H20V6H19C17.3431 6 16 4.65685 16 3H13V15C13 16.6569 11.6569 18 10 18C8.34315 18 7 16.6569 7 15C7 13.3431 8.34315 12 10 12V9C6.68629 9 4 11.6863 4 15C4 18.3137 6.68629 21 10 21Z"
              />
              <path d="M16 3C16 4.65685 17.3431 6 19 6H20V9H19C17.9071 9 16.8825 8.70782 16 8.19731V3Z" />
            </svg>
          </Link>
          <Tooltip content={"Telp: (0751) 7051465 | Fax: (0751) 7057284"}>
            <svg
              className="fill-slate-50"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.75 9C19.75 9.41421 19.4142 9.75 19 9.75H17C15.4812 9.75 14.25 8.51878 14.25 7L14.25 5C14.25 4.58579 14.5858 4.25 15 4.25C15.4142 4.25 15.75 4.58579 15.75 5L15.75 7C15.75 7.06006 15.7542 7.11912 15.7624 7.17692L20.4697 2.46967C20.7626 2.17678 21.2374 2.17678 21.5303 2.46967C21.8232 2.76256 21.8232 3.23744 21.5303 3.53033L16.8231 8.23758C16.8809 8.24576 16.9399 8.25 17 8.25H19C19.4142 8.25 19.75 8.58579 19.75 9Z"
              />
              <path
                opacity="0.4"
                d="M21 19V17.3541C21 16.5363 20.5021 15.8008 19.7428 15.4971L17.7086 14.6835C16.7429 14.2971 15.6422 14.7156 15.177 15.646L15 16C15 16 12.5 15.5 10.5 13.5C8.5 11.5 8 9 8 9L8.35402 8.82299C9.28438 8.35781 9.70285 7.25714 9.31654 6.29136L8.50289 4.25722C8.19916 3.4979 7.46374 3 6.64593 3H5C3.89543 3 3 3.89543 3 5C3 13.8366 10.1634 21 19 21C20.1046 21 21 20.1046 21 19Z"
              />
            </svg>
          </Tooltip>
          <Tooltip content={"dinsos@dinsos.sumbarprov.go.id"}>
            <svg
              className="fill-slate-50"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M18 3H6C3.79086 3 2 4.79086 2 7V17C2 19.2091 3.79086 21 6 21H18C20.2091 21 22 19.2091 22 17V7C22 4.79086 20.2091 3 18 3Z"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.37604 7.58405C5.60581 7.23941 6.07146 7.14628 6.4161 7.37604L10.1973 9.89684C11.289 10.6246 12.7112 10.6246 13.8029 9.89684L17.5841 7.37604C17.9287 7.14628 18.3944 7.23941 18.6241 7.58405C18.8539 7.9287 18.7608 8.39435 18.4161 8.62412L14.6349 11.1449C13.0394 12.2086 10.9608 12.2086 9.36525 11.1449L5.58405 8.62412C5.23941 8.39435 5.14628 7.9287 5.37604 7.58405Z"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.25 15C1.25 14.5858 1.58579 14.25 2 14.25H8C8.41421 14.25 8.75 14.5858 8.75 15C8.75 15.4142 8.41421 15.75 8 15.75H2C1.58579 15.75 1.25 15.4142 1.25 15Z"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.25 18C1.25 17.5858 1.58579 17.25 2 17.25H8C8.41421 17.25 8.75 17.5858 8.75 18C8.75 18.4142 8.41421 18.75 8 18.75H2C1.58579 18.75 1.25 18.4142 1.25 18Z"
              />
            </svg>
          </Tooltip>
        </div>
        <h1>Jl Khatib Sulaiman No. 5 Kota Padang</h1>
        <h1 className="">© 2023 - Selviani</h1>
      </div>
      <iframe
        className="rounded-lg w-full lg:w-[400px] h-[200px] lg:px-0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.298709884516!2d100.35850581405303!3d-0.9247082355977271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd4b8d75e136e61%3A0xedc7d0fa6b6017af!2sDinas%20Sosial%20Pemprov%20Sumatera%20Barat!5e0!3m2!1sid!2sid!4v1678888971799!5m2!1sid!2sid"
      ></iframe>
    </footer>
  );
}
