import React from "react";
import logoYoutube from "../../img/youtube.svg";
export const LogoYoutube = () =>{
    return(
        <React.Fragment>
            <div className="row">
                <div className="col"><img src={logoYoutube}/></div>
            </div>

            <div className="row">
                <div className="col">Youtube</div>
            </div>
        </React.Fragment>
    );
}