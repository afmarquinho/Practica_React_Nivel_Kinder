import { styled } from "styled-components";

export const CuartaCarta = () => {
    return (
        <Contenedor>
            <LadoIzquierdo>
                <Badges>
                    <Badge>Orientado a la carrera</Badge>
                    <Badge>2 - 12 semanas</Badge>
                </Badges>

                <Titulo>Conviértete en un líder</Titulo>

                <Informacion>
                    Conviértete en un líder más efectivo y haz avanzar tu carrera
                    con un curso de Educación Ejecutiva.
                </Informacion>

                <Boton>Explorar Educación Ejecutiva</Boton>
            </LadoIzquierdo>

            <LadoDerecho>
                <Numero>140,000</Numero>
                <TextoDerecho>
                    Profesionales han transformado sus vidas a través de la
                    Educación Ejecutiva.
                </TextoDerecho>
            </LadoDerecho>
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

const LadoIzquierdo = styled.div`
    width: 45%;
`;

const Badges = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
`;

const Badge = styled.span`
    background-color: #dff3ec;
    color: #0b2e24;
    padding: 6px 12px;
    border-radius: 8px;
    font-size: 0.85rem;
    font-weight: 600;
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

const Boton = styled.button`
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

const LadoDerecho = styled.div`
    width: 40%;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const Numero = styled.h3`
    font-size: 4rem;
    font-weight: 700;
`;

const TextoDerecho = styled.p`
    font-size: 1.6rem;
    line-height: 1.4;
`;
