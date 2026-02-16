import styled from "styled-components";
import { heroCardsData } from "../data/heroCardData";
import HeroCard from "../components/HeroCard";

export const HeroCarousel = () => {
    return ( 
        <Contenedor>
            <ContenedorInformacion>
                <Titulo>Aprender que te hace avanzar</Titulo>
                <Informacion>Aprende nuevas habilidades y da grandes pasos en tu carrera.</Informacion>
                <SegundoButton>Más información</SegundoButton>
            </ContenedorInformacion>

            <ContenedorCards>
                {heroCardsData.map((card, index) => (
                <HeroCard
                    key={index}
                    titulo={card.titulo}
                    institucion={card.institucion}
                    tiempo={card.tiempo}
                    nivel={card.nivel}
                    img={card.image}
                    imgLogo={card.logo}
                />
                ))}
            </ContenedorCards>
        </Contenedor>
    );
};

const Contenedor = styled.div`
    background: linear-gradient(135deg, #0f3d2e, #0b2e24);
    width: 88%;
    min-height: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 60px 80px;
`;

const ContenedorInformacion = styled.div`
    width: 40%;
`;

const Titulo = styled.h2`
    font-size: 3.5rem;
    color: #ffffff;
    margin-bottom: 20px;
`;

const Informacion = styled.p`
    font-size: 1.3rem;
    color: #ffffff;
    margin-bottom: 30px;
`;

const SegundoButton = styled.button`
    background-color: #f07349;
    color: white;
    border: none;
    padding: 10px 18px;
    border-radius: 999px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        background-color: #ffffff;
        color: #fc7649;
        border: 1px solid #fc7649;
    }
`;

const ContenedorCards = styled.div`
    color: #00262b;
    border-radius: 10px;
    display: flex;
    gap: 24px;
`;

