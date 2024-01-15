import React, {useState, useLayoutEffect} from 'react';
import '../styles/FooterStyles/footer.scss'
import {LogoCompany} from "./LogoCompany";
import {Options} from "./Options";
import {SocialMedia} from "./SocialMedia";

export const FooterMain = () => {
    const [fixedFooter, setFixedFooter] = useState(false);


    useLayoutEffect(() => {
        const ajustarFooter = () => {
            const footer = document.querySelector('footer');
            if (footer) {
                const windowHeight = window.innerHeight;
                const rect = footer.getBoundingClientRect();
                const offsetTop = rect.top + window.scrollY;

                console.log(offsetTop +" "+rect.height+" "+ windowHeight)
                const value = offsetTop + rect.height < windowHeight;
                console.log(value)
                setFixedFooter(value);

            }

        };

        ajustarFooter(); // Ajustar al cargar la página

        window.addEventListener('resize', ajustarFooter);

        // Limpiar el event listener al desmontar el componente
        return () => {
            window.removeEventListener('resize', ajustarFooter);

        };
    }, []);



    return (
        <footer className={"container"+(fixedFooter?" footerMain":"")} style={{position: fixedFooter ? 'fixed' : 'relative'}}>
            <div className="row">
                <div className="col"><Options/></div>
                <div className="col"><LogoCompany/></div>
                <div className="col"><SocialMedia/></div>
            </div>
        </footer>
    )
}