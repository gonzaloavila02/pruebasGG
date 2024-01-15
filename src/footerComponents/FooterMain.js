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
                const mainHeight = document.getElementById('main').offsetHeight;
                const windowHeight = window.innerHeight;
                const rect = footer.getBoundingClientRect();
                const offsetTop = rect.top + window.scrollY;

                const spacebottom = offsetTop + rect.height < windowHeight;//esto verifico si hay espacio abajo del footer
                const spacebetween = offsetTop - mainHeight > 200;//esto verifico si hay espacio entre media no coloco 0 ya que el espacio minimo que hay entre elementos por defecto es este número

                setFixedFooter(spacebottom || spacebetween);// se coloca fixed cuando hay espacio hacia abajo o(or) si hay espacio entre elementos superior a lo indicado

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