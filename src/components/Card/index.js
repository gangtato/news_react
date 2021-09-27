import React from 'react';
import CardComponent from './card_component';
import { getDataFromUrl, getDataFromUrlWithKeyWord } from '../../api';

class Card extends React.Component{

    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    
    componentDidMount() {
        if(this.props.receiveValue === ''){
            getDataFromUrl().then(item => {
                this.setState({
                   data: item.articles  
                })
            });
        } 
    }
    componentDidUpdate(){
        if(this.props.receiveValue !== ''){
            getDataFromUrlWithKeyWord(this.props.receiveValue).then(item => 
                this.setState({
                    data: item.articles
                })
            );
        } 
    }

    render(){
        var a = this.state.data;
        return(
            <div className="container-fluid">
                <div className="mx-auto w-9/12 py-2 grid grid-cols-3 gap-4">
                   {   
                     a.map((item, i) => 
                        <CardComponent
                            key={i}
                            urlToImage={item.urlToImage}
                            url={item.url}
                            title={item.title}
                            author={item.author}
                            publishedAt={item.publishedAt}
                            description={item.description}
                         />)     
                   } 
                </div>
            </div>     
        );
    }
}

export default Card;