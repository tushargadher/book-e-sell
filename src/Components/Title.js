import React from "react";
const Title = (props) => {
    //props destructuring
    const { title, desc } = props;
    return (
        <>
            <div id="title">
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
        </>
    );
}
export default Title;