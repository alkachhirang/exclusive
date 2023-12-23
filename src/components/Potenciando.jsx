import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Potenciandoimg from '../assets/images/png/potenciando-img.png';
import { Greentick } from './IconImg';
import Cardbtn from '../assets/images/png/Nav-btn-line.png';
import Ezugi from '../assets/images/png/ezugi.png';
import Roulette from '../assets/images/png/roulete.png';
import Livebetting from '../assets/images/png/live-betting.png';
import Jackpotwave1 from '../assets/images/png/jackpot-box-img-1.png';
import Jackpotwave2 from '../assets/images/png/jackpot-box-img-2.png';
function Potenciando() {
    return (
        <div className='jackpot_bg_img pb-5 position-relative'>
            <div className='jackpot_circle1 common_circle'></div>
            <div className='jackpot_circle2 common_circle'></div>
            <Container id='Ofertas' className='pt_5 mt-5 pb-5 mb-md-5 mb-lg-0'>
                <Row className='align-items-center justify-content-center'>
                    <Col lg={6} sm={12} className='col-11' data-aos="fade-up-right">
                        <img src={Potenciandoimg} alt="Potenciandoimg" className='border_radius_16 w-100 mw_558 img_hov cursor_pointer' />
                    </Col>
                    <Col lg={6} sm={12} className='col-11 pt-4 pt-lg-0 mb-4 mb-lg-0' data-aos="fade-up-left">
                        <h3 className='ff_anton text-white fw-normal fs_48 m-0'>Potenciando sus elecciones</h3>
                        <p className='ff_inter fw-medium text-white fs_16 opacity_8 m-0 pt-3'>Con Exclusive Game lo mejor está de tu lado.</p>
                        <div className='d-flex align-items-center gap-2 pt-lg-4 pt-3'>
                            <Greentick />
                            <p className='m-0 ff_inter text-white opacity_8 fs_16 fw-medium'>Tecnología HTML5</p>
                        </div>
                        <div className='d-flex align-items-center gap-2 pt-lg-3 pt-2'>
                            <Greentick />
                            <p className='m-0 ff_inter text-white opacity_8 fs_16 fw-medium'>Versión PC y móvil</p>
                        </div>
                        <div className='d-flex align-items-center gap-2 pt-lg-3 pt-2'>
                            <Greentick />
                            <p className='m-0 ff_inter text-white opacity_8 fs_16 fw-medium'>Control de RTP (controlás qué porcentaje pagar)</p>
                        </div>
                        <div className='d-flex align-items-center gap-2 pt-lg-3 pt-2'>
                            <Greentick />
                            <p className='m-0 ff_inter text-white opacity_8 fs_16 fw-medium'>Bonos editables, happy hours, Jackpots, códigos  promocionales.</p>
                        </div>
                        <div className='d-flex align-items-center gap-2 pt-lg-3 pt-2'>
                            <Greentick />
                            <p className='m-0 ff_inter text-white opacity_8 fs_16 fw-medium'>Aplicación para android y windows de regalo.</p>
                        </div>
                        <p className='m-0 ff_inter text-white opacity_8 fw-medium pt-4 fs_16'>Te reintegramos todo lo invertido en fichas en la moneda que elijas.</p>

                    </Col>
                    <div className='py_150'>
                        <div className='jakpot_box mw_1043 py_96 py_65 mt-5 mt-lg-0 position-relative jackpot_wave'>
                            <img src={Jackpotwave1} alt="Jackpotwave1" className='position-absolute start-0 top-0 position-relative z-2 jackpot_wave' />
                            <img src={Jackpotwave2} alt="Jackpotwave2" className='position-absolute end-0 bottom-0 position-relative z-2 jackpot_wave' />
                            <div className='d-flex justify-content-center align-items-center'>
                                <p className='text-white mw_520 ff_anton fw-normal fs_48 text-center' data-aos="fade-down">lanza tu propia plataforma en sólo 2 semanas</p>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
            <Container  className='pb-md-5'>
                <h3 className='text-white ff_anton fs_48 fw-normal text-center pb-md-5 pb-4'>Juegos en vivo</h3>
                <Row className='pt-2 justify-content-center align-items-center'>
                    <Col lg={4} sm={6} className='col-11 position-relative card_hover' data-aos="zoom-in">
                        <div className='position-relative black_layer'>
                            <img src={Ezugi} alt="Ezugi" className='border_radius_8 w-100' />
                        </div>
                        <div className='position-absolute btn_none top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center'>
                            <div className='mt-4  position-relative cursor_pointer d-inline-flex justify-content-center align-items-center'>
                                <button className='nav_btn text-white ff_inter fs_16 fw-bold text-nowrap bg-transparent'>Reproducir ahora</button>
                                <img src={Cardbtn} alt="Cardbtn" className='position-absolute left_3 bottom_13' />
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={6} className='col-11 pt-4 pt-sm-0 position-relative card_hover' data-aos="zoom-in">
                        <div className='position-relative black_layer '>
                            <img src={Roulette} alt="Roulette" className='border_radius_8 w-100' />
                        </div>
                        <div className='position-absolute btn_none top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center'>
                            <div className='mt-4  position-relative cursor_pointer d-inline-flex justify-content-center align-items-center'>
                                <button className='nav_btn text-white ff_inter fs_16 fw-bold text-nowrap bg-transparent'>Reproducir ahora</button>
                                <img src={Cardbtn} alt="Cardbtn" className='position-absolute left_3 bottom_13' />
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={6} className='col-11 pt-4 pt-lg-0 position-relative card_hover z-2' data-aos="zoom-in">
                        <div className='position-relative black_layer '>
                            <img src={Livebetting} alt="Livebetting" className='border_radius_8 w-100' />
                        </div>
                        <div className='position-absolute btn_none top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center'>
                            <div className='mt-4  position-relative cursor_pointer d-inline-flex justify-content-center align-items-center'>
                                <button className='nav_btn text-white ff_inter fs_16 fw-bold text-nowrap bg-transparent'>Reproducir ahora</button>
                                <img src={Cardbtn} alt="Cardbtn" className='position-absolute left_3 bottom_13' />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Potenciando
