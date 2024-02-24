import React from "react";
import styles from "./Navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/logo2.jpeg";
import backgroundimg from "../assets/fitness-3448864_1280.jpg";

const Navbar = () => {
  return (
    <>
      <div className={styles.container}>
        {/* <img src={backgroundimg} alt="" /> */}
        <video
          loop
          autoPlay
          muted
          width="100%"
          controls
          className={styles.video_gym}
        >
          <source
            src={require("../assets/video.mp4")}
            type="video/mp4"
            className={styles.src}
          />
        </video>

        <div className={styles.navbar}>
          <span>
            <img
              src={logo}
              alt="logo"
              width={"150px"}
              height={"100px"}
              style={{ margin: "10px" }}
            />
          </span>
          <span className={styles.hamburgermenu}>
            {" "}
            <MenuIcon />
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
