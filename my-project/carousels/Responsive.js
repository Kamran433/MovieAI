import { Carousel } from "react-responsive-carousel";
import { items } from "../public/Items.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../styles/Responsive.module.css";

export default function ResponsiveCarousel() {
  // Ensure that `responsive` array exists and is not empty
  const responsive = items.responsive || [];

  return (
    <div className={styles.container}>
      <Carousel
        showArrows={true}
        showIndicators={true}
        infiniteLoop={true}
        dynamicHeight={false}
        className={styles.mySwiper}
      >
        {responsive.map((item) => (
          <div key={item.id} className={styles.swipItem}>
            <div className="flex justify-center items-center h-screen">
              <img src={item.imageUrl} alt="slides" />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
