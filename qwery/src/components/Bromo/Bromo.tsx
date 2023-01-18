import "./Bromo.scss";
import React from "react";
class Bromo extends React.Component {
  divStyle: { [key: string]: string };
  backImg: Array<string>;
  item: number;

  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.backImg = [
      "images/bg-bromo.jpg",
      "images/bg-bromo2.jpg",
      "images/bg-bromo3.jpg",
      "images/bg-bromo4.jpg",
    ];
    this.divStyle = {
      backgroundImage: `${this.backImg.map((img) => `url(${img})`)}`,
    };
    this.item = 0;

    this.animationBack = this.animationBack.bind(this);
    this.itemsPlus = this.itemsPlus.bind(this);
    this.itemsMinus = this.itemsMinus.bind(this);
  }

  animationBack() {
    const back = document.querySelector(".bromo__container") as HTMLDivElement;
    const switchBtn = document.querySelectorAll(
      ".bromo__arrow button"
    ) as unknown as HTMLButtonElement[];
    switchBtn.forEach((b) => (b.style.display="none"));
    back.style.backgroundImage = `url(${this.backImg[this.item]})`;
    back.classList.add("back-mymove");
    back.onanimationend = () => {
      back.classList.remove("back-mymove");
      switchBtn.forEach((b) => (b.style.display="block"));
    };
  }
  itemsPlus() {
    this.item < this.backImg.length - 1 ? this.item++ : (this.item = 0);
    this.animationBack();
  }
  itemsMinus() {
    this.item > 0 ? this.item-- : (this.item = this.backImg.length - 1);
    this.animationBack();
  }
  render() {
    return (
      <section className="bromo">
        <div className="container bromo__container" style={this.divStyle}>
          <div className="bromo__arrow">
            <button onClick={this.itemsMinus}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.4187 4.3938L8.8125 15L19.4187 25.6063L21.1875 23.8388L12.3475 15L21.1875 6.1613L19.4187 4.3938Z"
                  fill="white"
                />
              </svg>
            </button>
            <button onClick={this.itemsPlus}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5813 25.6062L21.1875 15L10.5813 4.3937L8.8125 6.1612L17.6525 15L8.8125 23.8387L10.5813 25.6062Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <h3 className="bromo__title-min title-min">
            <span></span>
            Bromo
            <span></span>
          </h3>
          <h2 className="bromo__title title">
            Steady your steps, we will climb together!
          </h2>
          <p className="bromo__info info">
            Enjoying the vast expanse of the sea of ​​​​sand, witnessing the
            splendor of Mount Semeru that soars into the sky, and gazing at the
            beauty of the sun moving out of its bed or otherwise enjoying the
            dim twilight from the Bromo ridge is an unforgettable experience
            when visiting Bromo.
          </p>
          <a href="#" className="btn bromo__link link">
            read more
            <span>
              <svg
                width="25"
                height="16"
                viewBox="0 0 25 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 -6.99382e-07L15.09 1.41L20.67 7L0.5 7L0.5 9L20.67 9L15.08 14.58L16.5 16L24.5 8L16.5 -6.99382e-07Z"
                  fill="#FBD784"
                />
              </svg>
            </span>
          </a>
        </div>
      </section>
    );
  }
}
export default Bromo;
