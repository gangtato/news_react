import React from "react";

class Header extends React.Component{
    render(){
        return(
        <div className="bg-green-400 text-white container-fluid">
            <div className="mx-auto w-9/12 py-2">
               <h1 className="text-xl text-bold">Header</h1>
            </div>
        </div>);
    }
}

export default Header;