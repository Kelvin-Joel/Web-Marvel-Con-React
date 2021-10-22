import React from "react";
import "../Css/Gallery.css";
import "../Css/StyleGlobal.css";
const datos = [
  {
    id: 1,
    img: "./img/img1-min.png",
    name: "Capitan America",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, dolorem cupiditate! Deleniti voluptas dicta optio harum, itaque molestiae",
  },
  {
    id: 2,
    img: "./img/img2-min.png",
    name: "Capitan America",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, dolorem cupiditate! Deleniti voluptas dicta optio harum, itaque molestiae",
  },
  {
    id: 3,
    img: "./img/img3-min.png",
    name: "Capitan America",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, dolorem cupiditate! Deleniti voluptas dicta optio harum, itaque molestiae",
  },
  {
    id: 4,
    img: "./img/img4-min.png",
    name: "Capitan America",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, dolorem cupiditate! Deleniti voluptas dicta optio harum, itaque molestiae",
  },
  {
    id: 5,
    img: "./img/img5-min.png",
    name: "Capitan America",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, dolorem cupiditate! Deleniti voluptas dicta optio harum, itaque molestiae",
  },
  {
    id: 6,
    img: "./img/img6-min.png",
    name: "Capitan America",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, dolorem cupiditate! Deleniti voluptas dicta optio harum, itaque molestiae",
  },
  {
    id: 7,
    img: "./img/img7-min.png",
    name: "Capitan America",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, dolorem cupiditate! Deleniti voluptas dicta optio harum, itaque molestiae",
  },
  {
    id: 8,
    img: "./img/img8-min.png",
    name: "Capitan America",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, dolorem cupiditate! Deleniti voluptas dicta optio harum, itaque molestiae",
  },
  {
    id: 9,
    img: "./img/img9-min.png",
    name: "Capitan America",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, dolorem cupiditate! Deleniti voluptas dicta optio harum, itaque molestiae",
  },
];

const Gallery = () => {
  return (
    <section className="conte_gallery flex-around flex-wrap padding-top margin-bottom" id="gallery">
      <h2 className="title_gallery_heroes">
        Superheroes <span className="color-red">GALLERY</span>
      </h2>
      {datos.map((index) => {
        return (
          <article className="car_gallery" key={index.id}>
            <img className="img-hereo_gallery" src={index.img} alt="" />
            <div className="description_personaje">
              <h3 className="fondo-red name_heroe">{index.name}</h3>
              <p className="description_heroe">{index.description}</p>
              <button className="btn_red">Learn More</button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Gallery;
