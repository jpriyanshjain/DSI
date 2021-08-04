import React from 'react';
import Browser from "../../assets/brower"
import "./FrameTwo.css"; 

function FrameTwo() {
    return (
        <div className="frametwo">
            <div className="frametwo__SVG">
            {Browser}
            </div>
            <div className="frametwo__des">
                <div className="frametwo__des--title">
                        <p className=" frametwo__des--title--black">Welcome to </p>
                        <p className = "frametwo__des--title--red">Dwidasa </p>
                        <p className = "frametwo__des--title--nextline"> Samsara Indonesia (DSI)</p>
                </div>
                <div className = "frametwo__des--text--para">
                    <p className = "frametwo__des--text--paratext">
                               Dwidasa Samsara Indonesia (DSI) was firstly 
                               established in 2010 by the founders, who each of
                                them has a common end objective to innovate new
                                 creations by making the most of the ever-growing information
                                  technology through <span style={{"color": "#f05a5f"}}>DSI</span>’s distinct front-end based application concept.
                    </p>
                    <br/>
                    <p className = "frametwo__des--text--paratext">
                                Managed by a team of professional experts with extensive experience
                                 and impressive track records, <span style={{"color": "#f05a5f"}}>DSI</span> believes that continuous improvements
                                  and innovations assure your business to run effectively and efficiently. 
                    </p>
              
                </div>

            </div>
        </div>
    )
}

export default FrameTwo
