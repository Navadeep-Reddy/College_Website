import Button from "./Button";
import Input from  "./Input";
import {useState} from "react";

const Hero = () => {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[text, setText] = useState("");

    const onSub = (event) => {
        event.preventDefault();
        console.log("Name  : ", name);
        console.log("Email : ", email);
        console.log("Text  : ", text);
    };

    return (<div className="w-[100rem] m-auto mt-12">
        <div>
            <h1 className="font-extrabold text-[4rem] text-Comp">CONTACT US</h1>
            <p className="w-[60rem] font-semibold text-Acc">LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA.</p>
        </div>
        <div className="flex w-[100rem] h-[40rem] ">
            <form className= " w-1/2">
                <div className="mt-10 flex ">
                    <Button>VIA SUPPORT CHAT</Button>
                    <Button>VIA CALL</Button>
                </div>

                <div>
                    <button className="bg-Dom rounded-md h-11 min-w-[30rem] border-2 border-solid border-Comp text-Comp font-extrabold">VIA EMAIL FORM</button>
                </div>

                <Input fieldName={"Name"} userHeight={"44px"} onChange = {(event) => {setName(event.target.value)}}/>
                <Input fieldName={"Email"} userHeight={"44px"} onChange = {(event) => {setEmail(event.target.value)}}/>
                <Input fieldName={"TEXT"} userHeight={"140px"} onChange = {(event) => {setText(event.target.value)}}/>
                
                <div className="w-[30rem] flex justify-center" onClick={onSub}>
                    <button className="bg-Comp text-Dom font-bold mr-8 h-11 min-w-[14rem] rounded-md mb-6 flex items-center justify-center space-x-2">Submit</button>
                </div>

            </form>

            
            <div className="flex justify-center items-center w-1/2"><img src = "public/images/hotel.svg" className="h-[40rem] w-[40rem]"></img></div>
        </div>
    </div>);
}

export default Hero;