const ServiceCard = ({imgurl,label,subtext}) => {
  return (
    <div className="flex-1 sm:w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 ">
        <div className="w-11 h-11 flex justify-center items-center bg-coral-red">
            <img src={imgurl} alt={label} width={24} height={24}/>
        </div>
        <h3 className="mt-5 font-palanquin text-3xl font-bold">{label}</h3>
        <p className="mt-3 font-montserrat text-lg leading-normal">{subtext}</p>
    </div>
  )
}
export default ServiceCard