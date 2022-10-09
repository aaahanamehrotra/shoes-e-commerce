import { useSession, signIn, signOut } from "next-auth/react";
import Navbar from "/components/Navbar";
import Dashboard from "../components/dashboard";
import Singup from "../components/singup";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Component() {
  const { data: session } = useSession();
  return (
    <>
      <Navbar session={session} />
      <div className={styles.main}>
        <div className={styles.left}>
          <h1 className={styles.large}>LOREM IPSUM</h1>
          <h6 className={styles.tagline}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Nobis veniam molestias officia ut nesciunt cum odit!
          </h6>
        </div>
        <div className={styles.right}>
          <Image
            loader={() =>
              "https://www.freepnglogos.com/uploads/shoes-png/shoes-wasatch-running-3.png"
            }
            src={"/images/usp"}
            width={400}
            height={400}
          ></Image>
        </div>
      </div>
      <div className={styles.stats}>
        <div className={styles.square}>
          <h1 className={styles.number}>2000</h1>
          <h6 className={styles.text}>Products</h6>
        </div>
        <div className={styles.square}>
          <h1 className={styles.number}>20</h1>
          <h6 className={styles.text}>Stores</h6>
        </div>
        <div className={styles.square}>
          <h1 className={styles.number}>200</h1>
          <h6 className={styles.text}>Designs</h6>
        </div>
        <div className={styles.square}>
          <h1 className={styles.number}>20</h1>
          <h6 className={styles.text}>Categories</h6>
        </div>
      </div>
    </>
  );
}
