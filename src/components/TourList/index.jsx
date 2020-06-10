import React, { Component } from "react";
import Tour from "../Tour";
import TourData from "../../tourData";
import "./tourlist.scss";

class TourList extends Component {
  state = {
    city: TourData,
  };
  removeTour = (id) => {
    const sortedLocation = this.state.city.filter(
      (location) => location.id !== id
    );
    this.setState({
      city: sortedLocation,
    });
  };
  render() {
    return (
      <section className="tourlist">
        {this.state.city.map((city) => (
          <Tour key={city.id} city={city} removeTour={this.removeTour} />
        ))}
      </section>
    );
  }
}

export default TourList;
