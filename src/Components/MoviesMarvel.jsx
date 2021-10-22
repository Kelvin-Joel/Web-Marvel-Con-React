import React from "react";
import "../Css/MoviesMarvel.css";
import "../Css/StyleGlobal.css";

const Movies = [
  {
    id: 1,
    img: "./img/m1-min.jpg",
    title: "Marvel Avengers 2012",
    genero: "Action,Comedy,Thriller",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quos harum velit ducimus reiciendis optio quisquam dignissimos",
  },
  {
    id: 2,
    img: "./img/m2-min.jpg",
    title: "Marvel Avengers 2012",
    genero: "Action,Comedy,Thriller",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quos harum velit ducimus reiciendis optio quisquam dignissimos",
  },
  {
    id: 3,
    img: "./img/m3-min.jpg",
    title: "Marvel Avengers 2012",
    genero: "Action,Comedy,Thriller",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quos harum velit ducimus reiciendis optio quisquam dignissimos",
  },
  {
    id: 4,
    img: "./img/m4-min.jpg",
    title: "Marvel Avengers 2012",
    genero: "Action,Comedy,Thriller",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quos harum velit ducimus reiciendis optio quisquam dignissimos",
  },
  {
    id: 5,
    img: "./img/m5-min.jpg",
    title: "Marvel Avengers 2012",
    genero: "Action,Comedy,Thriller",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quos harum velit ducimus reiciendis optio quisquam dignissimos",
  },
  {
    id: 6,
    img: "./img/m6-min.jpg",
    title: "Marvel Avengers 2012",
    genero: "Action,Comedy,Thriller",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quos harum velit ducimus reiciendis optio quisquam dignissimos",
  },
];
const color="yellow";

const MoviesMarvel = () => {
  return (
    <section className="conte_movies flex-around flex-wrap padding-top margin-bottom" id="movies">
      <h3 className="title_movies color-gray">
        Marvel <span className="color-red">Movies</span>
      </h3>
      {Movies.map((index) => {
        return (
          <article className="car_movie"
            key={index.id}
            style={{ backgroundImage: `url(${index.img})` }}
          >
            <div className="description_movies">
              <h3 className="title_car_movie">{index.title}</h3>
              <h4 className="color-red">{index.genero}</h4>
              <span>
                <i style={{color:`${color}`}} className="fas fa-star"></i>
                <i style={{color:`${color}`}} className="fas fa-star"></i>
                <i style={{color:`${color}`}} className="fas fa-star"></i>
                <i style={{color:`${color}`}} className="fas fa-star"></i>
               </span>
              <p>{index.description}</p>
              <button className="btn_red">Watch Online</button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default MoviesMarvel;
