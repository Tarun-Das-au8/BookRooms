import React, { Component } from "react";
import { FaCocktail, FaCoffee, FaHamburger, FaBeer } from "react-icons/fa";
import Title from "./Title";
class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "A cocktail is an alcoholic mixed drink, which is either a combination of spirits, or one or more spirits mixed with other ingredients such as fruit juice, flavored syrup, or cream",
      },
      {
        icon: <FaHamburger />,
        title: "HamBurger",
        info:
          "A hamburger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.",
      },
      {
        icon: <FaCoffee />,
        title: "Free Coffee",
        info:
          "Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. ",
      },
    
      {
        icon: <FaBeer />,
        title: "Beer",
        info:
          "Beer is one of the oldest and most widely consumed alcoholic drinks in the world, and the third most popular drink overall after water and tea.",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item) => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
