import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Pokerimg from '../assets/images/png/poker-img.png';
import { Aprende } from './IconImg';
import Aviator from '../assets/images/png/aviator-img.png';

function NeustraMission() {
    return (
        <div>
            <div id='Misión' className='bg_body position-relative mt_1'>
                <div className='neutra_circle1 common_circle'></div>
                <div className='neutra_circle2 common_circle'></div>
                <div className='neutra_circle3 common_circle'></div>
                <div className='neutra_circle4 common_circle'></div>
                <Container className='py-md-5 custom_container'>
                    <Row className='align-items-center justify-content-center py-5'>
                        <Col lg={6} sm={12} className='col-11 position-relative z-2' data-aos="fade-right">
                            <div>
                                <img src={Pokerimg} alt="Pokerimg" className='w-100 mw_538' />
                            </div>
                            <h3 className='ff_anton fs_48 fw-normal text-white m-0 pt-4 pt-md-5 mt-md-2'>Nuestra Misión</h3>
                            <p className='ff_inter text-white fw-medium fs_16 mw_444 m-0 pt-3 opacity_8'>Nuestra visión es ser líderes indiscutibles en la industria de los juegos de azar y llevar nuestra pasión por el entretenimiento más allá de las fronteras. Imagina un mundo donde la emoción y la diversión no tengan límites, y ese es el mundo que queremos crear contigo.</p>
                            <div className='pt-md-4 pt-2 cursor_pointer'>
                                <Aprende />
                            </div>
                        </Col>
                        <Col lg={6} sm={12} className='col-11 pt-5 pt-lg-0 position-relative z-2 d-flex justify-content-end' data-aos="fade-left">
                            <div>
                                <h3 className='ff_anton fs_48 fw-normal text-white m-0'>Nuestra Misión</h3>
                                <p className='ff_inter text-white fw-medium fs_16 mw_444 m-0 pt-3 opacity_8'>Nuestra misión es simple pero poderosa: proporcionarte la más amplia gama de soluciones de entretenimiento de alta calidad y rentabilidad. Estamos comprometidos a elevar tus expectativas y brindarte experiencias inigualables.</p>
                                <div className='pt-md-4 pt-2 cursor_pointer'>
                                    <Aprende />
                                </div>
                                <div className='pt-md-5 pt-4 mt-md-2'>
                                    <img src={Aviator} alt="Aviator" className='w-100 mw_538' />
                                </div>
                            </div>
                        </Col>

                    </Row>

                </Container>
            </div>
        </div>
    )
}

export default NeustraMission
