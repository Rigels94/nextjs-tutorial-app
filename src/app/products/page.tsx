import { getProducts } from "@/service/products";
import Link from "next/link";
import styles from "./page.module.css";
import clothesImage from "../../../public/images/clothes.jpg";
import Image from "next/image";

export const revalidate = 0;

export default async function ProductsPage() {
  // 6.4 에러 UI
  // throw new Error("hi");
  const products = await getProducts();
  const res = await fetch("https://meowfacts.herokuapp.com", {
    next: { revalidate: 0 },
  });
  const data = await res.json();
  const factText = data.data[0];

  return (
    <>
      <h1>제품 소개 페이지!!</h1>
      <Image src={clothesImage} alt="Clothes" width={500} priority />
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      <article className={styles.article}>{factText}</article>
    </>
  );
}
