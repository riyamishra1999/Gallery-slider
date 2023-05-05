import { useState } from "react";
import BookImage from "../src/assets/books.jpg";
import SeaScapeImage from "../src/assets/seascape.jpg";
import WindowImage from "../src/assets/window.jpg";
import styles from "../src/styles/home.module.css";

const App = () => {
  const [currentImage, setCurrentImage] = useState(1);
  const handleNextImage = () => {
    setCurrentImage((prevState) => (prevState < 3 ? prevState + 1 : prevState));
  };
  return (
    <div className={styles.wrapper_main}>
      <div className={styles.image_wrapper}>
        {currentImage === 1 && <img src={BookImage} />}
        {currentImage === 2 && <img src={SeaScapeImage} />}
        {currentImage === 3 && <img src={WindowImage} />}
      </div>
      <div>
        <button onClick={handleNextImage}>Next image</button>
      </div>
      <p>I am image no. {currentImage}</p>
    </div>
  );
};

export default App;
