import clientPromise from "../../lib/mongodb";
import styles from "../../styles/Product.module.css";
import button from "../../styles/Products.module.css";
import Image from "next/image";
import { useSession } from "next-auth/react";
import React from "react";
import Navbar from "../../components/Navbar";
import { useRouter } from "next/router";
import { ObjectId } from "bson";
import Link from "next/link";

function Products(props) {
  const { data: session } = useSession();
  const router = useRouter();
  const { pid } = router.query;
  return (
    <>
      <Navbar session={session} />
      <div className={styles.products}>
        <div className={styles.product}>
          <div className={styles.left}>
            <Image
              className={styles.img}
              loader={() => props.test.img}
              src={props.test.img}
              width={"300"}
              height={"300"}
            ></Image>
          </div>
          <div className={styles.right}>
            <h1 className={styles.name}>{props.test.name}</h1>
            <h6 className={styles.price}>{props.test.price}</h6>
            <div className={styles.description}>{props.test.description}</div>
            <button className={button.cartbutton}>Buy Now</button>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <Link href="/products">
          <a>
            <button className={styles.backbutton}>View All Products</button>
          </a>
        </Link>
      </div>
    </>
  );
}

export default Products;

export async function getServerSideProps(context) {
  const client = await clientPromise;

  const db = client.db("e-commerce");
  console.log(context.params.id);
  let products = await db.collection("products").find({}).toArray();
  let final;
  products ? JSON.parse(JSON.stringify(products)) : null;
  for (let product in products) {
    if (context.params.id === products[product]._id.toString()) {
      final = products[product];
    }
  }
  console.log(final);
  let test = JSON.parse(JSON.stringify(final));
  return {
    props: { test },
  };
}
