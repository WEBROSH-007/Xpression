import React from 'react'
import Carousel from './erpservices'
import ERPProcess from './erpdevelopment'
import ERPModules from './erpmodule'
import ERPContentSection from './home.js'
import ERPTechStack from './erptechstack'
import Solution from './erpsolution'
import DynamicSolutionsHero from './dynamic'
import InsightSection from '../Graphics/insight'
import Footer from '../Company/footer'


const page = () => {
  return (
    <div>
      <ERPContentSection/>
      <Carousel/>
      <ERPModules/>
      <ERPTechStack/>
      <Solution/>
      <ERPProcess/>
      <DynamicSolutionsHero/>
      <InsightSection/>
      <Footer/>
      
      
    </div>
  )
}

export default page
