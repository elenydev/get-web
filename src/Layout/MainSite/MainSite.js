import React from 'react';
  import MainNav from '../MainNav/MainNav'
  import WhoWeAre from '../WhoWeAre/WhoWeAre'
  import WhyUs from '../WhyUs/WhyUs'
  import WorkingFor from '../WorkingFor/WorkingFor'
  import Recomendations from '../Recomendations/Recomendations'
  import UpcomingEvents from '../UpcomingEvents/UpcomingEvents'
  import Contact from '../Contact/Contact'

const MainSite = () =>{
    return (
        <>

            <MainNav />
          <WhoWeAre />
          <WhyUs/>
          <WorkingFor />
          <Recomendations />
          <UpcomingEvents />
          <Contact />
         
        </>
    )

}

export default MainSite