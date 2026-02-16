import { useState } from "react";
import styled from "styled-components";

import {HeroCarousel } from "../HeroCarousel";
import {SegundaCarta} from "../SegundaCarta";
import {TerceraCarta} from "../TerceraCarta";
import {CuartaCarta} from "../CuartaCarta";
import {QuintaCarta} from "../QuintaCarta";

export default function Carousel() {
const [index, setIndex] = useState(0);

const next = () =>
    setIndex(prev => (prev + 1) %cards.length);

const prev = () =>
    setIndex(prev => (prev - 1 + cards.length) % cards.length);

    return (
        <CarouselWrapper>
        <Track index={index}>
            {cards.map((card, i) => (
            <Slide key={i}>
                {card.component}
            </Slide>
            ))}
        </Track>

        {/* Barra inferior con flechas + dots*/}
        <BottomBar>
            <Arrow onClick={prev}></Arrow>

            {cards.map((_, i) => (
            <Dot
                key={i}
                active={i === index}
                onClick={() => setIndex(i)}
            />
            ))}
            <Arrow onClick={next}></Arrow>
        </BottomBar>
        </CarouselWrapper>
    );
}

const CarouselWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
`;

const Track = styled.div`
    display: flex;
    width: 500vw;
    height: 100%;
    transform: translateX(-${props => props.index * 100}vw);
    transition: transform 0.6s ease;
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    flex-shrink: 0;
    display: flex;
`;

const BottomBar= styled.div`
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 12px;
    background:rgb(255, 255, 255);
    padding: 12px 20px;
    border-radius: 30px;
    z-index: 10;
`;

const Arrow =styled.button`
    background:none;
    border:none;
    color: #ffffff73;
    font-size: 2rem;
    cursor: pointer;

    &:hover{
        opacity: 0.7;
    }
`;

const Dot = styled.button`
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    background: ${props => (props.active ? "Orange" : "#0b2e24")};
    transition: background 0.3s;
`;

const cards = [
    { component: <HeroCarousel/> },
    { conponent: <SegundaCarta/>},
    { component: <TerceraCarta/>},
    { component: <CuartaCarta/>},
    { componetn: <QuintaCarta/>}
];