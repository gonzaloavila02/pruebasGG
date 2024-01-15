import React from "react";
import logoLikedin from "../../img/likedin.svg";
export const LogoLikedin = () =>{
    return(
        <React.Fragment>
            <div className="row">
                <div className="col"><img src={logoLikedin}/></div>
            </div>

            <div className="row">
                <div className="col">Likedin</div>
            </div>
        </React.Fragment>
    );
}