import { useSession, signIn, signOut } from "next-auth/react";
import Navbar from "/components/Navbar";
import Dashboard from "../components/dashboard";
import Singup from "../components/singup";
import styles from "../styles/Home.module.css";
import testimonials from "../styles/Testimonials.module.css";
import Image from "next/image";
import data from "../data/homepage";
import testimonialdata from "../data/testimonials";

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
        {data.map((d) => (
          <div className={styles.square} key={d.id}>
            <h1 className={styles.number}>{d.number}</h1>
            <h6 className={styles.text}>{d.text}</h6>
          </div>
        ))}
      </div>

      <div className={testimonials.testimonials}>
        <h1 className={testimonials.h1}>Testimonials</h1>
        <div className={testimonials.cards}>
          {testimonialdata.map((testimonial) => (
            <div className={testimonials.card} key={testimonial.key}>
              <div className={testimonials.top}>
                <Image
                  src={testimonial.img}
                  height={80}
                  width={80}
                  className={testimonials.img}
                />
              </div>
              <div className={testimonials.bottom}>
                <h2 className={testimonials.name}>{testimonial.name}</h2>
                <p className={testimonials.text}>{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
