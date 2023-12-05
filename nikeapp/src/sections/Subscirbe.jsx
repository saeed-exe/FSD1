import Button from "../Components/Button"
const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col gap-10">
     <h3 className="text-4xl lg:max-w-lg font-palanquin font-bold">Sign Up for 
     <span className="text-coral-red"> Updates</span> & NewsLetters

     </h3>
     <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
     <input type="text" placeholder="Subscribe at Nike.com" className="input"/>
     <div>
      <Button label="SignUp" />
     </div>
     </div>
     </section>
    )
}

export default Subscribe