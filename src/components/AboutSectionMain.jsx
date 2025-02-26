import React from 'react'
import NewspaperHeader from './NewspaperHeader';
import Header from './Header';
import About from './About';
import Prizes from './Prizes';
import Theme from './Theme';
import Schedule from './Schedule';
import CommunityPartner from './CommunityPartner';


const AboutSectionMain = () => {
  return (
    <div>
      {/* <NewspaperHeader /> */}
      <Header />
      <About />
      <Prizes/>
      <Theme />
      <Schedule />
      <CommunityPartner />
    </div>
  )
}

export default AboutSectionMain