import React from "react";

export default function FooterC() {
  return (
    <footer className="bg-sky-900 flex flex-col-reverse   lg:flex-row justify-between items-center p-10 text-white">
      <div className="flex flex-col   text-center mt-10 lg:mt-0">
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
