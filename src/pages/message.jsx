import React from 'react';
import './message.css'

const Message = () => {
    return(
        <>
            <section className="message">
                <div className="mcards">
                    <div className="mcard">
                        <div className="mheading"><h1>Message from the Chairman, ICPCM 2021</h1></div>
                        <div className="mbox-pic-text">
                            <div className="mpic">
                                    <img className="messagepic" src="https://res.cloudinary.com/manjeetdhayal/image/upload/v1628853985/redsea/Anindya_basu_u6yxds.png" alt=""></img>
                                    <h2 className="mpic-text">
                                            <h3 className="mname">Prof. Anidnya Basu</h3>
                                            <p>Chairman ICPCM 2021,</p>
                                            <p>Head of the Department,</p>
                                            <p>Dept. of Metallurgical and Materials Engineering,</p>
                                            <p>National Institute of Technology Rourkela</p></h2>
                            </div>

                            <div className="mtext">The Department of Metallurgical and Materials Engineering has been a flagship Department of National Institute Technology Rourkela. Right from its inception, it provided the academic as well as research support to the emerging steel industries in the country. The department has always had a strong tradition of excellent research activities. The Department is organizing the 3rd International Conference on Processing and Characterization of Materials (ICPCM 2021) on 07-08 December 2021. Like previous years, I am sure the participants will have a fruitful discussion and valuable interactions, which will be beneficial for their research. On behalf of the organizing committee of this conference, I would like to welcome all the delegates and participants to ICPCM 2021. I also express my sincere gratitude to all the participants who are here to present their research work at the ICPCM 2021.</div>
                        </div>
                    </div>

                    <div className="mcard">
                        <div className="mheading"><h1>Message from the Convener, ICPCM 2021</h1></div>
                        <div className="mbox-pic-text">
                            <div className="mpic">
                                    <img className="messagepic" src="https://res.cloudinary.com/manjeetdhayal/image/upload/v1628853992/redsea/Archana_Mallick_qsyxhh.png" alt=""></img>
                                    <h2 className="mpic-text">
                                            <h3 className="mname">Prof. Archana Mallik</h3>
                                            <p>Convener, ICPCM 2021,</p>
                                            <p>Associate Professor,</p>
                                            <p>Dept. of Metallurgical and Materials Engineering,</p>
                                            <p>National Institute of Technology Rourkela</p></h2>
                            </div>

                            <div className="mtext"> <p>It gives me an immense pleasure to welcome you all to the 3rd International Conference on Processing and Characterization of Materials (ICPCM 2021) and 11th National Conference on Processing and Characterization of Materials organized by the Department of Metallurgical and Materials Engineering, National Institute of Technology Rourkela from 07-08 December 2021. The purpose of this conference is to bring recent developments in materials processing and characterization in the Indian context. The conference will provide a platform for the interaction and exchange of ideas among the scientists, practicing engineers and young researchers from various academic institutions, research laboratories and industries from all over India and abroad engaged in frontiers of processing and characterization of conventional as well as advanced materials. The organizers of the conference received kind consents from eminent researchers and scientists for delivering keynote addresses in the event. I would like to express my sincere gratitude to all the participants and delegates for attending the ICPCM 2021. </p></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Message;