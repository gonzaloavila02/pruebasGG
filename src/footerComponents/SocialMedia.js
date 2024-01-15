import React from "react";
import {LogoInstagram} from "./logosComponents/LogoInstagram";
import {LogoLikedin} from "./logosComponents/LogoLikedin";
import {LogoYoutube} from "./logosComponents/LogoYoutube";
export const SocialMedia = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <LogoInstagram/>
                </div>

                <div className="col">
                    <LogoLikedin/>
                </div>
                <div className="col">
                    <LogoYoutube/>
                </div>
            </div>

        </div>
    )
}