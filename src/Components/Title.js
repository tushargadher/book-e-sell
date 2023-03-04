import React from "react";
//import title.css 
import '../css/title.css';
const Title = (props) => {
    //props destructuring

    const { id, title, desc } = props;
    return (
        <>
        {console.log('Title component rendering.')}
            <div className="wrap">
                <h2>{id}</h2>
                <h4 id="title">{title}</h4>
                <p id="description">{desc}</p>

            </div>
        </>
    );
}
export default React.memo(Title);