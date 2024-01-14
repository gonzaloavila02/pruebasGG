import React, { useState, useEffect } from 'react';
import {LogoCompany} from "./LogoCompany";
import {SocialMedia} from "./SocialMedia";
import {Options} from "./Options";

export const FooterMain = () => {
    const [fixedFooter, setFixedFooter] = useState(false);


    useEffect(() => {
        const ajustarFooter = () => {
            const footerHeight = document.querySelector('footer').getBoundingClientRect().height;
            const offsetTop = document.querySelector('footer').offsetTop;
            const windowHeight = window.innerHeight;
            const footerStyle = document.querySelector('footer')

            setFixedFooter(offsetTop + footerHeight < windowHeight);
            if (fixedFooter){
                footerStyle.classList.add('footerMain')
            }else{
                footerStyle.classList.remove('footerMain')
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
        <footer className={"d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top" + (fixedFooter ? 'footerMain' : '' )} style={{position: fixedFooter ? 'fixed' : 'relative'}}>
            <p className="col-md-4 mb-0 text-body-secondary">&copy; 2023 Company, Inc</p>

            <a href="/"
               className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <logoCompany/>
            </a>

            <ul className="nav col-md-4 justify-content-end">
                <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
            </ul>
        </footer>
    )
}