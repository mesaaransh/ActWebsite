import { Fragment, useEffect } from "react";
import styles from "./Contact.module.scss";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";
import aos from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  useEffect(() => {
    aos.init({ duration: 1500 });
  }, []);
  return (
    <Fragment>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.contactHeader}>
          <h1>CONTACT US</h1>
          <h3>We can't wait to connect with you</h3>
        </div>
        <div className={styles["contact-container"]}>
          <div className={styles["form-container"]}>
            <h2>Get in Touch</h2>
            <form data-aos="fade-up">
              <label>
                <div id={styles["Name"]}>Name</div>
                <input type="text" name="name" id={styles["name-text"]} />
              </label>
              <br />
              <label>
                <div id={styles["Email"]}>Email</div>
                <input type="email" name="email" id={styles["email-text"]} />
              </label>
              <br />
              <label>
                <div id={styles["Message"]}>Message</div>
                <textarea name="message" id={styles["message-text"]} />
              </label>
              <br />

              <div className={styles.buttonContainer}>
                <Button type="submit" color="#F4970F">
                  Submit
                </Button>
              </div>
            </form>
          </div>

          <div className={styles["logo-container"]}>
            <div className={styles["map"]} data-aos="fade-up">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.8072010873466!2d76.36212627502266!3d30.356428803722675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391028ab86533db5%3A0x93cc1f72eae1c9a8!2sThapar%20Institute%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1706517068574!5m2!1sen!2sin"
                target="blank"
                className={styles.mappart}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
