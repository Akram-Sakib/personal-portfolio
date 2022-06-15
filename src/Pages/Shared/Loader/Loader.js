import React from "react";
import "./Loader.css";


const Loader = () => {
    
  return (
    <div className="loader dark:bg-black">
        <section id="preloader-section">
            <div id="preloader">
                <div id="ctn-preloader" class="ctn-preloader">
                    <div class="animation-preloader">
                        
                        <div class="spinner"></div>
                        
                        <div class="txt-loading">
                            <span data-text-preloader="A" class="letters-loading">A</span>
                            <span data-text-preloader="R" class="letters-loading">K</span>
                            <span data-text-preloader="C" class="letters-loading">R</span>
                            <span data-text-preloader="R" class="letters-loading">A</span>
                            <span data-text-preloader="E" class="letters-loading">M</span>
                            <span data-text-preloader="" class="letters-loading"> </span>
                            <span data-text-preloader="A" class="letters-loading">S</span>
                            <span data-text-preloader="T" class="letters-loading">A</span>
                            <span data-text-preloader="I" class="letters-loading">K</span>
                            <span data-text-preloader="V" class="letters-loading">I</span>
                            <span data-text-preloader="E" class="letters-loading">B</span>
                        </div>
                        

                    </div>

                    <div class="loader-section section-left"></div>
                    <div class="loader-section section-right"></div>

                </div>
            </div>
        </section>
    </div>
  );
};

export default Loader;
