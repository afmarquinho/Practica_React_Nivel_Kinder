import styled from "styled-components";


export const CourseCard = ({img, imgLogo,tituloCurso, descripcion, tiempo}) => {
  return (
    <Contenedor>
      {/* Inicio del titulo */}
      <Titulo>Educación Ejecutiva</Titulo>
      {/* Fin del titulo  */}

      {/* Inicio de la foto y logo */}
      <FotoContenedor>

      <Img src={img}/>
        <Logo src={imgLogo}/>
      </FotoContenedor>
      
      {/* Fin de la foto y logo */}

      {/* Inicio del contenido */}
      <InfoContenedor>
        <div>
          <TituloCurso>{tituloCurso}</TituloCurso>
          <Descripcion>{descripcion}</Descripcion>
        </div>
        <TiempoCurso>{tiempo}</TiempoCurso>
      </InfoContenedor>

      {/* Fin del contenido    */}
    </Contenedor>
  );
};

const Contenedor = styled.nav`
  background-color: whitesmoke;
  color: #00262b;
  width: 300px;
  height: 400px;
  border-radius: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: #bdbcbc;
  overflow: hidden;
`;

const Titulo = styled.h1`
  font-size: 1rem;
  text-align: center;
  background-color: #a5b5b1;
  margin: 0;
  padding: 10px 20px;
  text-align: left;
  height: auto;
`;

const FotoContenedor = styled.div`
  width: 100%;
  height: 100px;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 0 20px;
  position: relative
`;
const Img = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
    left:0;
    object-fit:cover
`

const Logo = styled.img`
  height: 60px;
  width: 100px;
  background-color: white;
  border-radius: 5px;
  position: absolute;
  top:10px;
  left:10px;
  z-index: 100;
  object-fit: cover
`;

const InfoContenedor = styled.div`
  padding: 0 20px;
  height: 100%;

  
`;

const TituloCurso = styled.h2`
  margin: 10px 0 5px 0;
  font-size: 1.2rem;
`;

const Descripcion = styled.p`
  margin-bottom: 5px;
  font-size: 1rem;
`;

const TiempoCurso = styled.div`

`;
