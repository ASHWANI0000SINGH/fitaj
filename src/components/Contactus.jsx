import React, { useState } from "react";
import styles from "./Contactus.module.css";
import CloseIcon from "@mui/icons-material/Close";

const Contactus = () => {
  const [showform, setShowForm] = useState(true);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.form_container}>
          <div className={styles.get_in_touch_form_conatiner}>
            <h1> GET IN TOUCH</h1>
            <form action="" className={styles.get_in_touch_form}>
              <input
                type="text"
                name=""
                id=""
                placeholder="Full Name"
                className={styles.form_input_class}
              />{" "}
              <br />
              <input
                type="number"
                name=""
                id=""
                placeholder="Phone Number"
                className={styles.form_input_class}
              />{" "}
              <br />
              <input
                type="email"
                name=""
                id=""
                placeholder="Email"
                className={styles.form_input_class}
              />{" "}
              <br />
              <input
                type="text"
                name=""
                id=""
                placeholder="Message"
                className={styles.form_input_class}
              />{" "}
              <br />
              <button className={styles.form_button}> Submit</button>
            </form>
          </div>
          <div className={styles.consulatation}>
            {showform ? (
              <>
                <div className={styles.get_in_touch_red_box}>
                  <h1>
                    {" "}
                    Free 30 MIN
                    <br />
                    CONSULTATION
                  </h1>
                  <button
                    onClick={() => setShowForm(false)}
                    className={styles.get_in_touch_btn}
                  >
                    Book Now &#x3009;
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className={styles.consulatation_form}>
                  <div className={styles.form_nav}>
                    <h1>
                      {" "}
                      FREE 30 MIN
                      <br />
                      CONSULTATION
                    </h1>
                    <CloseIcon
                      style={{
                        color: "white",
                        fontSize: "40px",
                        cursor: "pointer",
                      }}
                      onClick={() => setShowForm(true)}
                    />
                  </div>
                  <form action="">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Full Name"
                      className={styles.form_input_class}
                    />{" "}
                    <br />
                    <input
                      type="number"
                      name=""
                      id=""
                      placeholder="Phone Number"
                      className={styles.form_input_class}
                    />{" "}
                    <br />
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="Email"
                      className={styles.form_input_class}
                    />{" "}
                    <br />
                    <select
                      id="availablity"
                      name=" Best Availablity"
                      // className={styles.select_availability}
                      className={styles.form_input_class}
                    >
                      {" "}
                      <br />
                      <option value="volvo">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="fiat">Fiat</option>
                      <option value="audi">Audi</option>
                    </select>{" "}
                    <br />
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="notes"
                      className={styles.form_input_class}
                    />{" "}
                    <br />
                    <button
                      className={`${styles.form_button} ${styles.consultation_btn}`}
                    >
                      {" "}
                      Book Consultation
                    </button>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
