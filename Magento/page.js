import React from 'react';
import MagentoSection from './home';
import MagentoServices from './mservices'
import MagentoFeatures from './mchoose';
import MagentoDevelopmentTimeline from './mtimeline';
import InsightSection from '../Graphics/insight';
import Footer from '../Company/footer';

const page = () => {
  return (
    <div>
        <MagentoSection/>
      <MagentoServices/>
      <MagentoFeatures/>
      <MagentoDevelopmentTimeline/>
      <InsightSection/>
      <Footer/>
    </div>
  )
}

export default page
