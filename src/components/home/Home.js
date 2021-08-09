import React from 'react';
import HomeAboutUs from './HomeAboutUs';
import HomeContact from './contact/HomeContact';
import HomeFooter from './HomeFooter';
import HomeFourSteps from './HomeFourSteps';
import HomeHeader from './HomeHeader';
import HomeMainSection from './HomeMainSection';
import HomeTreeColumns from './HomeTreeColumns';
import HomeWhoWeHelp from './organizations/HomeWhoWeHelp';

const Home = () => {
    return (
        <>
            <HomeHeader />
            <HomeMainSection />
            <HomeTreeColumns />
            <HomeFourSteps />
            <HomeAboutUs />
            <HomeWhoWeHelp />
            <HomeContact />
            <HomeFooter />
        </>
    )
}

export default Home;
