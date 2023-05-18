import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useEffect } from "react";

function CarouselComponent() {
  const [images, setImages] = useState([]);
  const [slidesToShow, setSlidesToShow] = useState(3); // Number of slides to show

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/artworks/image`)
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
      })
      .catch((error) => {
        console.log(error);
      });

    // Update the number of slides to show based on the screen size
    const updateSlidesToShow = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) {
        setSlidesToShow(3); // 3 slides for large devices
      } else if (screenWidth >= 768) {
        setSlidesToShow(2); // 2 slides for medium devices
      } else {
        setSlidesToShow(1); // 1 slide for small devices
      }
    };

    // Add event listener to detect screen size changes
    window.addEventListener("resize", updateSlidesToShow);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  return (
    <div className="max-w-full mx-auto bg-green-100">
      <Carousel
        autoPlay
        infiniteLoop
        interval={2000}
        className="carousel"
        showThumbs={false}
        showArrows={true} // Enable arrows
        showStatus={false} // Disable status indicator
        swipeable={images.length > slidesToShow} // Enable swipe only if there are more slides than shown
        centerMode={slidesToShow !== 1} // Enable center mode if more than 1 slide is shown
        centerSlidePercentage={100 / slidesToShow} // Adjust the center slide percentage based on the number of slides shown
      >
        {images.map((item) => (
          <div key={item.id} className="carousel-item">
            <img
              src={item.image_url}
              alt={item.title}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
