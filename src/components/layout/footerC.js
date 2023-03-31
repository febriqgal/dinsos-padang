import React from "react";

export default function FooterC() {
  return (
    <footer className="bg-sky-900 flex flex-col-reverse mt-10  lg:flex-row justify-between items-center p-10 text-white">
      <div className="flex flex-col text-center mt-10 lg:mt-0">
        <div className="mb-4 flex gap-4 justify-center items-center">
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
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5114 2.33532 14.9446 2.93562 16.229L2.22299 20.6245C2.11347 21.3 2.69951 21.8834 3.3745 21.7709L7.72982 21.045C9.0248 21.6575 10.4724 22 12 22Z"
            />
            <path d="M16 15.1111V14.6749C16 14.1331 15.6701 13.6458 15.167 13.4446L14.7005 13.258C14.3008 13.0981 13.8582 13.1935 13.5602 13.473C13.3958 13.6272 13.1803 13.7456 12.9672 13.6719C12.5661 13.5332 11.9039 13.2373 11.3333 12.6667C10.7627 12.0961 10.4668 11.4339 10.3281 11.0328C10.2544 10.8197 10.3728 10.6042 10.527 10.4398C10.8065 10.1418 10.9019 9.69923 10.742 9.29949L10.5554 8.83296C10.3542 8.32988 9.86693 8 9.32509 8H8.88889C8.39797 8 8 8.39797 8 8.88889C8 12.8162 11.1838 16 15.1111 16C15.602 16 16 15.602 16 15.1111Z" />
          </svg>
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
