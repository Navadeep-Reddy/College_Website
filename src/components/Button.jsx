import { MdMessage } from "react-icons/md";

const Button = ({ children }) => {
    return (
        <button className="bg-Comp text-Dom font-bold mr-8 h-11 min-w-[14rem] rounded-md mb-6 flex items-center justify-center space-x-2">
            <MdMessage />
            <span>{children}</span>
        </button>
    );
}

export default Button;
