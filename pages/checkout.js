import { useSession, signIn, signOut } from "next-auth/react";
import Navbar from "/components/Navbar";
import Dashboard from "../components/dashboard";
import Singup from "../components/singup";
import styles from "../styles/Checkout.module.css";

export default function Component() {
  const { data: session } = useSession();
  return (
    <>
      <Navbar session={session} />
      <h1 className={styles.checkout}>Checkout</h1>
      <form className={styles.form}>
        <div className={styles.input - group}>
          <label for="name" className={styles.label}>
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

        <div className={styles.input - group}>
          <label for="email" className={styles.label}>
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

        <div className={styles.input - group}>
          <label for="phone" className={styles.label}>
            Phone Number
          </label>
          <input type="number" name="Mobile no" id="Mobile no" required />
        </div>

        <div className={styles.input - group}>
          <label for="address" className={styles.label}>
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

        <div className={styles.input - group}>
          <label for="name" className={styles.label}>
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

        <div className={styles.input - group}>
          <label for="phone" className={styles.label}>
            Pin Code
          </label>
          <input type="number" name="Mobile no" id="Mobile no" required />
        </div>

        <p className={styles.priceoof}>Price: ${price}</p>
        <p className={styles.priceoof}>Delivery Charge: $2.00</p>
        <p className={styles.priceoof}>Total Price: ${total_price}</p>
        <p className={styles.priceoof}>Mode of Payment: Cash on Delivery</p>
        <div className={styles.input - group}>
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
