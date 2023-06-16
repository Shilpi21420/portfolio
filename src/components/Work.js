import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import data from "../assets/data.json";

function Work() {
  return (
    <div id="work">
      <h2>WORK</h2>
      <section>
        <article>
          {/* The carousel is a slideshow for cycling through a series of content,
         built with CSS 3D transforms and a bit of JavaScript. It works with a series of images, text, 
         or custom markup. It also includes support for previous/next controls and indicators. */}
          <Carousel
            showArrows={true}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            interval={2000}
            infiniteLoop={true}
            autoPlay={true}
          >
            {data.projects.map((i) => (
              <div key={i.title} className="workItem">
                <img src={i.imgSrc} alt={i.title} />
                <aside>
                  <h3>{i.title}</h3>
                  <p>{i.description}</p>
                  <a target={"blanck"} href={i.url}>
                    View Demo
                  </a>
                </aside>
              </div>
            ))}
          </Carousel>
        </article>
      </section>
    </div>
  );
}

export default Work;
