const Nav = () => {
    return(<>
    <nav className="h-18 flex justify-between w-[100rem] m-auto">
        <div>
            <img className="max-w-20 pt-2" src = "/public/images/dis.svg"></img>
        </div>
        <div>
            <ul className="text-[1.2rem] pt-6 text-Comp font-bold ">
                <li className="inline mr-6">Home</li>
                <li className="inline mr-6">About</li>
                <li className="inline mr-6">Contact</li>
            </ul>
        </div>
    </nav>
    </>)
}

export default Nav;