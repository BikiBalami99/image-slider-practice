import Carousel from "./Carousel";
import img1 from "./images/a.jpeg";
import img2 from "./images/b.jpeg";
import img3 from "./images/c.jpeg";
import img4 from "./images/d.jpeg";

const images = [
  { title: "img1", image: img1 },
  { title: "img2", image: img2 },
  { title: "img2", image: img3 },
  { title: "img2", image: img4 },
];

function App() {
  return (
    <div>
      <Carousel images={images} />
    </div>
  );
}

export default App;
