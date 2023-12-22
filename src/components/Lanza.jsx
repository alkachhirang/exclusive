import React from 'react';
import { Container } from 'react-bootstrap';
import Buttonline from '../assets/images/png/button-img.png';
import Lanzoright from '../assets/images/png/lanza-right-img.png';
import Lanzoleft from '../assets/images/png/lanza-left-img.png';

function Lanza() {
    return (
        <div className='pb-lg-5'>
            <Container className='pb-5 mb-md-5'>
                <div className='lanza_box position-relative jackpot_wave'>
                    <img src={Lanzoright} alt="Lanzoright" className='position-absolute end-0 bottom-0 border_radius_16 jackpot_wave d-none d-md-block' />
                    <img src={Lanzoleft} alt="Lanzoleft" className='position-absolute start-0 bottom-0 border_radius_16 jackpot_wave d-none d-md-block' />
                    <div className='d-flex justify-content-center align-items-center flex-column py_lanzo'>
                        <h4 className='ff_anton fs_32 text-white fw-normal text-center' data-aos="fade-down">Lanza tu propia plataforma en sólo 2 semanas</h4>
                        <div className='mt-4 position-relative cursor_pointer d-inline-flex justify-content-center align-items-center' data-aos="fade-down">
                            <button className='comman_btn text-black ff_inter fs_16 fw-bold text-nowrap border-0'>Mostrar más</button>
                            <img src={Buttonline} alt="Buttonline" className='position-absolute left_3 bottom_13' />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Lanza
