
const Items = ({image,text,price}) => {
  return (
    <div className="text-sm">
        <a href="" className="flex flex-col gap-1 justify-center items-center text-center">
            <img src={image} alt="" className="w-40 h-40 object-contain" />
            <p>{text}</p>
            <span className="font-semibold">{price}</span>
        </a>
    </div>
  )
}

export default Items