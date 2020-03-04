import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

export default function CarouselPortal(props) {
    return (
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div>
              <img src="https://images-na.ssl-images-amazon.com/images/I/51XYolCzVKL._SY355_.jpg" alt=""/>
          </div>
          <div>
            <img src="https://images-na.ssl-images-amazon.com/images/I/51XYolCzVKL._SY355_.jpg" alt=""/>    
          </div>
          <div>
            <img src="data:image/jpeg;base64,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" alt=""/>
          </div>
          <div>
              <img src="data:image/jpeg;base64,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" alt=""/>
          </div>
        </Carousel>
    );
}
