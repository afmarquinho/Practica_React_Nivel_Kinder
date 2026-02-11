import styled from "styled-components";
import logo from "../../public/logo.webp";
import { ChevronDownIcon, SearchIcon } from "lucide-react";
import { useState } from "react";

// Hooks
// Son funciones nativas de react que te facilitan el codigo y su funcionalidad, y permite que la aplicación tenga cierto comportamiento. Con los hooks se pued epor ejemplo manejar estados.... USESTATE

export const Navbar = () => {
  
  const [arriba, setArriba] = useState(true);
  const rotarIcono = () => {
    // if (arriba == true) {
    //   setArriba(false)
    // } else {
    //   setArriba(true)
    // }
     setArriba(!arriba);

    
  };

  console.log("Valor del estado: ", arriba)



  return (
    <NavBar>
      <Contenedor1>
        <LogoFondo />
        <LearnButton arriba={arriba} onMouseEnter={rotarIcono} onMouseLeave={rotarIcono} >
          <span>Learn</span> <ChevronDownIcon size={18} />
        </LearnButton>
        <InputContenedor>
          <input
            type="search"
            name="buscar"
            id=""
            placeholder="What do you want to learn?"
          />
          <SearchIcon />
        </InputContenedor>
        <InfoContenedor />
      </Contenedor1>
      <Contenedor2>
        <button>Para empresas</button>
        <button>Inicia Sesión</button>
        <RegistrateButton >
          Registrate Ahora
        </RegistrateButton>
      </Contenedor2>
    </NavBar>
  );
};

const NavBar = styled.nav`
  background-color: whitesmoke;
  color: #00262b;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
`;

const Contenedor1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
`;

const LogoFondo = styled.div`
  width: 4rem;
  height: 4rem;
  background-image: url(${logo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0 20px 0 0;
`;

const LearnButton = styled.button<{ arriba: boolean }>`
  background-color: #00262b;
  border-color: #00262b;
  border-radius: 20px;
  width: 110px;
  height: 40px;
  cursor: pointer;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 14px;
  transition-property: all;
  transition-duration: 0.5s;
  font-size: 16px;

  &:hover {
    background-color: white;
    color: #00262b;
  }

  svg {
    transform: ${({arriba})=>(arriba == true ? "rotate(180deg)": "rotate(0deg)")};
    transition-property:transform;
    transition-duration: 0.5s;
  }
`;
const InputContenedor = styled.div`
  border: 1px solid #848686;
  border-radius: 4px;
  display: flex;
  border-color: #00262b;
  display: flex;
  align-items: center;
  height: 40px;
  width: 250px;
  background-color: white;
  padding: 1px 10px;

  justify-content: space-between input {
    border: none;
    outline: none;
  }
  input {
    width: 100%;
    height: 100%;
    border: none;
    font-size: 18px;
  }

  input:focus {
    outline: none;
  }
`;

const Contenedor2 = styled.div`
  width: 100%;

  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 10px;
`;

const RegistrateButton = styled.button`
  background-color: #ff7b00;
  border-color: #ff7b00;
  border-radius: 20px;
  width: 180px;
  height: 40px;
  cursor: pointer;
  color: white;
  font-weight: bold;
  padding: 0 14px;
  text-align: center;
  font-size: 12px;
  transition-property: all;
  transition-duration: 0.5s;
  box-shadow: none;

  &:hover {
    background-color: white;
    color: #ff7b00;
  }
`;

const InfoContenedor = styled.div`
  font-size: 1.5rem;
`;
