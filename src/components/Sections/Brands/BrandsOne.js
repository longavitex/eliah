import React from "react";
import SectionTitleOne from "../SectionTitle/SectionTitleOne";

const logos = [
  "/images/brands/BrandsOne/1.png",
  "/images/brands/BrandsOne/2.png",
  "/images/brands/BrandsOne/3.png",
  "/images/brands/BrandsOne/4.png",
  "/images/brands/BrandsOne/5.png",
  "/images/brands/BrandsOne/6.png",
];

export default function BrandsOne() {
  return (
    <div className="brand-one">
      <div className="container">
        <div className="brand-one__wrapper">
          <div className="row align-items-center">
            <div className="col-12 col-md-4">
              <SectionTitleOne
                spaceBottom="0px"
                description="Discover products with brands"
              >
                Our brands
              </SectionTitleOne>
            </div>
            <div className="col-12 col-md-8">
              <div className="brand-one__logos">
                {logos.map((logo, index) => (
                  <div key={index} className="brand-one__logos__item">
                    <img src={logo} alt="logo" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
