import React from "react";
import Styles from "../styles/Home.module.css";
import Lottie from "lottie-react";
import Not404 from "../../public/404.json";
import { Button, Text } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/router";
export default function NotFound() {
  const route = useRouter();
  return (
    <div className={Styles.center}>
      <Lottie className="h-[200px]" animationData={Not404} loop={true} />
      <Text size={"$4xl"}>Not Found</Text>
      <Button
        onPress={() => {
          route.replace("/");
        }}
        className="bg-sky-900"
      >
        Beranda
      </Button>
    </div>
  );
}
