import LayoutAdmin from "@/components/layout-admin";
import protectAdmin from "@/protect/protect-admin";
import React from "react";
import Image from "next/image";
import homeroute from "../../../public/homeroute.svg";
const Admin = () => {
  return (
    <LayoutAdmin>
      <div className="flex p-4 place-items-center gap-2">
        <Image width={20} src={homeroute} alt={"#"} />
        <h1 className="text-xs">Admin </h1>
      </div>
      <h1 className=" text-center text-2xl">Dashboard Admin</h1>
    </LayoutAdmin>
  );
};
export default protectAdmin(Admin);
