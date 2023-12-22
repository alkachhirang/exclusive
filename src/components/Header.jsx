import React from 'react';
import { useState } from "react";
import { Container, Row } from 'react-bootstrap';
import Navlogo from '../assets/images/png/nav-logo.png';
import Buttonline from '../assets/images/png/button-img.png';
import NavbtnLine from '../assets/images/png/Nav-btn-line.png';

function Header() {
    const [show, setshow] = useState(true)
    if (show === false) {
        document.body.classList.add("overflow_hidden");
    } else {
        document.body.classList.remove("overflow_hidden");
    }
    return (
        <div className='bg_body'>
            <div className='Hero_bg_img min_vh_90'>
                <nav className='bg_nav py-4 position-relative z_5'>
                    <Container>
                        <div className='d-flex justify-content-between align-items-center'>
                            <a href=''>
                                <img src={Navlogo} alt="Navlogo" className='w-100 mw_210 h-100' />
                            </a>

                            <ul className={`${show ? "left_100" : "left_0"} nav_bar`}>
                                <li className='position-relative'><a href='#hogar' onClick={() => setshow(!show)} className='text-white fs_16 fw-medium ff_inter nav_link'>Hogar</a></li>
                                <li className='position-relative'><a href='#Misión' onClick={() => setshow(!show)} className='text-white fs_16 fw-medium ff_inter nav_link'>Misión</a></li>
                                <li className='position-relative'><a href='#Tragamonedas' onClick={() => setshow(!show)} className='text-white fs_16 fw-medium ff_inter nav_link'>Tragamonedas</a></li>
                                <li className='position-relative'><a href='#elegirnos' onClick={() => setshow(!show)} className='text-white fs_16 fw-medium ff_inter text-nowrap nav_link'>Por qué elegirnos</a></li>
                                <li className='position-relative'><a href='#Ofertas' onClick={() => setshow(!show)} className='text-white fs_16 fw-medium ff_inter nav_link'>Ofertas</a></li>
                            </ul>
                            <div className='position-relative d-none d-xl-block z-1 cursor_pointer'>
                                <a href='' className='nav_btn text-white ff_inter fs_16 fw-bold text-nowrap '>Acceso</a>
                                <img src={NavbtnLine} alt="NavbtnLine" className='position-absolute left_4 bottom_87' />
                            </div>
                            <div onClick={() => setshow(!show)} className={`${show ? "" : "cross"} navline`}>
                                <span className='crl-1'></span>
                                <span className='crl-2'></span>
                                <span className='crl-3'></span>
                            </div>
                        </div>
                    </Container>
                </nav>
                <Container id='hogar' className='py_header'>
                    <div className='d-flex justify-content-center align-items-center flex-column'>
                        <h2 className='text-white text-capitalize fs_72 fw-normal mw_505 ff_anton m-0 text-center' data-aos="fade-down">Exclusive Games. Pasión por ganar</h2>
                        <p className='text-white ff_inter fw-medium fs_16 mw_727 text-center mb-0 pt-2 pb-3' data-aos="fade-down">En Exclusive Games somos un equipo apasionado de personas dedicados al desarrollo de multiplataformas para juegos de azar. A lo largo de nuestra vida consumimos todo tipo de juegos hasta que un día decidimos crear los propios.</p>
                        <div className='pt-4 position-relative z-1 cursor_pointer' data-aos="fade-down">
                            <a href='' className='comman_btn text-black ff_inter fs_16 fw-bold text-nowrap '>Empezar</a>
                            <img src={Buttonline} alt="Buttonline" className='position-absolute left_4 bottom_34' />
                        </div>
                    </div>
                </Container>

            </div>
        </div>
    )
}

export default Header
