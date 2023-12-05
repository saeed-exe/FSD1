

const ShoeCard = ({imgurl,change,bigshoeimg}) => {
  return (
    <div className={`${bigshoeimg === imgurl ? 'border-coral-red' : 'border-transparent'} border-2 rounded-xl bg-card bg-center`}
    onClick={()=>change(imgurl)}>
     <img src={imgurl} alt="" width={127} height={103} className='object-contain' />
    </div>


  )
}

export default ShoeCard