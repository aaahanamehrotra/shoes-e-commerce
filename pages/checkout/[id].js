import { useSession, signIn, signOut } from "next-auth/react";
import Navbar from "/components/Navbar";
import styles from "../../styles/Checkout.module.css";
import { useRouter } from "next/router";

import clientPromise from "../../lib/mongodb";

export default function Component(props) {
  const { data: session } = useSession();
  const router = useRouter();
  const { pid } = router.query;
  return (
    <>
      <Navbar session={session} />
      <h1 className="page-heading">Checkout</h1>
      <form className={styles.form}>
        <div className={styles.inputgroup}>
          <label htmlFor="name" className={styles.label}>
            Full Name
          </label>
          <input
            type="text"
            name="Name"
            id="Name"
            placeholder="Full Name"
            required
          />
        </div>

        <div className={styles.inputgroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="johndoe@gmail.com"
            required
          />
        </div>

        <div className={styles.inputgroup}>
          <label htmlFor="phone" className={styles.label}>
            Phone Number
          </label>
          <input type="number" name="Mobile no" id="Mobile no" required />
        </div>

        <div className={styles.inputgroup}>
          <label htmlFor="address" className={styles.label}>
            Address
          </label>
          <textarea
            className={styles.textarea}
            id="Address"
            name="Address"
            placeholder="Address"
            required
          ></textarea>
        </div>

        <div className={styles.inputgroup}>
          <label htmlFor="name" className={styles.label}>
            City
          </label>
          <input
            type="text"
            name="Name"
            id="Name"
            placeholder="City"
            required
          />
        </div>

        <div className={styles.inputgroup}>
          <label htmlFor="phone" className={styles.label}>
            Pin Code
          </label>
          <input type="number" name="Mobile no" id="Mobile no" required />
        </div>

        <p className={styles.priceoof}>Price: {props.test.price}</p>
        <p className={styles.priceoof}>Delivery Charge: $2.00</p>
        <p className={styles.priceoof}>
          Total Price: ${parseFloat(props.test.price.slice(1)) + 2}{" "}
        </p>
        <p className={styles.priceoof}>Mode of Payment: Cash on Delivery</p>
        <div className={styles.inputgroup}>
          <button
            className={styles.submitbtn}
            type="submit"
            value="Submit"
            id="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

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
