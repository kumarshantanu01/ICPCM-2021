import React from 'react'; 
import styled from 'styled-components';
import Spedata from './SpeakerData';
import "../components/glimpses.scss"



const Section = styled.section`
 width: 100vw; 
 height: fit-content; 
 //background-color: #8a4daf;; 
 margin: 0 auto; 
 //margin-top: 300px;
 background-image: url('https://res.cloudinary.com/manjeetdhayal/image/upload/v1628808126/redsea/frame_bnzmmd.png');
 background-size: cover;
 background-repeat: no-repeat;

`;

const Cardforproject = styled.div`
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr; 
    grid-gap: 10px; 
    width:fit-content;
    margin: auto;
    padding-bottom:20px; 
    //border: 2px solid red;

    @media screen and (max-width: 950px)
    {
        grid-template-columns: 1fr 1fr;
        height: fit-content;
    }

    @media screen and (max-width: 640px)
    {
        grid-template-columns: 1fr;
        height: fit-content;
    }
`;

const Projectcard = styled.div`
  width: 300px; 
  height: 340px; 
  display: flex; 
  //border: solid 2px red; 
  flex-direction: column ;
  justify-content: center; 
  text-align: center; 
  align-items: center;
  
  
`; 

    

const SpekName = styled.h1`
    font-size: 1.5rem; 
    color: black; 
    font-weight: bold;
    margin-top:  5px;
    overflow-y: hidden; 
`;

const Desc = styled.h2`
    font-size: 1rem; 
    color: black; 
    //color: #2B2F50;
    overflow-y: hidden;
    `; 

const Project = () => {
    return (
        <Section> <h1 className="speakers">Speakers</h1>
            <Cardforproject>

                {Spedata.map(element => {

                    return <Projectcard >
                        <img className = "speakers_image" src = {element.imgsrc} alt=""/> 
                        <SpekName> {element.name}</SpekName>
                        <Desc> {element.desc} </Desc>
                        </Projectcard>;
                        

                })}
            </Cardforproject>
        </Section>


    )
}

export default Project;
