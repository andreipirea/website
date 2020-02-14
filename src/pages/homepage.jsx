import React from 'react';
import './homepage.styles.scss'
import HeroImage from '../components/heroimage/HeroImage'
import DescriptionSection from '../components/DescriptionSection/DescriptionSection'
import DividerSection from '../components/DividerSection/DividerSection'
import FullWidthTabs from '../components/Tabs/Tabs'
import Footer from '../components/Footer/Footer'
import Contact from '../components/Contact/Contact'
import NavBar from '../components/navbar/Navbar'






const HomePage = () => {
  

  return (
    <div>
      <NavBar />
      <HeroImage/>
      <DescriptionSection/>
      <DividerSection
        class='divider-section'
      />
      {/* <TitlebarGridList/> */}
      {/* <CarouselSection/> */}
      <FullWidthTabs/>
      <DividerSection
        class='divider-section2'
      />
      <Contact/>
      <Footer/>
    </div>
  )
}

export default HomePage