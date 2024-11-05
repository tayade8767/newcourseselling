/* eslint-disable no-unused-vars */
import React from 'react'
import NavBar from '../components/NavBar';

import SliderBar from '../components/SliderBar';
import CardThamail from '../components/CardThamail';
import Featured from '../components/Featured';
import Why100xDevs from '../components/Why100xDevs';

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
         
          <NavBar className="fixed top-0 w-full z-50 ml-0" />
    
          
          <div className="flex pt-16 gap-4">
           
            <div className="fixed left-0 w-64 h-[calc(100vh-64px)]">
              <SliderBar />
            </div>
            <hr></hr>
    <hr></hr>
    <hr></hr>
    
            
            <div className="flex-1 ml-64 p-2 mt-5 flex-col ">
            <section className=" h-1250 w-750 pt-2 px-5 mb-8">
            <div className="h-full flex flex-col justify-center">
              <CardThamail />
            </div>
          </section>
          <section className=" h-1150 w-750 pt-2 px-5 mb-8">
            <Featured />
          </section>
          {/* <section className=" h-1150 w-750 pt-2 px-5 mb-8">
            <Why100xDevs/>
          </section> */}
            </div>
          </div>
        </div>
  )
}

export default Home
