import React, { Component } from "react";
import Title from '../Components/Title';
import Counter from "../Components/Counter";

class Home extends Component {
    constructor(){
        super()
        this.state = {
            title:'Book-e-sell',
            description:'Book-e-sell website is a platform for buying and selling books over the internet. Users can browse through a vast collection of books and purchase them with ease. The website provides a convenient and secure payment system, as well as fast and reliable shipping options.'
        }
        
    }
    render() {
        return (
            <>
            {/* <Title title={this.state.title} desc={this.state.description}/>
                <div className="container">

                    <h1>This is classbased Home Component</h1>
                </div> */}
                <div className="container">

                <Counter/>
                </div>
            </>
        );
    }
}
export default Home;