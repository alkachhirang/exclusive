import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Buttonline from '../assets/images/png/button-img.png';
import Casino from '../assets/images/png/casino.png';

function Elegirnos() {
    return (
        <div id='elegirnos' className='atributos_bg_img'>
            <Container>
                <Row className='py_elegirnos align-items-center justify-content-center'>
                    <Col lg={6} className='col-11' data-aos="fade-right">
                        <h3 className='text-black ff_anton fs_48 fw-normal m-0 pb-3'>Por qué elegirnos</h3>
                        <p className='ff_inter fw-medium fs_16 text-black opacity_8 mw_526 m-0 pb-lg-4 pb-2'>Con Exclusive Games tenés Exclusivos beneficios. Te reintegramos todo lo invertido en fichas en la moneda que elijas. En Exclusive Games siempre sumamos nuevos juegos. Juegos crash, los juegos interactivos que más pide la gente. Con Exclusive Games empezás a ganar ya! Creamos tu plataforma en solo 2 semanas.</p>
                        <div className='mt-lg-4 mt-2 position-relative cursor_pointer btn_common tr_linear d-inline-flex justify-content-center align-items-center'>
                            <button className='comman_btn text-black ff_inter fs_16 fw-bold text-nowrap border-0'>Mostrar más</button>
                            <img src={Buttonline} alt="Buttonline" className='position-absolute left_3 bottom_13' />
                        </div>
                    </Col>
                    <Col lg={6} className='d-flex justify-content-end col-11 pt-4 pt-md-5 pt-lg-0' data-aos="fade-left">
                        <img src={Casino} alt="Casino" className='border_radius_16 w-100 mw_558 img_hov1 cursor_pointer' />
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Elegirnos
