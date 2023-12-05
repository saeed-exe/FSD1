import { star } from "../assets/icons"
import Button from "./Button"
import { arrowRight } from "../assets/icons"
const ProductCard = ({imgurl,name,price}) => {
  return (
    <div className="flex flex-col w-full">
       <img src={imgurl} alt={name} className="w-[280px] h-[280px]" /> 
    <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-monsterrat text-xl">4.5</p>
    </div>
    <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
    <p className="mt-2 font-semibold text-2xl leading-normal">{price}</p>
    <div className="flex justify-start"><Button label="Shop Now" iconurl={arrowRight}/></div>
    </div>
  )
}

export default ProductCard