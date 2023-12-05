const Button = ({label,iconurl}) => {
  return (
    <button className="flex justify-center text-sm items-center rounded-full border-2 font-montserrat max-lg:py-2 py-4 px-7 bg-coral-red">
        {label}
    {iconurl &&<img src={iconurl} className="rounded-full ml-1 w-5 h-5" alt="arrow right icon" />}
    </button>

  )
}

export default Button