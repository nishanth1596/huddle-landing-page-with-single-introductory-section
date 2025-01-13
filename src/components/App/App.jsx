import styles from "./App.module.css";

import Hero from "../Hero/Hero";
import ShareIcon from "../ShareIcon/ShareIcon";

const App = () => {
  return (
    <div className={styles.wrapper}>
      <main>
        <Hero />
        <ShareIcon />
      </main>
    </div>
  );
};

export default App;
