import React from 'react';
import DeviceSVG from "../../assets/device"
import "./Frameone.css";
import Button from "../../component/Button"

function Frameone() {
    return (
        <div className="frameone">
            <div className="frameone__deviceSVG">
                {DeviceSVG}
            </div>
            <div className= "frameone__des">                
                <p className="frameone__des--title">Making the most of the ever-growing</p>
                <p className="frameone__des--title red">Information Technology</p>
                <p className="frameone__des--text">Managed by a team of professional experts with extensive experience and impressive track records</p>         
            <div className="frameone__button">
                    <Button text ={"Read More"} />
            </div>
            </div>
            

        </div>
    )
}

export default Frameone;
