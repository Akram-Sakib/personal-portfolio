import React from "react";
import Lottie from "react-lottie";
import "./WorkProcess.css";

const WorkProcess = () => {
  return (
    <section className="container mx-auto py-20">
      <div className="text-center mb-28">
        <h3 className="my-6 text-5xl text-center tracking-tight font-extrabold  text-dark dark:text-white sm:leading-none">
          How I
          <span className="text-indigo-600 dark:text-indigo-500"> Work</span>
        </h3>
        <h2 className="text-3xl font-extrabold dark:text-white">
          I prepare your projects in 3 stages
        </h2>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center md:items-stretch lg:items-stretch">
        <div class="how-i-work-item">
          <img
            src="https://aipthemes.com/filaous/img/bg/arrow-img.png"
            alt="Arrrow image"
            class="arrow-dashed-img"
          />
          <div class="number">
            <span>01</span>
          </div>
          <div class="number-border"></div>
          <div class="img">
            <img
              src="https://aipthemes.com/filaous/img/bg/how-i-work-img-1.png"
              class="img-fluid"
              alt="How i work"
            />
          </div>
          <div class="text">
            <h5 className="font-extrabold">Thinking</h5>
          </div>
        </div>
        <div class="how-i-work-item">
          <img
            src="https://aipthemes.com/filaous/img/bg/arrow-img.png"
            alt="Arrrow image"
            class="arrow-dashed-img"
          />
          <div class="number">
            <span>02</span>
          </div>
          <div class="number-border"></div>
          <div class="img">
            <img
              src="https://aipthemes.com/filaous/img/bg/how-i-work-img-2.png"
              class="img-fluid"
              alt="How i work"
            />
          </div>
          <div class="text">
            <h5 className="font-extrabold">Research</h5>
          </div>
        </div>
        <div class="how-i-work-item">
          <div class="number">
            <span>03</span>
          </div>
          <div class="number-border"></div>
          <div class="img">
            <img
              src="https://aipthemes.com/filaous/img/bg/how-i-work-img-3.png"
              class="img-fluid"
              alt="How i work"
            />
          </div>
          <div class="text">
            <h5 className="font-extrabold">Design</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
