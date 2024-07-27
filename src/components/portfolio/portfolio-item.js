import React, {Component} from "react";
import { Link } from "react-router-dom";

export default class PortfolioItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
           portfolioItemClass: "" //estado vacío
        };
    }


    handleMouseEnter() { //métodos para manejar los eventos
       this.setState({portfolioItemClass: "Image-blur"});//actualizamos estado para que al posar el mouse no se vea la imagen de fondo

    }


    handleMouseLeave() { //métodos para manejar los eventos
    this.setState({portfolioItemClass: ""});//actualizamos estado para que al quitar el mouse la imagen regrese

    }

    render() {

      const { id, description, thumb_image_url, logo_url } = this.props.item;
      return (
      <Link to={`/portfolio/${id}`}>
        <div
          className="portfolio-item-wrapper"
          onMouseEnter={() => this.handleMouseEnter()}
          onMouseLeave={() => this.handleMouseLeave()}
        >
          <div
            className={
              "portfolio-img-background " + this.state.portfolioItemClass
            }
            style={{
              backgroundImage: "url(" + thumb_image_url + ")"
            }}
          />

          <div className="img-text-wrapper">
            <div className="logo-wrapper">
              <img src={logo_url} />
            </div>

            <div className="subtitle">{description}</div>
          </div>
        </div>
      </Link>
      );
      }

}