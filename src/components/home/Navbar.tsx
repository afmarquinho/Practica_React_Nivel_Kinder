import styled from "styled-components";
import logo from "../../../public/logo.webp";
import { ChevronDownIcon, SearchIcon } from "lucide-react";
import { useState, useRef, useEffect } from "react";

// Hooks
// Son funciones nativas de react que te facilitan el codigo y su funcionalidad, y permite que la aplicación tenga cierto comportamiento. Con los hooks se puede por ejemplo manejar estados.... USESTATE
// useRef permitealmacenar referencias a elementos del DOM
// useEffect 

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

  const [busquedaActiva, setBusquedaActiva] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);


useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target as Node)
    ) {
      setBusquedaActiva(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);


  return (
    <NavBar>
      <Contenedor1>
        <LogoFondo />
        <LearnButton arriba={arriba} onMouseEnter={rotarIcono} onMouseLeave={rotarIcono} >
          <span>Learn</span> <ChevronDownIcon size={18} />
        </LearnButton>
        <div ref={searchRef} style={{ display: "flex", gap: "10px" }}>
          <InputContenedor activa={busquedaActiva}>
            <input
              type="search"
              placeholder="What do you want to learn?"
              onFocus={() => setBusquedaActiva(true)}
            />
            {!busquedaActiva && <SearchIcon />}
          </InputContenedor>
          {busquedaActiva && <BotonSearch>Buscar</BotonSearch>}
        </div>

        <InfoContenedor />
      </Contenedor1>
      <Contenedor2>
        <NavButton>
          Para empresas
        </NavButton>
        <NavButton>
          Inicia Sesión
        </NavButton>
        <RegistrateButton >
          Registrate Ahora
        </RegistrateButton>
      </Contenedor2>
    </NavBar>
  );
};

const NavBar = styled.nav`
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
const InputContenedor = styled.div<{ activa: boolean }>`
  border: 1px solid #00262b;
  border-radius: 4px;
  display: flex;
  align-items: center;
  height: 40px;
  width: ${({ activa }) => (activa ? "400px" : "250px")};
  background-color: white;
  padding: 1px 10px;
  transition: all 0.3s ease;

  input {
    width: 100%;
    height: 100%;
    border: none;
    font-size: 18px;
    outline: none;
  }
`;

const BotonSearch = styled.button`
  height: 40px;
  padding: 0 20px;
  background-color: #00262b;
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #004234;
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

const NavButton = styled.button`
  background: none;
  border: none;
  color: #00262b;
  font-weight: 500;
  cursor: pointer;
  border-radius: 999px;
  padding: 10px 10px;

  &:hover {
    background-color: #eeeeee;
  }
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