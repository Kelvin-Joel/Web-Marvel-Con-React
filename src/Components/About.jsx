import React from "react";
import "../Css/About_avengers.css";
import "../Css/StyleGlobal.css";
const About = () => {
  return (
    <main
      className="flex-around flex-wrap about_avengers padding-top"
      id="about"
    >
      <h2 className="color-gray title_about">
        About <span className="color-red">AVENGERS</span>
      </h2>
      <img
        src="./img/about-img-min.png"
        className="img_about-avengers"
        alt=""
      />
      <article className="about-text_avengers">
        <h3 className="color-gray subtitle_about_avengers">
          Marvel Avengers Is Amazing
        </h3>
        <p className="color-gray">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor hic,
          eaque molestiae repellat enim ullam dolorum facilis, numquam esse qui
          accusamus vel quos error dolore. Necessitatibus, aspernatur pariatur.
          Voluptatem, debitis.
        </p>

        <p className="color-gray">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          voluptates, deleniti aspernatur dignissimos nemo quisquam expedita
          aperiam quidem pariatur ut unde utem mol nam.
        </p>
        <button className="btn_red">Learn More</button>
      </article>

      <main>
        <h1>Title</h1>
        <p>Elementores</p>
        <p></p>
      </main>

      <section>
        <h2>Title</h2>
        <h3>Subtitle</h3>
      </section>

      <section>
        <h2>Title</h2>
      </section>

    </main>
  );
};

export default About;
