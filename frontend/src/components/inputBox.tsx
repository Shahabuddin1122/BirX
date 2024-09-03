const InputBox = ({headerText}:{headerText:string}) => {
    return (
        <>
            <div className={"w-full py-1"}>
                <h4 className={"text-lg py-1"}>{headerText}<span className={"text-red-500 px-1"}>*</span></h4>
                <input placeholder={`Enter ${headerText.toLowerCase()}`} className={"w-full py-2 px-4 border-2 rounded-lg"}/>
            </div>
        </>
    );
}
export default InputBox;