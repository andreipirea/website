import React from 'react';
import './homepage.styles.scss'
import HeroImage from '../components/heroimage/HeroImage'
import DescriptionSection from '../components/DescriptionSection/DescriptionSection'
import DividerSection from '../components/DividerSection/DividerSection'
import CarouselSection from '../components/Carousel/Carousel'
import FullWidthTabs from '../components/Tabs/Tabs'
import Footer from '../components/Footer/Footer'
import TitlebarGridList from '../components/Galery/Galery'
import Contact from '../components/Contact/Contact'





const HomePage = () => {
  

  return (
    <div>
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