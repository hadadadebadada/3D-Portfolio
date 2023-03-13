import React, { useState, useEffect, useContext } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import styled from 'styled-components';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavItemBtn,
    NavLinks,
    NavBtnLink,
    LangButton
} from './Navbar.elements';






import { FormattedMessage } from 'react-intl';
import { Context } from '../../App';

function Navbar() {
    const { locale, selectLang } = useContext(Context);


    useEffect(() => {
        console.log("context")
        console.log(locale);
        console.log(selectLang)
    }, []);



    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);




    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={closeMobileMenu}>

                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to='/home' onClick={closeMobileMenu}>

                                    <FormattedMessage
                                        id="navbar.home">

                                    </FormattedMessage>
                                </NavLinks>
                            </NavItem>
              
                           
                            <NavItem>
                                <NavLinks to='/employeelist' onClick={closeMobileMenu}>
                                    <FormattedMessage
                                        id="navbar.employeefinder">

                                    </FormattedMessage>
                                </NavLinks>
                            </NavItem>
                            <NavItem>
     

                            </NavItem>
                            <button onClick={() => selectLang("en-US")}>Set locale to English</button>

{/* 
                            <LangButton value={locale = "de-DE"} onClick={selectLang}>🇩🇪</LangButton>
                            <LangButton value={locale = "en-US"} onClick={selectLang}>🇺🇸</LangButton>
                            <LangButton value={locale = "es-MX"} onClick={selectLang}>🇪🇸</LangButton>
                            <LangButton value={locale = "ru-RU"} onClick={selectLang}>🇷🇺</LangButton>
 */}








                        </NavMenu>{/*  */}
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>


    );
}

export default Navbar;

