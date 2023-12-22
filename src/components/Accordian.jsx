import React from 'react';
import { Container } from 'react-bootstrap';

function Accordian() {
    return (
        <div className='pt-lg-5 pb-5 mt-lg-5 mb-md-5'>
            <Container className='d-flex justify-content-center align-items-center flex-column pt-lg-5 pb-lg-5'>
                <h3 className='ff_anton fs_48 fw-normal text-white ff_anton text-center pb-lg-5 pb-3' data-aos="fade-down">Preguntas más frecuentes</h3>
                <div className='mw_970 w-100'>
                    <div className="accordion w-100" id="accordionExample">
                        <div className="accordion-item" data-aos="fade-down">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button text-white ff_anton fs_20 fw-normal" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                                    aria-controls="collapseOne">
                                    ¿Cuáles son las ventajas de elegir Juegos Exclusivos para mis plataformas de juegos?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show text-white opacity_8"
                                aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body ff_inter fs_16 fw-medium mw_880">
                                    En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item" data-aos="fade-down">
                            <h2 className="accordion-header text-black" id="headingTwo">
                                <button className="accordion-button collapsed text-white ff_anton fs_20 fw-normal"
                                    type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                    aria-expanded="false" aria-controls="collapseTwo">
                                    ¿Cómo garantizan la seguridad de las operaciones en sus juegos?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse text-white opacity_8"
                                aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body ff_inter fs_16 fw-medium mw_880">
                                    En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item" data-aos="fade-down">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed text-white ff_anton fs_20 fw-normal"
                                    type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                    aria-expanded="false" aria-controls="collapseThree">
                                    ¿Cuáles son las opciones de juego disponibles en las versiones Silver, Luxury y Platinum?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse text-white opacity_8"
                                aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body  ff_inter fs_16 fw-medium mw_880">
                                    En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item" data-aos="fade-down">
                            <h2 className="accordion-header" id="headingFour">
                                <button className="accordion-button collapsed text-white ff_anton fs_20 fw-normal"
                                    type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                    aria-expanded="false" aria-controls="collapseFour">
                                    ¿Cuánto tiempo lleva crear una plataforma con Juegos Exclusivos?
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse text-white opacity_8"
                                aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div className="accordion-body  ff_inter fs_16 fw-medium mw_880">
                                    En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item" data-aos="fade-down">
                            <h3 className="accordion-header" id="headingFive">
                                <button className="accordion-button collapsed text-white ff_anton fs_20 fw-normal"
                                    type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                    aria-expanded="false" aria-controls="collapseFive">
                                    ¿Qué métodos de pago aceptan?
                                </button>
                            </h3>
                            <div id="collapseFive" className="accordion-collapse collapse text-white opacity_8"
                                aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div className="accordion-body  ff_inter fs_16 fw-medium mw_880">
                                    En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item" data-aos="fade-down">
                            <h3 className="accordion-header" id="headingSix">
                                <button className="accordion-button collapsed text-white ff_anton fs_20 fw-normal"
                                    type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix"
                                    aria-expanded="false" aria-controls="collapseSix">
                                    ¿Puedo probar sus juegos antes de comprometerme?
                                </button>
                            </h3>
                            <div id="collapseSix" className="accordion-collapse collapse text-white opacity_8 "
                                aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                <div className="accordion-body  ff_inter fs_16 fw-medium mw_880">
                                    En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default Accordian
