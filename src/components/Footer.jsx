import React from 'react';
import { useState } from "react";
import { Col, Row, Container } from 'react-bootstrap';
import Footerlogo from '../assets/images/png/footer-logo.png';
import { Instagram } from './IconImg';
import { Facebook } from './IconImg';
import { In } from './IconImg';
import Msgbox from '../assets/images/png/msg-box.png';
import { Teliphn } from './IconImg';

function Footer() {
    const [show, setshow] = useState(true)
    return (
        <div className='bg-black  pt-md-5 position-relative'>
            <div className='footer_circle1'></div>
            <div className='footer_circle2'></div>
            <Container className='pt-5 pb-md-5 pb-4'>
                <Row>
                    <Col lg={5} className='col-11'>
                        <img src={Footerlogo} alt="Footerlogo" className='cursor_pointer' />
                        <p className='ff_inter fw-medium text-white opacity_8 fs_16 mw_369 m-0 pt-3 pb-4'>En Exclusive Games somos un equipo apasionado de personas dedicadas al desarrollo de multiplataformas para juegos de azar</p>
                        <div className='d-flex gap-3'>
                            <div className='svg_circle footer_icon d-flex align-items-center justify-content-center pb-1'>
                                <Instagram />
                            </div>
                            <div className='svg_circle footer_icon d-flex align-items-center justify-content-center pb-1'>
                                <Facebook />
                            </div>
                            <div className='svg_circle footer_icon d-flex align-items-center justify-content-center pb-1'>
                                <In />
                            </div>
                        </div>
                    </Col>
                    <Col lg={7} className='col-11'>
                        <div className='d-flex flex-wrap pt-4 pt-lg-0'>
                            <Col lg={4} sm={6} className='col-6'>
                                <ul className='p-0'>
                                    <li><a href='' className='ff_inter fw-bold fs_16 text-white pb-3 d-inline-block'>Menú principal</a></li>
                                    <li><a href='#hogar' onClick={() => setshow(!show)} className='ff_inter fw-medium fs_16 text-white opacity_8 mb-2 d-inline-block nav_link position-relative'>Hogar</a></li>
                                    <li><a href='#Misión' onClick={() => setshow(!show)} className='ff_inter fw-medium fs_16 text-white opacity_8 mb-2 pt-1 d-inline-block nav_link position-relative'>Misión</a></li>
                                    <li><a href='#Tragamonedas' onClick={() => setshow(!show)} className='ff_inter fw-medium fs_16 text-white opacity_8 mb-2 pt-1 d-inline-block nav_link position-relative'>Tragamonedas</a></li>
                                    <li><a href='#elegirnos' onClick={() => setshow(!show)} className='ff_inter fw-medium fs_16 text-white opacity_8 mb-2 pt-1 d-inline-block text-nowrap nav_link position-relative'>Por qué elegirnos</a></li>
                                    <li><a href='#Ofertas' onClick={() => setshow(!show)} className='ff_inter fw-medium fs_16 text-white opacity_8 mb-2 pt-1 d-inline-block nav_link position-relative'>Ofertas</a></li>
                                </ul>
                            </Col>
                            <Col lg={4} sm={6} className='col-6'>
                                <ul className='p-0'>
                                    <li><a href='' className='ff_inter fw-bold fs_16 text-white pb-3 d-inline-block'>Atención al cliente</a></li>
                                    <li><a href='' onClick={() => setshow(!show)} className='ff_inter fw-medium fs_16 text-white opacity_8 mb-2 d-inline-block nav_link position-relative'>¿Necesitas ayuda?</a></li>
                                    <li><a href='' onClick={() => setshow(!show)} className='ff_inter fw-medium fs_16 text-white opacity_8 mb-2 pt-1 d-inline-block nav_link position-relative'>política de privacidad</a></li>
                                    <li><a href='' onClick={() => setshow(!show)} className='ff_inter fw-medium fs_16 text-white opacity_8 mb-2 pt-1 d-inline-block nav_link position-relative'>Términos de servicios</a></li>
                                </ul>
                            </Col>
                            <Col lg={4} className='col-11'>
                                <ul className='p-0'>
                                    <li><a href='' className='ff_inter fw-bold fs_16 text-white pb-3 d-inline-block'>Ponerse en contacto</a></li>

                                    <li className='d-flex align-items-center gap-2'>
                                        <img src={Msgbox} alt="Msgbox" className='' />
                                        <a href='' onClick={() => setshow(!show)} className='ff_inter fw-medium fs_16 text-white opacity_8 mb-2 d-inline-block nav_link position-relative'>juegosexclusivos@gmail.com</a>
                                    </li>
                                    <li className='d-flex align-items-center gap-2'>
                                        <Teliphn />
                                        <a href='' onClick={() => setshow(!show)} className='ff_inter fw-medium fs_16 text-white opacity_8 mb-2 pt-1 d-inline-block nav_link position-relative'>(101)342-7873</a>
                                    </li>
                                </ul>
                            </Col>

                        </div>
                    </Col>
                </Row>
            </Container>
            <div className='Footer_line'></div>
            <p className='ff_inter fw-medium text-white opacity_8 text-center fs_16 m-0 py-4'>© Juegos exclusivos - Todos los derechos reservados 2023</p>
        </div>
    )
}

export default Footer
