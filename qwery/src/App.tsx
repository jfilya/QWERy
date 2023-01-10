import Header from "./components/Header/Header";
import Tour from "./components/Tour/Tour";
import React from "react";
function App() {
  React.useEffect(() => {
      const onEntry = (entry: IntersectionObserverEntry[]) => {
        entry.forEach(
          (change: IntersectionObserverEntry) => {
            if (change.isIntersecting) {
              change.target.classList.add("element-show");
            }
          }
        );
      };
      let options = { threshold: [0.5] };
      let observer = new IntersectionObserver(onEntry, options);
      let elements = document.querySelectorAll(
        ".element-appearance"
      ) as unknown as HTMLElement[];
      elements.forEach((elm) => observer.observe(elm));
  });
  return (
    <div className="App">
      <Header />
      <Tour />
    </div>
  );
}

export default App;
