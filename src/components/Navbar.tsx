import styled from "styled-components";
import logo from "../../public/logo.webp";

export const Navbar = () => {
  return (
    <Contenedor>
      <LogoContenedor>
     
        <LogoFondo/>
        <button>Menu</button>
        <input type="search" name="buscar" id="" />
      </LogoContenedor>
      <InfoContenedor>


      </InfoContenedor>

      <BotonContenedor>
        <button>Para empresas</button>
        <button>Inicia Sesión</button>
        <button>Registrate Ahora</button>

        
      </BotonContenedor>
    </Contenedor>
  );
};


const Contenedor = styled.nav`
  background-color: whitesmoke;
  color: #00262b;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
`;


const BotonContenedor = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #414140;
  width: 100%;
  padding: 10px;
`;

const LogoContenedor = styled.div`
  width: 16rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InfoContenedor = styled.div`
  font-size: 1.5rem;
`;
const LogoFondo = styled.div`
width: 4rem;
height: 4rem;
background-image: url(${logo});
background-size:cover;
background-position: center;
background-repeat: no-repeat;
`