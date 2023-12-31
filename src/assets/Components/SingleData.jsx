import React from "react";
import { useLocation } from "react-router";
import {  FaMailBulk, FaMapMarker, FaPhoneAlt } from "react-icons/fa";

const SingleData = () => {
  const location = useLocation();
  console.log(location.state);
   
  const mainData = location.state ;
  return (
    <>
    <main className="profile-page">
    <section className="relative block h-[500px]">
      <div className="absolute top-0 w-full h-full bg-center bg-cover bgimage">
        <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
      </div>
      <div className="top-auto bottom-0 left-0 right-0 w-[70px] absolute pointer-events-none overflow-hidden h-[70px] " style={{transform: "translateZ(0px)"}}>
        <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
          <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </section>
    <section className="relative py-16 bg-blueGray-200">
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-[25%] px-4 lg:order-2 flex justify-center">
              
                  <img alt="..." src='./profile.jpg' className="shadow-xl rounded-full  align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 w-[150px] h-[150px]" />
              
              </div>
              <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                <div className="py-6 px-3 mt-32 sm:mt-0">
                  <button className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                    Connect
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4 lg:order-1">
                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                  <div className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{mainData.rollNO}</span><span className="text-sm text-blueGray-400">Roll Number</span>
                  </div>
                  <div className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{mainData.grno}</span><span className="text-sm text-blueGray-400">GR Number</span>
                  </div>
                  <div className="lg:mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{mainData.id}</span><span className="text-sm text-blueGray-400">ID</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 ">
                {mainData.name}
              </h3>
              <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <FaMapMarker className="inline mr-2 mt-[-4px]" />
              {mainData.city}
              </div>
              <div className="mb-2 text-blueGray-600 mt-10  ">
                  <FaMailBulk className="inline mr-2 mt-[-4px]" /> <span >{mainData.email}</span>
              </div>
              <div className="mb-2 text-blueGray-600">
                <FaPhoneAlt  className="inline mr-2 mt-[-4px]" /> <span>{mainData.number}</span>
              </div>
            </div>
            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4">
                  <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                    {mainData.massage}
                     An artist of considerable range, Jenna the name taken by
                    Melbourne-raised, Brooklyn-based Nick Murphy writes,
                    performs and records all of his own music, giving it a
                    warm, intimate feel with a solid groove structure. An
                    artist of considerable range.
                  </p>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </section>
  </main>
  </>
  );
};

export default SingleData;
