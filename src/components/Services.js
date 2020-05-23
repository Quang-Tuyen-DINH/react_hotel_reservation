import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services:[
      {
        icon: <FaCocktail/>,
        title: "Cocktails",
        info: "Ut nec posuere mi, non efficitur nulla. Suspendisse a viverra justo. Sed ac tristique enim. In blandit lacus nec odio congue ornare. Vivamus tempus rhoncus augue id luctus."
      },
      {
        icon: <FaHiking/>,
        title: "Hiking",
        info: "Ut nec posuere mi, non efficitur nulla. Suspendisse a viverra justo. Sed ac tristique enim. In blandit lacus nec odio congue ornare. Vivamus tempus rhoncus augue id luctus."
      },
      {
        icon: <FaShuttleVan/>,
        title: "ShuttleVan",
        info: "Ut nec posuere mi, non efficitur nulla. Suspendisse a viverra justo. Sed ac tristique enim. In blandit lacus nec odio congue ornare. Vivamus tempus rhoncus augue id luctus."
      },
      {
        icon: <FaBeer/>,
        title: "Beer",
        info: "Ut nec posuere mi, non efficitur nulla. Suspendisse a viverra justo. Sed ac tristique enim. In blandit lacus nec odio congue ornare. Vivamus tempus rhoncus augue id luctus."
      }
    ]
  }
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          })}
        </div>
      </section>
    )
  }
}
