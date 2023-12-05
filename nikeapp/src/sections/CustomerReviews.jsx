import { reviews } from "../constants"
import ReviewCard from "../Components/ReviewCard"
const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
       What Our 
       <span className="text-coral-red">Customers </span>
       Say?
      </h3>
      <p className="info-text m-auto max-w-lg text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. At quos autem nam sit ipsam consequatur maxime cupiditate nemo tempora optio!</p>
      <div className="mt-24 flex justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review)=>(
          <ReviewCard
           key={review.customerName} imgurl={review.imgURL} customerName={review.customerName} rating={review.rating} feedback={review.feedback}
          />
        ))}
      </div>
    
    
    </section>
  )
}

export default CustomerReviews