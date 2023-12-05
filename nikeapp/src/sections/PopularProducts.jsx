import { products } from "../constants"
import ProductCard from "../Components/ProductCard"
const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5 max-md:gap-3 max-sm:flex max-sm:items-center max-sm:justify-center">
      <h2 className="text-4xl font-palanquin font-bold">Our 
      <span className="font-palanquin text-coral-red">Popular</span> Products</h2>
      <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort , design and value.</p>

      </div>
      <div className="mt-16 grid grid-cols-4 gap-14 max-sm:grid-cols-1">
        {products.map((product)=>(
        <ProductCard key={product.name} imgurl={product.imgURL} name={product.name}/>
        ))}
      </div>

    </section>
  )
}

export default PopularProducts