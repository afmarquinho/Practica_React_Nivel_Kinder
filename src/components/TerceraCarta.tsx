import { styled } from "styled-components";

export const TerceraCarta = () => {
    return (
        <Contenedor>
            <ContenedorInformacion>
                <Titulo>Conviértete en un experto</Titulo>
                <Informacion>
                    Los programas combinan múltiples cursos para ofrecer una experiencia
                    de aprendizaje más profunda que te ayudará a desarrollar tus habilidades.
                </Informacion>
                <SegundoButton>Explora todos los programas</SegundoButton>
            </ContenedorInformacion>

            <Descripcion>
                “El programa contó con instructores apasionados y expertos.
                Los materiales de capacitación fueron de alta calidad y la
                dificultad fue la adecuada.”
            </Descripcion>
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
    margin-bottom: 16px;
`;

const Informacion = styled.p`
    font-size: 1.3rem;
    color: #ffffff;
    margin-bottom: 30px;
    line-height: 1.5;
`;

const SegundoButton = styled.button`
    background-color: #f07349;
    color: white;
    border: none;
    padding: 12px 22px;
    border-radius: 999px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: #ffffff;
        color: #fc7649;
        border: 1px solid #fc7649;
    }
`;

const Descripcion = styled.p`
    width: 45%;
    font-size: 2.4rem;
    color: #ffffff;
    line-height: 1.4;
    opacity: 0.9;
`;
