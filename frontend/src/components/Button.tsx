const Button = ({text,option,onclick}:{text:string,option:boolean,onclick?: ()=> void}) => {
    return (
        <>
            <button onClick={onclick} className={`w-full py-3 rounded-full ${option? 'bg-black text-white': 'bg-white text-black border border-black'}`}>{text}</button>
        </>
    )
}
export default Button;