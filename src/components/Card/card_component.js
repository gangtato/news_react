import React from "react";

class CardComponent extends React.Component{
    render(){
        return(
            <div className="border border-black rounded pb-4">
                <img src={this.props.urlToImage} alt="img"/>
                <h1 className="text-lg py-2 px-4">{this.props.title}</h1>
                <p className="text-sm py-2 px-4">{this.props.author} - {this.props.publishedAt}</p>
                <h2 className="px-4 py-2">{this.props.description}</h2>
                <a className="border bg-green-400 rounded text-white px-4 py-2 mx-4 my-4" href={this.props.url}>Details</a>
            </div>
        );
    }
}

export default CardComponent;