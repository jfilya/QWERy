import Header from "./components/Header/Header";
import Tour from "./components/Tour/Tour";
import Bromo from "./components/Bromo/Bromo";
import Culture from "./components/Culture/Culture";
import Footer from "./components/Footer/Footer";
import React from "react";
function App() {
      React.useEffect(() => {
      const onEntry = (entry: IntersectionObserverEntry[]) => {
        entry.forEach(
          (change: IntersectionObserverEntry) => {
            if (change.isIntersecting) {
              change.target.classList.add("element-show");
            } else {
              change.target.classList.remove("element-show");
            }
          }
        );
      };
      let options = { threshold: [0.5] };
      let observer = new IntersectionObserver(onEntry, options);
      let elements = document.querySelectorAll(
        ".element-appearance, .element-appearance-img, .bromo__title-min, .bromo__title, .bromo__info, .bromo__link"
      ) as unknown as HTMLElement[];
      elements.forEach((elm) => observer.observe(elm));
  });


  return (
    <div className="App">
      <Header />
      <Tour />
      <Bromo />
      <Culture />
      <Footer/>
    </div>
  );
}

export default App;
