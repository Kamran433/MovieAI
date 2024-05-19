import { items } from "../public/Items.json";
import Carousel from "react-elastic-carousel";
import styles from "../styles/Elastic.module.css";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
];
export default function ElasticCarousel() {
  const { elastic } = items;
  return (
    <div className="z-10 w-50 flex justify-center items-center h-screen">
      <hr className={styles.seperator} />
      <div className={styles.contWrapper}>
        <Carousel breakPoints={breakPoints} className="z-20">
          {elastic.map((item) => (
            <div
              key={item.id}
              className="z-20"
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            ></div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
