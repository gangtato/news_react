import React from "react";
import Header from '../../components/Header';
import Search from '../../components/Search';
import Card from '../../components/Card';


class News extends React.Component{

    state = {
        kata:''
    }

    handleValue = (e) => {
      this.setState({
          kata:e
      })
    }

    render(){
        return(
            <div>
                <Header/>
                <Search receiveKeyword={this.handleValue}/>
                <Card receiveValue={this.state.kata}/>
            </div>
        );
    }
}

export default News;