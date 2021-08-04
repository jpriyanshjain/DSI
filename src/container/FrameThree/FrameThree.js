import React from 'react';
import Button from '../../component/Button';
import "./FrameThree.css";
import OurProduct from "../../assets/OurProduct"
import OurTechnology from "../../assets/OurTechnology"
import OurService from "../../assets/OurService"

function FrameThree() {
    return (
        <div className="frameThree">
          <div className="frameThree__title">
              <p className="frameThree__title--text" >Products and Service</p>
          </div>
          <div className="frameThree__body">
          <div className="frameThree__section">
              <div className="frameThree__section--SVG">
                  {OurProduct }
              </div>
              <div className="frameThree__section--title">
                  <p className="frameThree__section--title--text"> Our Product</p>
              </div>
              <div className="frameThree__section--des">
                  <p className="frameThree__section--des--text"> 
                  Our product is made on the base of our team’s careful
                   research and analyses, ranging from internet based application.
                  </p>
              </div>
              <div className="frameThree__section--btn btnone">
                  <Button text={"Read More"} />
              </div>
          </div>
          <div className="frameThree__section">
              <div className="frameThree__section--SVG">
                  {OurService }
              </div>
              <div className="frameThree__section--title">
                  <p className="frameThree__section--title--text"> Our Service</p>
              </div>
              <div className="frameThree__section--des">
                  <p className="frameThree__section--des--text"> 
                  DSI’s shared service solutions focus on the front-end based 
                  software development, designed specifically for the banking and financial sectors.

                  </p>
              </div>
              <div className="frameThree__section--btn frameThree__ourService--btn btnone ">
                  <Button text={"Read More"} />
              </div>
          </div>
          <div className="frameThree__section frameThree__ourTech">
              <div className="frameThree__section--SVG">
                  {OurTechnology }
              </div>
              <div className="frameThree__section--title">
                  <p className=" frameThree__ourTech--title--text"> Our Technology</p>
              </div>
              <div className="frameThree__section--des">
                  <p className="frameThree__section--des--text"> 
                  First JAVA, runs on more than 850 million personal 
                  computers worldwide, and on billions of devices worldwide,
                   including mobile and TV devices.
                  </p>
              <div className="frameThree__section--btn frameThree__ourTech--btn ">
                  <Button text={"Read More"} />
              </div>
              </div>
              </div>
          </div>
        </div>
    )
}

export default FrameThree
