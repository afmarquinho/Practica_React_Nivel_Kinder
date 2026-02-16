import styled from "styled-components";

interface HeroCardProps {
    img: string;
    imgLogo: string;
    titulo: string;
    institucion: string;
    tiempo: string;
    nivel: string;
}

const HeroCard = ({img, imgLogo, titulo, institucion, tiempo, nivel,}: HeroCardProps) => {
    return (
        <Card>
        <Badge>Curso</Badge>

        <FotoContenedor>
            <Img src={img} alt={titulo} />
            <Logo src={imgLogo} alt={institucion} />
        </FotoContenedor>

        <h4>{titulo}</h4>
        <span>{institucion}</span>
        <TiempoCurso>{tiempo}</TiempoCurso>
        <Nivel>{nivel}</Nivel>
        </Card>
    );
};

export default HeroCard;

const Card = styled.div`
    width: 280px;
    background-color: #ffffff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding-bottom: 16px;

    h4 {
        margin: 12px 16px 4px;
        font-size: 1.1rem;
    }

    span {
        margin: 0 16px;
        font-size: 0.9rem;
        color: #666;
    }
`;

const Badge = styled.div`
    font-size: 0.9rem;
    background-color: #a5b5b1;
    padding: 8px 16px;
    font-weight: bold;
`;

const FotoContenedor = styled.div`
    width: 100%;
    height: 100px;
    background-color: gray;
    position: relative;
`;

const Img = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
`;

const Logo = styled.img`
    height: 60px;
    width: 100px;
    background-color: white;
    border-radius: 5px;
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 1;
    object-fit: contain;
`;

const TiempoCurso = styled.p`
    margin: 12px 16px 0;
    font-size: 0.85rem;
    color: #aaaaaa;
`;

const Nivel = styled.p`
    margin: 4px 16px 0;
    font-size: 0.7rem;
    color: #aaaaaa;
`;
