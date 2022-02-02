import React from 'react';
import { Content } from '../components/Content/Content';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import { heroOne, heroTwo, heroThree } from '../data/HeroData';
import Carousel from '../components/Carousel/Carousel';

const Home = () => {
    return (
    <>
        <Hero />
        <Features />
        <Content {...heroOne} />
        <Content {...heroTwo} />
        <Content {...heroThree} />
        <Carousel />
    </>
    )

};

export default Home;
