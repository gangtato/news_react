import React from 'react';

class Search extends React.Component{
    
    state = {
        keyword:''
    }
    
    handleKeyword = (e) => {
       this.setState({
           keyword: e.target.value
        }, () => this.props.receiveKeyword(this.state.keyword));
    }


    render(){
        return(
        <div className="container-fluid">
            <div className="mx-auto w-9/12 py-2 mt-4">
               <input className="border rounded w-full border-green-400 px-2 py-2"
               onChange={this.handleKeyword}
               placeholder="Search"
               />
            </div>
        </div>
        );
    }
}

export default Search;