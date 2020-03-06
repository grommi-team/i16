import React, { Component } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const altura = {
  height: "300px"
};

class CarouselGalery extends Component {
  onSlideChange(e) {
    console.log("Item`s position during a change: ", e.item);
    console.log("Slide`s position during a change: ", e.slide);
  }

  onSlideChanged(e) {
    console.log("Item`s position after changes: ", e.item);
    console.log("Slide`s position after changes: ", e.slide);
  }

  render() {
    const responsive = {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1024: {
        items: 3
      }
    };
    return (
        <AliceCarousel
          duration={400}
          autoPlay={true}
          startIndex={1}
          fadeOutAnimation={true}
          mouseDragEnabled={true}
          playButtonEnabled={true}
          responsive={responsive}
          autoPlayInterval={2000}
          autoPlayDirection="rtl"
          autoPlayActionDisabled={true}
          onSlideChange={this.onSlideChange}
          onSlideChanged={this.onSlideChanged}
        >
          <div className="yours-custom-class">
            <h2>1</h2>
            <div>
              <img
                src="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&w=1000&q=80"
                alt=""
                style={altura}
              />
            </div>
          </div>
          <div className="yours-custom-class">
            <h2>2</h2>
            <div>
              <img
                src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg"
                alt=""
                style={altura}
              />
            </div>
          </div>
          <div className="yours-custom-class">
            <h2>3</h2>
          </div>
          <div className="yours-custom-class">
            <h2>4</h2>
          </div>
          <div className="yours-custom-class">
            <h2>5</h2>
          </div>
        </AliceCarousel>
    );
  }
}

export default CarouselGalery;
