import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.home}>
          <h1>
            YOUR FITNESS <br />
            MY
            <span> MISSION </span>
          </h1>
          <h5>
            We empower you to achieve your fitness goals <br /> and kickstart
            your journey. <br />
            Plus, we help gym owners collaborate with customers.
          </h5>
        </div>
      </div>
    </>
  );
};

export default Home;
