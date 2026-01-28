import styled from "styled-components";
import logo from "../../public/logo.webp";

const Navbar = () => {
  return (
    <Contenedor>
      <LogoContenedor>
        {/* <Logo src={logo} alt="logo" /> */}
        <LogoFondo/>
      </LogoContenedor>
      <BotonContenedor>
        <Boton href="#">Home</Boton>
        <Boton href="#">Acerca de Nosotros</Boton>
        <Boton href="#">Servicios</Boton>
        <Boton href="#">Contacto</Boton>
      </BotonContenedor>
    </Contenedor>
  );
};
export default Navbar;

const Contenedor = styled.div`
  background-color: #101111;
  color: #f3f0f0;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
`;

const Boton = styled.a`
  color: whitesmoke;
  font-size: 1.5rem;
  text-decoration: none;
  margin: 0 10px;
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

// const Logo = styled.img`
//   width: 3rem;
//   height: 3rem;
//   `

const LogoFondo = styled.div`
width: 4rem;
height: 4rem;
background-image: url(${logo});
background-size:cover;
background-position: center;
background-repeat: no-repeat;
`