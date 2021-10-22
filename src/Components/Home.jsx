import React from "react";
import "../Css/Home.css"
import "../Css/StyleGlobal.css"
const Home = () => {
    const img="./img/home-bg-min.jpg"
    
  return (
    <div className="home" style={{backgroundImage:"url(./img/home-bg-min.jpg)"}} id="home">
      <main className="about flex-wrap flex-around">
        <div className="information-home">
        <h1 className="title_home color-red">Amazing Marvel Movies</h1>
        <h2 className="subtitle_home">Wecolme Marvel Fans</h2>
        <p className="text_home">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
          dolorem aut temporibus cum! Accusantium debitis id ad at cumque.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tempore amet cum pariatur ipsa vitae
        </p>
        <button className="btn_red">Get Started</button>
        </div>
        <img src="./img/img-home1.png" alt="" className="img-home" />
      </main>
    </div>
  );
};

export default Home;
