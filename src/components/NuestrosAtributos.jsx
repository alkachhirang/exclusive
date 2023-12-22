import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Inteligencia } from "./IconImg";
import { Proactividad } from "./IconImg";
import { Innovación } from "./IconImg";
import Arrow1 from '../assets/images/png/arrow-1.png';
import Arrow2 from '../assets/images/png/arrow-2.png';
import Slotimg1 from '../assets/images/png/slot-img1.png';
import Slotimg2 from '../assets/images/png/slots-img2.png';
import Slotimg3 from '../assets/images/png/slots-img3.png';
import Slotimg4 from '../assets/images/png/slots-img4.png';
import Slotimg5 from '../assets/images/png/slots-img5.png';
import Slotimg6 from '../assets/images/png/slots-img-6.png';
import Buttonline from '../assets/images/png/button-img.png';
import Cardbtn from '../assets/images/png/Nav-btn-line.png';


function NuestrosAtributos() {
    return (
        <div className='atributos_bg_img position-relative z-2 '>
            <Container className='pt_200 pt_70 pt_45'>
                <h3 className='text-black fs_48 text-capitalize ff_anton fw-normal text-center pb-3' data-aos="fade-down">Nuestros Atributos de Marca</h3>
                <Row className='gap-md-0 gap-sm-5 gap-4 justify-content-lg-between justify-content-center pt-5 position-relative'>
                    <img src={Arrow1} alt="Arrow1" className='position-absolute arrow1 w-100 mw_274 mw_215 d-none d-md-block' />
                    <img src={Arrow2} alt="Arrow2" className='position-absolute arrow2 w-100 mw_274 mw_215 d-none d-lg-block' />
                    <Col lg={4} sm={5} className='d-flex justify-content-lg-start justify-content-center' data-aos="zoom-in-up">
                        <div className='d-flex align-items-center justify-content-center flex-column'>
                            <Inteligencia />
                            <p className='ff_anton fw-normal text-black text-capitalize fs_20 m-0 pt-3'>Inteligencia</p>
                            <p className='text-black ff_inter fw-medium fs_16 mw_263 text-center pt-2'>Comprendemos a la perfección los gustos de las personas y el mundo del gaming.</p>
                        </div>
                    </Col>
                    <Col lg={4} sm={5} className='d-flex justify-content-center' data-aos="zoom-in-up">
                        <div className='d-flex align-items-center justify-content-center flex-column'>
                            <Proactividad />
                            <p className='ff_anton fw-normal text-black text-capitalize fs_20 m-0 pt-3'>Proactividad</p>
                            <p className='text-black ff_inter fw-medium fs_16 mw_263 text-center pt-2'>Somos creadores de cambios que exploran nuevas formas de entretenimiento.</p>
                        </div>
                    </Col>
                    <Col lg={4} sm={6} className='d-flex justify-content-lg-end justify-content-center' data-aos="zoom-in-up">
                        <div className='d-flex align-items-center justify-content-center flex-column'>
                            <Innovación />
                            <p className='ff_anton fw-normal text-black text-capitalize fs_20 m-0 pt-3'>Innovación</p>
                            <p className='text-black ff_inter fw-medium fs_16 mw_263 text-center pt-2'>Pensamos fuera de la caja para estar siempre un paso adelante.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container id='Tragamonedas' className='py_slot d-flex flex-column align-items-center'>
                <div className='d-flex justify-content-center align-items-center flex-column pb-3'>
                    <h3 className='ff_anton text-black fw-normal fs_48 text-center' data-aos="flip-down">Slots</h3>
                    <p className='text-black ff_inter fw-medium fs_16 text-center mw_904' data-aos="flip-down">En Exclusive Games, ofrecemos una selección de más de 600 juegos de los principales desarrolladores, como Aristocrat, Amatic, EGT, Novomatic, IGT, Playtech, Igrosoft y Tom Horn. Nuestro equipo trabaja incansablemente para innovar y ampliar nuestra oferta de experiencias, garantizando la máxima seguridad con operaciones protegidas por cifrado SSL de 256 bits.</p>
                </div>
                <Row className='pt-lg-5 pt-2 justify-content-center align-items-center'>
                    <Col lg={4} sm={6} className='col-11 position-relative card_hover' data-aos="zoom-in-up">
                        <div className='position-relative black_layer '>
                            <img src={Slotimg1} alt="Slotimg1" className='border_radius_8 w-100' />
                        </div>
                        <div className='position-absolute btn_none top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center'>
                            <div className='mt-4  position-relative cursor_pointer d-inline-flex justify-content-center align-items-center'>
                                <button className='nav_btn text-white ff_inter fs_16 fw-bold text-nowrap bg-transparent'>Jugar</button>
                                <img src={Cardbtn} alt="Cardbtn" className='position-absolute left_3 bottom_13' />
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={6} className='col-11 pt-4 pt-sm-0 position-relative card_hover' data-aos="zoom-in-up">
                        <div className='position-relative black_layer '>
                            <img src={Slotimg2} alt="Slotimg2" className='border_radius_8 w-100' />
                        </div>
                        <div className='position-absolute btn_none top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center'>
                            <div className='mt-4  position-relative cursor_pointer d-inline-flex justify-content-center align-items-center'>
                                <button className='nav_btn text-white ff_inter fs_16 fw-bold text-nowrap bg-transparent'>Jugar</button>
                                <img src={Cardbtn} alt="Cardbtn" className='position-absolute left_3 bottom_13' />
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={6} className='pt-4 pt-lg-0 col-11 position-relative card_hover' data-aos="zoom-in-up">
                        <div className='position-relative black_layer '>
                            <img src={Slotimg3} alt="Slotimg3" className='border_radius_8 w-100' />
                        </div>
                        <div className='position-absolute btn_none top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center'>
                            <div className='mt-4  position-relative cursor_pointer d-inline-flex justify-content-center align-items-center'>
                                <button className='nav_btn text-white ff_inter fs_16 fw-bold text-nowrap bg-transparent'>Jugar</button>
                                <img src={Cardbtn} alt="Cardbtn" className='position-absolute left_3 bottom_13' />
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={6} className='pt-4 col-11 position-relative card_hover' data-aos="zoom-in-up">
                        <div className='position-relative black_layer ' >
                            <img src={Slotimg4} alt="Slotimg4" className='border_radius_8 w-100' />
                        </div>
                        <div className='position-absolute btn_none top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center'>
                            <div className='mt-4  position-relative cursor_pointer d-inline-flex justify-content-center align-items-center'>
                                <button className='nav_btn text-white ff_inter fs_16 fw-bold text-nowrap bg-transparent'>Jugar</button>
                                <img src={Cardbtn} alt="Cardbtn" className='position-absolute left_3 bottom_13' />
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={6} className='pt-4 col-11 position-relative card_hover' data-aos="zoom-in-up">
                        <div className='position-relative black_layer '>
                            <img src={Slotimg5} alt="Slotimg5" className='border_radius_8 w-100' />
                        </div>
                        <div className='position-absolute btn_none top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center'>
                            <div className='mt-4  position-relative cursor_pointer d-inline-flex justify-content-center align-items-center'>
                                <button className='nav_btn text-white ff_inter fs_16 fw-bold text-nowrap bg-transparent'>Jugar</button>
                                <img src={Cardbtn} alt="Cardbtn" className='position-absolute left_3 bottom_13' />
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={6} className='pt-4 col-11 position-relative card_hover' data-aos="zoom-in-up">
                        <div className='position-relative black_layer'>
                            <img src={Slotimg6} alt="Slotimg6" className='border_radius_8 w-100' />
                        </div>
                        <div className='position-absolute btn_none top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center'>
                            <div className='mt-4  position-relative cursor_pointer d-inline-flex justify-content-center align-items-center'>
                                <button className='nav_btn text-white ff_inter fs_16 fw-bold text-nowrap bg-transparent'>Jugar</button>
                                <img src={Cardbtn} alt="Cardbtn" className='position-absolute left_3 bottom_13' />
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className='mt-4 position-relative cursor_pointer d-inline-flex justify-content-center align-items-center'>
                    <button className='comman_btn text-black ff_inter fs_16 fw-bold text-nowrap border-0'>Mostrar más</button>
                    <img src={Buttonline} alt="Buttonline" className='position-absolute left_3 bottom_13' />
                </div>

            </Container>
        </div>
    )
}

export default NuestrosAtributos
