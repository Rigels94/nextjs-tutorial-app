import Image from "next/image";
import styles from "./page.module.css";
import os from "os"; // 노드 APIs
import Counter from "@/components/Counter";
import shopImage from "../../public/images/main.jpg";

export default function Home() {
  console.log("안녕! - 서버");
  console.log(os.hostname());

  return (
    <>
      <h1>홈페이지다!!</h1>
      <Counter />
      <Image
        src={
          "https://images.unsplash.com/photo-1682687220499-d9c06b872eee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        }
        alt="shop"
        width={400}
        height={400}
      />
    </>
  );
}
