import { useRef, useState } from "react";
import "./App.css";

let menu = [
  { name: "custom", top: 0, img: "/images/img1_.jpg" },
  { name: "semi-custom", top: "75px", img: "/images/img2_.jpg" },
  { name: "quick delivery", top: "150px", img: "/images/img3_.jpg" },
  { name: "meet the team", top: "225px", img: "/images/img2_.jpg" },
  { name: "customer reviews", top: "300px", img: "/images/img1_.jpg" },
  { name: "customer care", top: "375px", img: "/images/img2_.jpg" },
  { name: "contact", top: "450px", img: "/images/img3_.jpg" },
  { name: "blog", top: "500px", img: "/images/img4_.jpg" },
];

function App() {
  const [hovered, hover] = useState(false);
  const [top, setTop] = useState(false);
  const [cardImg, setCardImg] = useState(false);
  const pointerOver = (e) => {
    e.stopPropagation();
    hover(true);
    let hoverMenu = menu.find((x) => x.name == e.target.name);
    setTop(hoverMenu.top);
    setCardImg(hoverMenu.img);
  };
  const pointerOut = () => {
    hover(false);
    setTop(false);
    // setCardImg(false);
  };
  return (
    <div className="App">
      <header className="App-header">
        {menu.map((item) => (
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            name={item.name}
            rel="noopener noreferrer"
            onMouseOver={pointerOver}
            onMouseOut={pointerOut}
          >
            {item.name}
          </a>
        ))}
        {hovered && (
          <>
            <div className="card c1" style={{ top: top, opacity: 1 }}>
              <div className="card_image">
                {" "}
                <img src={cardImg} />{" "}
              </div>
              <div className="card_title title-white"></div>
            </div>
            <div
              className="card c2"
              style={{
                bottom: top,
                opacity: 1,
              }}
            >
              <div className="card_image">
                {" "}
                <img src={cardImg} />{" "}
              </div>
              <div className="card_title title-white"></div>
            </div>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
