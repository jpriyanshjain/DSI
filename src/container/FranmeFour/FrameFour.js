import React from 'react';
import "./FrameFour.css";
import DSI from "../../assets/DSI";
import Silverlight from "../../assets/Silverlight.jpg"
import Net from "../../assets/Net.png"
import Java from "../../assets/Java.jpg";
import IOS from "../../assets/ios.png";
import Android from "../../assets/android.jpg";
import Blackberry from "../../assets/BlackBerry.jpg";

function FrameFour() {
    return (
        <div className="frameFour">
            <div className="framefour__add">
          <div className="frameFour__SVG">
              {DSI}
          </div>
          <div className="frameFour__title">
              <p className="frameFour__title--des">
              PT Dwidasa Samsara Indonesia
              </p>
              <div className="frameFour__title--address">
             <p className="frameFour__title--address--text"> Ruko Jalur Sutera 29A No. 53</p>
              <p className="frameFour__title--address--text">Alam Sutera Serpong, Tangerang 15323</p>
              </div>
          </div>
            </div>
          <div className="frameFour__contact">
              <div className="frameFour__contact--title">
                  <p className="frameFour__contact--title--text">Contact</p>
              </div>
              <div className="frameFour__contact--detail">
                  <p className="frameFour__contact--detail--text">Phone : +62.21.5314.1135 Fax :</p>
                  <p className="frameFour__contact--detail--text">+62.21.5314.1135 Email :</p>
                  <p className="frameFour__contact--detail--text">community@dwidasa.com</p>
              </div>
          </div>
          <div className="framFour__SVG">
              <div className="frameFour__SVG--line">
                  <div className="frameFour__SVG__img--silverlight">
                  <img src={Silverlight}   alt="SilverLight" />
                  </div>
                  <div className="frameFour__SVG__img--net" >
                  <img src={Net}  alt="Net" />
                  </div>
                  <div className="frameFour__SVG__img--java" >
                  <img src={Java}  alt="Java" />
                  </div>
              </div>
              <div className="frameFour__SVG--line">
                  <div className="frameFour__SVG__img--ios">
                <img src={IOS}  alt="IOS" />
                  </div>
                  <div className="frameFour__SVG__img--android">
                <img src={Android} alt="Android" />
                  </div>
                  <div className="frameFour__SVG__img--blackberry">
                <img src={Blackberry}  alt="Blackberry" />
                  </div>
              </div>
              
          </div>
        </div>
    )
}

export default FrameFour
