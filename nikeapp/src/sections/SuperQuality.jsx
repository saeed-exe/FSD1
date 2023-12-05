import Button from "../Components/Button"
import { shoe8 } from "../assets/images"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col w-full max-container">
     <div className="flex flex-col">
      <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
       We Provide You 
        <span className="text-coral-red"> Super</span>
        <span className="text-coral-red"> Quality</span> Shoes
      </h2>
      <p className="  mt-4 lg:max-w-lg info-text ">Discover stylish Nike arrrivals , Quality comfort, and innovation for your active life.</p>
      <p>Our dedication to detail and excellence ensures a touch of elegance.</p>
      <div className="mt-11">
      <Button label="View Details" />
      </div>
     </div>

     <div className="flex justify-center items-center ">
     <img src={shoe8} alt={shoe8} width={570} height={522} className="object-contain" />
     </div>


    </section>
  )
}

export default SuperQuality