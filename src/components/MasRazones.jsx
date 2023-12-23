import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sevenimg from '../assets/images/png/seven-img.png';
import { Greentick, Light } from "./IconImg";
import { Clients } from "./IconImg";
import { Divisas } from "./IconImg";
import Silvercircle from '../assets/images/png/silver_circle-img.png';
import NavbtnLine from '../assets/images/png/Nav-btn-line.png';
import Diceimg from '../assets/images/png/card-dice-img.png';
import Buttonline from '../assets/images/png/button-img.png';
import Dice from '../assets/images/png/dice-img.png';
import Redcard1 from '../assets/images/png/red-card-1.png';
import Redcard2 from '../assets/images/png/red-card-2.png';
import Greencircle from '../assets/images/png/green-circle.png';
import Silvershadow from '../assets/images/png/silvershadow.png';
function MasRazones() {
    return (
        <div>
            <Container className='pt-5 mt-lg-5 pb-5 position-relative'>
                <div className='razon_circle1 common_circle '></div>
                <div className='razon_circle2 common_circle '></div>
                <div className='razon_circle3 common_circle '></div>
                <div className='jackpot_circle1 common_circle'></div>
                <Row className=''>
                    <Col lg={6} className='col-11' data-aos="fade-right">
                        <img src={Sevenimg} alt="Sevenimg" className='border_radius_16 w-100 mw_558 h-100 object-fit-cover' />
                    </Col>
                    <Col lg={6} className='col-11 pt-4 pt-lg-0' data-aos="fade-left">
                        <h3 className='text-white fs_48 ff_anton fw-normal pb-xl-5 pb-4 m-0 text-lg-start text-center'>Más razones para elegirnos</h3>
                        <div className="razon_box curser_pointer mw_374">
                            <div className="razon_content d-flex">
                                <Light />
                                <div>
                                    <p className=" ff_anton fw-normal fs_32 text-white mb-0">
                                        200
                                    </p>
                                    <p className=" ff_inter text-white fs_16 fw-medium">
                                        Páginas creadas
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="razon_box curser_pointer mw_374">
                            <div className="razon_content d-flex">
                                <Clients />
                                <div>
                                    <p className=" ff_anton fw-normal fs_32 text-white mb-0">
                                        98%
                                    </p>
                                    <p className=" ff_inter text-white fs_16 fw-medium">
                                        Clientes Satisfechas
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="razon_box curser_pointer mw_374">
                            <div className="razon_content d-flex">
                                <Divisas />
                                <div>
                                    <p className=" ff_anton fw-normal fs_32 text-white mb-0">
                                        200
                                    </p>
                                    <p className=" ff_inter text-white fs_16 fw-medium">
                                        Divisas Disponibles
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className='pt-5 pb-5'>
                <h3 className='text-white ff_anton fw-normal fs_48 text-center m-0 pb-3' data-aos="fade-down">Nuestras ofertas</h3>
                <p className='ff_inter text-white text-center fs_16 fw-medium m-0 pb-5' data-aos="fade-down">Te ofrecemos las mejores experiencias de juegos para tus clientes.</p>
                <div className='silver_box py-5 px-md-5 px-3  position-relative '>
                    <div className='razon_circle d-none d-xl-block'></div>
                    <Row className='align-items-center justify-content-center'>
                        <Col xl={6} className='col-11 d-flex justify-content-center position-relative' data-aos="fade-right">
                            <img src={Silvercircle} alt="Silvercircle" className='position-relative z-2 w-100' />
                            <img src={ Silvershadow }alt="ShadowImg"className=" position-absolute mw_650 mt-4 silvershadow_img d-xxl-block d-none"
                            />
                        </Col>
                        <Col xl={6} className='col-11 d-flex justify-content-center pt-4 pt-xl-0' data-aos="fade-left">
                            <div>
                                <h4 className='ff_anton fs_32 fw-normal text-white m-0 pb-3'>Silver</h4>
                                <p className='ff_inter fs_16 fw-medium text-white mw_401 m-0 pb-4 opacity_8'>Diseño predeterminado, atractivo y fácil de navegar, tecnología HTLM5.</p>
                                <h3 className='ff_anton fs_48 fw-normal text-white m-0 pt-2 pb-3'>$5000</h3>
                                <div className='d-flex align-items-center gap-2 pb-2'>
                                    <Greentick />
                                    <p className='ff_inter fs_16 fw-medium text-white m-0 mw_387 opacity_8'>Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas, Cargas manuales</p>
                                </div>
                                <div className='d-flex align-items-center gap-2 pb-2 pt-1'>
                                    <Greentick />
                                    <p className='ff_inter fs_16 fw-medium text-white m-0 mw_387 opacity_8'>Control de RTP (controlás qué porcentaje pagar)</p>
                                </div>
                                <div className='d-flex align-items-center gap-2 pb-2 pt-1'>
                                    <Greentick />
                                    <p className='ff_inter fs_16 fw-medium text-white m-0 mw_387 opacity_8'>Bonos Editables, Happy Hours, Jackpots, Códigos Promocionales Regalo</p>
                                </div>
                                <div className='d-flex align-items-center gap-2 pb-2 pt-1'>
                                    <Greentick />
                                    <p className='ff_inter fs_16 fw-medium text-white m-0 mw_387 opacity_8'>Aplicación para Android y Windows de regalo.</p>
                                </div>
                                <div className='d-flex align-items-center gap-2 pt-1'>
                                    <Greentick />
                                    <p className='ff_inter fs_16 fw-medium text-white m-0 mw_387 opacity_8'>Tiempo de creación 2 a 3 semanas</p>
                                </div>
                                <div className='mt-4 position-relative cursor_pointer d-inline-flex justify-content-center align-items-center'>
                                    <button className='nav_btn text-white ff_inter fs_16 fw-bold text-nowrap bg-transparent'>Comprar ahora</button>
                                    <img src={NavbtnLine} alt="NavbtnLine" className='position-absolute left_3 bottom_13' />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='razon_bg_img my_64'>
                    <div className='silver_box mt-2 py-5 px-md-5 px-3 mt-4 mt-md-0  position-relative'>
                        <img src={Dice} alt="Dice" className='position-absolute dice d-none d-md-block' />
                        <img src={Redcard1} alt="Redcard1" className='position-absolute red_card1 d-none d-xl-block' />
                        <img src={Redcard2} alt="Redcard2" className='position-absolute right_14 d-none d-xl-block' />
                        <img src={Greencircle} alt="Greencircle" className='position-absolute green_circle d-none d-xl-block' />
                        <div className='d-flex justify-content-center align-items-center flex-column' data-aos="fade-down">
                            <h4 className='ff_anton fs_32 fw-normal text-white m-0 pb-3'>Luxury</h4>
                            <p className='ff_inter fs_16 fw-medium text-white mw_401 m-0 pb-4 opacity_8 text-center'>lleva tu experiencia de juego al siguiente nivel. Con todas las características de la versión Silver y la potencia adicional de la tecnología React .</p>
                            <h3 className='ff_anton fs_48 fw-normal text-white m-0 pt-2 pb-3'>$9000</h3>
                            <div>
                                <div className='d-flex align-items-center gap-2 pb-2'>
                                    <Greentick />
                                    <p className='ff_inter fs_16 fw-medium text-white m-0 mw_387 opacity_8'>Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas, Cargas manuales</p>
                                </div>
                                <div className='d-flex align-items-center gap-2 pb-2 pt-1'>
                                    <Greentick />
                                    <p className='ff_inter fs_16 fw-medium text-white m-0 mw_387 opacity_8'>Control de RTP (controlás qué porcentaje pagar)</p>
                                </div>
                                <div className='d-flex align-items-center gap-2 pb-2 pt-1'>
                                    <Greentick />
                                    <p className='ff_inter fs_16 fw-medium text-white m-0 mw_387 opacity_8'>Bonos Editables, Happy Hours, Jackpots, Códigos Promocionales Regalo</p>
                                </div>
                                <div className='d-flex align-items-center gap-2 pb-2 pt-1'>
                                    <Greentick />
                                    <p className='ff_inter fs_16 fw-medium text-white m-0 mw_387 opacity_8'>Aplicación para Android y Windows de regalo.</p>
                                </div>
                                <div className='d-flex align-items-center gap-2 pt-1'>
                                    <Greentick />
                                    <p className='ff_inter fs_16 fw-medium text-white m-0 mw_387 opacity_8'>Tiempo de creación 2 a 3 semanas</p>
                                </div>
                            </div>
                            <div className='mt-4 position-relative cursor_pointer btn_common tr_linear d-inline-flex justify-content-center align-items-center'>
                                <button className='comman_btn text-black ff_inter fs_16 fw-bold text-nowrap border-0'>Comprar ahora</button>
                                <img src={Buttonline} alt="Buttonline" className='position-absolute left_3 bottom_13' />
                            </div>
                        </div>

                    </div>
                </div>
                <div className='silver_box py-5 px-md-5 px-3 position-relative mt-4 mt-md-0'>
                    <div className='dice_circle d-none d-xl-block'></div>
                    <Row className='align-items-center justify-content-center py-4'>
                        <Col xl={6} className='col-11 d-flex justify-content-center order-xl-1 order-2 pt-5 pt-xl-0' data-aos="fade-right">
                            <div>
                                <h4 className='ff_anton fs_32 fw-normal text-white m-0 pb-3'>Platinum</h4>
                                <p className='ff_inter fs_16 fw-medium text-white mw_401 m-0 pb-4 opacity_8'>Diseño predeterminado, atractivo y fácil de navegar, tecnología HTLM5.</p>
                                <h3 className='ff_anton fs_48 fw-normal text-white m-0 pt-2 pb-3'>Consultar precio</h3>
                                <div className='d-flex align-items-center gap-2 pb-2'>
                                    <Greentick />
                                    <p className='ff_inter fs_16 fw-medium text-white m-0 mw_387 opacity_8'>Personalizable</p>
                                </div>
                                <div className='mt-4 position-relative cursor_pointer d-inline-flex justify-content-center align-items-center'>
                                    <button className='nav_btn text-white ff_inter fs_16 fw-bold text-nowrap bg-transparent'>Comprar ahora</button>
                                    <img src={NavbtnLine} alt="NavbtnLine" className='position-absolute left_3 bottom_13' />
                                </div>
                            </div>
                        </Col>
                        <Col xl={6} className='col-11 d-flex justify-content-center order-xl-2 order-1' data-aos="fade-left">
                            <img src={Diceimg} alt="Diceimg" className='position-relative z-2 w-100' />
                        </Col>
                    </Row>

                </div>
            </Container>
        </div>
    )
}

export default MasRazones
