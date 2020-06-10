import React, { Component } from "react";
import "./tour.scss";

class Tour extends Component {
  state = {
    toggleInfo: false,
  };
  handleInfo = () => {
    this.setState({
      toggleInfo: !this.state.toggleInfo,
    });
  };
  render() {
    const { id, img, city, name, info } = this.props.city;
    const { removeTour } = this.props;
    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt="city" />
          <span className="close-button" onClick={() => removeTour(id)}>
            <i className="fas fa-window-close" />
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info{" "}
            <span onClick={this.handleInfo}>
              <i className="fas fa-caret-square-down" />
            </span>
          </h5>
          <p>{this.state.toggleInfo ? info : null}</p>
        </div>
      </article>
    );
  }
}

export default Tour;

// const Tour = (props) => {
//   console.log(props);
//   const { image, city, nameSight, info } = this.props.city;
//   return (
//     <article>
//       <img src={image} alt="city" />
//       <h2>{city}</h2>
//       <h3>{nameSight}</h3>
//       <h3>{info}</h3>
//     </article>
//   );
// };

// export default Tour;
