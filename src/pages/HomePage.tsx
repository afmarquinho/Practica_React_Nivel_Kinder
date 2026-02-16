import styled from "styled-components";
import { CourseCard } from "../components/CourseCard";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import  Carousel from "../components/carousel/Carousel";
import { dataCursos } from "../data/dataCursos";
import { SegundaCarta } from "../components/SegundaCarta";

const HomePage = () => {
    return (
        <div>
        <Navbar />
        <Carousel />
        <SegundaCarta/>
        <CardsContainer>
            {dataCursos.map((curso, index) => {
            return (
                <CourseCard
                key={index}
                img={curso.image}
                imgLogo={curso.logo}
                tituloCurso={curso.tituloCurso}
                descripcion={curso.descripcion}
                tiempo={curso.tiempo}
                />
            );
            })}
        </CardsContainer>

        <Footer />
        </div>
    );
};
export default HomePage;

const CardsContainer = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
`;