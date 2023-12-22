import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Ellosimg1 from '../assets/images/png/ellos-img-1.png';
import Ellosimg2 from '../assets/images/png/ellos-img-2.png';
import Ellosimg3 from '../assets/images/png/ellos-img-3.png';
import Cardbtn from '../assets/images/png/Nav-btn-line.png';

function Ellos() {
    return (
        <div>
            <div className='position-relative'>
                <div className='ellos_circle1 common_circle'></div>
                <Container className='pt-5 mt-md-5 pb-5 mb-md-5'>
                    <h3 className='text-white ff_anton fw-normal fs_48 text-center pb-lg-5 pb-2' data-aos="fade-down">Ellos eligieron apostar con nosotros</h3>
                    <Row className='pt-2 justify-content-center align-items-center pt-md-3 pb-md-3'>
                        <Col lg={4} sm={6} className='col-11 position-relative card_hover pt-4 pt-lg-0' data-aos="zoom-in-down">
                            <div className='position-relative black_layer '>
                                <img src={Ellosimg1} alt="Ellosimg1" className='border_radius_8 w-100' />
                            </div>
                            <div className='position-absolute btn_none top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center'>
                                <div className='mt-4  position-relative cursor_pointer d-inline-flex justify-content-center align-items-center'>
                                    <button className='nav_btn text-white ff_inter fs_16 fw-bold text-nowrap bg-transparent'>Rcasinovip</button>
                                    <img src={Cardbtn} alt="Cardbtn" className='position-absolute left_3 bottom_13' />
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} sm={6} className='col-11 pt-4 pt-lg-0 position-relative card_hover' data-aos="zoom-in-down">
                            <div className='position-relative black_layer '>
                                <img src={Ellosimg2} alt="Ellosimg2" className='border_radius_8 w-100' />
                            </div>
                            <div className='position-absolute btn_none top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center'>
                                <div className='mt-4  position-relative cursor_pointer d-inline-flex justify-content-center align-items-center'>
                                    <button className='nav_btn text-white ff_inter fs_16 fw-bold text-nowrap bg-transparent'>Rcasinovip</button>
                                    <img src={Cardbtn} alt="Cardbtn" className='position-absolute left_3 bottom_13' />
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} sm={6} className='col-11 pt-4 pt-lg-0 position-relative card_hover z-2' data-aos="zoom-in-down">
                            <div className='position-relative black_layer '>
                                <img src={Ellosimg3} alt="Ellosimg3" className='border_radius_8 w-100' />
                            </div>
                            <div className='position-absolute btn_none top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center'>
                                <div className='mt-4  position-relative cursor_pointer d-inline-flex justify-content-center align-items-center'>
                                    <button className='nav_btn text-white ff_inter fs_16 fw-bold text-nowrap bg-transparent'>Rcasinovip</button>
                                    <img src={Cardbtn} alt="Cardbtn" className='position-absolute left_3 bottom_13' />
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className='d-flex justify-content-center align-items-center pt-lg-4 pt-3'>
                        <p className='text-white text-center ff_inter fw-semibold fs_16 mw_863' data-aos="fade-down"><span className='d-lg-block'>Clientes satisfechos confiaron en Exclusive Games y han disfrutado de emocionantes experiencias de juego.</span>
                            <span className='d-lg-block'>Ahora, la próxima apuesta está en tus manos.</span>
                            Elige ganar. Elige exclusive game.</p>
                    </div>
                </Container>
            </div>

        </div>
    )
}

export default Ellos
