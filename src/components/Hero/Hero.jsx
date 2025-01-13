import styles from "./Hero.module.css";
import heroBgMobile from "../../assets/images/illustration-mockups.svg";
import Header from "../Header/Header";

const Hero = () => {
  return (
    <section>
      <Header />
      <div className={styles.heroSection}>
        <img className={styles.img} src={heroBgMobile} alt="" />
        <div className={styles.textbox}>
          <h1>Build The Community Your Fans Will Love</h1>
          <p>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>

          <button>Register</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
