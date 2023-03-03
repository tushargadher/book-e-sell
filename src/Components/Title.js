import React from "react";
const Title = (props) => {
    //props destructuring
    const { id, title, desc } = props;
    return (
        <>
            <div id="title">
                <h1>{id}</h1>
                <h4>{title}</h4>
                <p>{desc}</p>

            </div>
        </>
    );
}
export default Title;