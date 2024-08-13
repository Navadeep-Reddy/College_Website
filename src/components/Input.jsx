const Input = ({fieldName, userHeight, ...rest}) => {
    return(<div className="my-6 relative w-[30rem] flex justify-center">
        <label className="absolute -top-3 left-12 bg-Dom">{fieldName}</label>
        <input {...rest} className="border-solid border-2 border-Comp rounded min-w-[26rem] bg-Dom px-3" style={{height : userHeight}}></input>
    </div>)
}

export default Input;