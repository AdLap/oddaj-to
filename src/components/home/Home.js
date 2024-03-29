import React from 'react'
import HomeAboutUs from './about/HomeAboutUs'
import HomeContact from './contact/HomeContact'
import HomeFooter from './footer/HomeFooter'
import HomeFourSteps from './steps/HomeFourSteps'
import HomeHeader from './header/HomeHeader'
import HomeMainSection from './main/HomeMainSection'
import HomeThreeColumns from './threeColumns/HomeThreeColumns'
import HomeWhoWeHelp from './organizations/HomeWhoWeHelp'

const Home = () => {
	return (
		<>
			<HomeHeader />
			<HomeMainSection />
			<HomeThreeColumns />
			<HomeFourSteps />
			<HomeAboutUs />
			<HomeWhoWeHelp />
			<HomeContact />
			<HomeFooter />
		</>
	)
}

export default Home
