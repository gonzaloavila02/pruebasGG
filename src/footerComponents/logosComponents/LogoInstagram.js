import React from "react";
import logoInsta from "../../img/insta.svg";
export const LogoInstagram = () =>{
    return(
        <React.Fragment>
            <div className="row">
                <div className="col"><img src={logoInsta}/></div>
            </div>

            <div className="row">
                <div className="col">Instagram</div>
            </div>
        </React.Fragment>
    );
}