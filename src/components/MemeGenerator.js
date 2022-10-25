import React, { useState } from "react";
import "./meme.css";
import mylogo from "../../src/assets/memeLogo.jpg";
function MemeGenerator() {
  const [allMemes, setAllMemes] = useState([]);
  const [memes, setMemes] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage() {
    const calculateProbality = Math.floor(Math.random() * allMemes.length);
    let url = allMemes[calculateProbality].url;
    setMemes((prevMemes) => ({
      ...prevMemes,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMemes((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <div>
      <header>
        <div>
          <img src={mylogo} alt="this is my logo" className="my--logo" />
        </div>
        <div>
          <p>Wellcome to Muheto Meme Generator</p>
        </div>
        <div>
          <img
            src={memes.randomImage}
            alt="this is my logo"
            className="my--logo"
          />
        </div>
      </header>

      {/* About Section  */}

      <section className="input--section">
        <div className="info left--input">
          <input
            type="text"
            id="fist--input"
            className="input"
            name="topText"
            placeholder="Your First implessing word"
            onChange={handleChange}
            value={memes.topText}
          />
        </div>
        <div className="info">
          <input
            type="text"
            name="bottomText"
            id="fist--input"
            className="input"
            value={memes.bottomText}
            placeholder="Your Second implessing word"
            onChange={handleChange}
          />
        </div>
      </section>
      <section className="image--section">
        <button className="image__button" onClick={getMemeImage}>
          Surprise Me !!!🌅
        </button>
        <div className="all__images-container">
          <img
            src={memes.randomImage}
            alt="Other Images"
            className="all__images"
          />
          <p className="image--text top">{memes.topText}</p>
          <p className="image--text bottom">{memes.bottomText}</p>
        </div>
      </section>
    </div>
  );
}

export default MemeGenerator;
