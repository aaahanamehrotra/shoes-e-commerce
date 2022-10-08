import clientPromise from "../lib/mongodb";
import styles from "../styles/Products.module.css";
import Image from "next/image";
import { useSession } from "next-auth/react";
import React from "react";
import Navbar from "../components/Navbar";

function Products({ products }) {
  const { data: session } = useSession();
  return (
    <>
      <Navbar session={session} />
      <div className={styles.products}>
        <h1 className="page-heading">Products</h1>
        <div className={styles.cards}>
          {/* {console.log(products)} */}
          {products.map((product) => (
            <div className={styles.card} key={product._id}>
              <Image
                loader={() => product.img}
                src={product.img}
                width={240}
                height={240}
                className={styles.productimage}
              ></Image>
              <h3 className={styles.productname}>{product.name}</h3>
              <div className={styles.productprice}>{product.price}</div>
              <div className={styles.buttons}>
                <button className={styles.viewbutton}>View Details</button>
                {/* <button className={styles.wishbutton}>WishList</button> */}
                <button className={styles.cartbutton}>Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;

export async function getServerSideProps(context) {
  const client = await clientPromise;

  const db = client.db("e-commerce");

  let products = await db.collection("products").find({}).toArray();

  products = JSON.parse(JSON.stringify(products));

  return {
    props: { products },
  };
}
