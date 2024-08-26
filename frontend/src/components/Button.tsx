const Button = ({text,option}:{text:String,option:boolean}) => {
    return (
        <>
            <button className={`w-full py-3 rounded-full ${option? 'bg-black text-white': 'bg-white text-black border border-black'}`}>{text}</button>
        </>
    )
}
export default Button;