import Button from "../Components/Button"
import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import { shoes,statistics } from "../constants"
import ShoeCard from "../Components/ShoeCard"
import React, { useState } from "react"
const Hero = () => {
 const [curimg,setcurimg] = React.useState(bigShoe1)
 const handlechange = (imgurl) =>{
     setcurimg(imgurl)
 }
  return (
    <section
     id = "home"
     className="flex xl:flex-row flex-col max-container justify-center min-h-screen gap-10 w-full">
     <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
      <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
      <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] font-bold">
        <span className="relative z-10 pr-10 ">The New Arrival</span>
        <br />
        <span className="text-coral-red mt-3">Nike</span>
        Shoes
      </h1>
      <p className="font-montserrat text-slate-gray text-lg mt-6 mb-14 leading-8 sm:max-w-sm ">Discover stylish Nike arrrivals , Quality comfort, and innovation for your active life.</p>
      <Button label="Shop now" iconurl={arrowRight}/>
      <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
        {statistics.map((stat,index)=>(
          <div key={index}>
            <p className="text-4xl font-palanquin font-bold max-sm:text-3xl">{stat.value}</p>
            <p className="font-montserrat leading-7">{stat.label}</p>
          </div>
        ))}
      </div>
      </div>

      <div className="flex relative justify-center items-center bg-primary bg-hero bg-cover bg-center">
        <img src={curimg} alt="" height={500} width={610} className=" object-contain relative" />
        <div className="absolute flex gap-4 -bottom-[5%]">
        {shoes.map((shoe)=>(
          <div className = "" key={shoe}>
            <ShoeCard imgurl={shoe.bigShoe} change={handlechange}  bigshoeimg={curimg}/>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}

export default Hero