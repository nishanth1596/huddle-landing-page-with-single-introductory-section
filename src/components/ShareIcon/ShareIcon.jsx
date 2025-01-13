import styles from "./ShareIcon.module.css";

import fbPng from "../../assets/images/fb.png";
import twitterPng from "../../assets/images/twitter.png";
import instaPng from "../../assets/images/insta.png";

const ShareIcon = () => {
  return (
    <div className={styles.shareBtns}>
      <a role="button" onClick={() => {}}>
        <img src={fbPng} aria-label="check on Facebook" alt="Facebook" />
      </a>
      <a role="button" onClick={() => {}}>
        <img src={twitterPng} aria-label="check on Twitter" alt="Twitter" />
      </a>
      <a role="button" onClick={() => {}}>
        <img src={instaPng} aria-label="check on Instagram" alt="Instagram" />
      </a>
    </div>
  );
};

export default ShareIcon;
