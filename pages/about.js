import React from "react";
import styles from "../styles/About.module.css";
import Image from "next/image";
import { useSession } from "next-auth/react";
import Navbar from "../components/Navbar";

function About() {
  const { data: session } = useSession();

  return (
    <>
      <Navbar session={session} />
      <h1 className="page-heading">About Us</h1>
      {/* <div className={styles.products}>
      <div className={styles.productsrow}>
    <Image src={"/images/usp.png"} width={80} height={80} className={styles.img2}/>
      
      <h3>Lorem & Ipsum</h3>
      <p>Lorem ipsum dolor sit amet, quis in duis, iaculis id felis. Consectetuer vestibulum, nunc urna lectus, erat ligula. Hendrerit nam, lectus ante, ut lorem eros.</p>
    </div><div className={styles.productsrow}>
    <Image src={"/images/usp.png"} width={80} height={80} className={styles.img2}/>
      
      <h3>Lorem & Ipsum</h3>
      <p>Lorem ipsum dolor sit amet, quis in duis, iaculis id felis. Consectetuer vestibulum, nunc urna lectus, erat ligula. Hendrerit nam, lectus ante, ut lorem eros.</p>
    </div><div className={styles.productsrow}>
    <Image src={"/images/usp.png"} width={80} height={80} className={styles.img2}/>
      
      <h3>Lorem & Ipsum</h3>
      <p>Lorem ipsum dolor sit amet, quis in duis, iaculis id felis. Consectetuer vestibulum, nunc urna lectus, erat ligula. Hendrerit nam, lectus ante, ut lorem eros.</p>
    </div><div className={styles.productsrow}>
    <Image src={"/images/usp.png"} width={80} height={80} className={styles.img2}/>
      
      <h3>Lorem & Ipsum</h3>
      <p>Lorem ipsum dolor sit amet, quis in duis, iaculis id felis. Consectetuer vestibulum, nunc urna lectus, erat ligula. Hendrerit nam, lectus ante, ut lorem eros.</p>
    </div>
    
  </div> */}
      <div className={styles.stats}>
        <div className={styles.component}>
          <Image src={"/images/usp.png"} width={80} height={80} />

          <h6 className={styles.text}>Wide Range of Products</h6>
        </div>
        <div className={styles.component}>
          <Image src={"/images/usp2.png"} width={80} height={80} />

          <h6 className={styles.text}>Multiple Stores</h6>
        </div>
        <div className={styles.component}>
          <Image src={"/images/usp3.png"} width={80} height={80} />

          <h6 className={styles.text}>Happy Customers</h6>
        </div>
        <div className={styles.component}>
          <Image src={"/images/usp4.png"} width={80} height={80} />

          <h6 className={styles.text}>Satisfaction Guaranteed</h6>
        </div>
      </div>
    </>
  );
}

export default About;
