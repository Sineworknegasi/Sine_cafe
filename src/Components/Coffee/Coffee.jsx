import React from "react";
import "./Coffee.css";

const coffee_menu = [
  {
    id: 1,
    title: "Cappuccino",
    price: "$49",
    description:
      "Usage of the Internet is becoming more common due to rapid advance.",
  },
  {
    id: 2,
    title: "Americano",
    price: "$49",
    description:
      "Usage of the Internet is becoming more common due to rapid advance.",
  },
  {
    id: 3,
    title: "Espresso",
    price: "$49",
    description:
      "Usage of the Internet is becoming more common due to rapid advance.",
  },
  {
    id: 4,
    title: "Macchiato",
    price: "$49",
    description:
      "Usage of the Internet is becoming more common due to rapid advance.",
  },
  {
    id: 5,
    title: "Mocha",
    price: "$49",
    description:
      "Usage of the Internet is becoming more common due to rapid advance.",
  },
  {
    id: 6,
    title: "Coffee Latte",
    price: "$49",
    description:
      "Usage of the Internet is becoming more common due to rapid advance.",
  },
  {
    id: 7,
    title: "Piccolo Latte",
    price: "$49",
    description:
      "Usage of the Internet is becoming more common due to rapid advance.",
  },
  {
    id: 8,
    title: "Ristretto",
    price: "$49",
    description:
      "Usage of the Internet is becoming more common due to rapid advance.",
  },
  {
    id: 9,
    title: "Affogato",
    price: "$49",
    description:
      "Usage of the Internet is becoming more common due to rapid advance.",
  },
].map((items) => (
  <>
    <div className="col-lg-4">
      <div className="menu_card">
        <div className="coffee_title_price d-flex justify-content-between align-items-center pb-20">
          <h4 className="">{items.title}</h4>
          <p className="price float-right m-0">{items.price}</p>
        </div>
        <p>{items.description}</p>
      </div>
    </div>
  </>
));

const Coffee = () => {
  return (
    <section className="Coffee_section section-gap">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="Menu_content pb-60 text_center">
            <h1 className="text-center mb-10">
              What kind of Coffee we serve for you
            </h1>
            <p className="text-center">
              Who are in extremely love with eco friendly system.
            </p>
          </div>
          <div className="menu">
            <div className="row d-flex justify-content-center align-items-center">
              {coffee_menu}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coffee;
