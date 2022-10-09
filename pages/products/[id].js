import clientPromise from "../../lib/mongodb";
import styles from "../../styles/Products.module.css";
import Image from "next/image";
import { useSession } from "next-auth/react";
import React from "react";
import Navbar from "../../components/Navbar";
import { useRouter } from "next/router";
import { ObjectId } from "bson";

function Products(props) {
  const { data: session } = useSession();
  const router = useRouter();
  const { pid } = router.query;
  return (
    <>
      <Navbar session={session} />
      <div className={styles.products}>
        <h1 className="page-heading">Products</h1>
        <div className={styles.cards}>
          {/* {console.log(products)} */}
          {console.log(props.final)}
        </div>
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
    console.log(products[product]._id);
    if ((products[product] = context.params.id)) {
      console.log("found");
      final = products[product];
    }
  }

  return {
    props: { final },
  };
}
