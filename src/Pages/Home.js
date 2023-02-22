import React, { Component } from "react";
import Title from '../Components/Title'
class Home extends Component {
    render() {
        return (
            <>
                <Title text="Book-e-sell"/>
                <Title text="Book-e-sell"/>
                <Title text="Book-e-sell"/>
                <Title text="Home"/>
                <Title text="About"/>
                <Title text="Login"/>

                <div className="container">

                    <h1>This is classbased Home Component</h1>
                </div>
            </>
        );
    }
}
export default Home;