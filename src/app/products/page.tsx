import { getProducts } from "@/service/products";
import Link from "next/link";
import styles from "./page.module.css";

export const revalidate = 0;

export default async function ProductsPage() {
  throw new Error("hi");
  const products = await getProducts();
  const res = await fetch("https://meowfacts.herokuapp.com", {
    next: { revalidate: 0 },
  });
  const data = await res.json();
  const factText = data.data[0];

  return (
    <>
      <h1>제품 소개 페이지!!</h1>
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
