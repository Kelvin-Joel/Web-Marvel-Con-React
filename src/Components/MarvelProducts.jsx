import React from "react";
import "../Css/MarvelProducts.css";
import "../Css/StyleGlobal.css";

const Products = [
  {
    id:1,
    title: "Product 1",
    img: "./img/p1-min.png",
    price: "S/30.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nemo, qui aut itaque quidem quibusdam earum possimus quo blanditiis",
  },
  {
    id:2,
    title: "Product 2",
    img: "./img/p2-min.png",
    price: "S/50.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nemo, qui aut itaque quidem quibusdam earum possimus quo blanditiis",
  },
  {
    id:3,
    title: "Product 3",
    img: "./img/p3-min.png",
    price: "S/30.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nemo, qui aut itaque quidem quibusdam earum possimus quo blanditiis",
  },
  {
    id:4,
    title: "Product 4",
    img: "./img/p4-min.png",
    price: "S/30.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nemo, qui aut itaque quidem quibusdam earum possimus quo blanditiis",
  },
];
const MarvelProducts = () => {
  return (
    <section className="conte_products_marvel flex-around flex-wrap padding-top margin-bottom" id="product">
      <h2 className="color-gray title_product_marvel">
        Marvelous <span className="color-red">Products</span>
      </h2>
      {Products.map((index) => {
        return (
          <article key={index.id} className="car_product_marvel">
            <h3 className="title_car_product">{index.title}</h3>
            <img className="img_product" src={index.img} alt="" />
            <p className="price color-gray">{index.price}</p>
            <p className="color-gray">{index.description}</p>
            <button className="btn_red">Add To Cart</button>
          </article>
        );
      })}
    </section>
  );
};

export default MarvelProducts;
