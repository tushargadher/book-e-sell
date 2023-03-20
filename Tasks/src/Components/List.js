import React from "react";
import Title from './Title';
const List = () => {

    const array = [
        {
            id: 'O1',
            title: 'TatvaSoft',
            description: 'TatvaSoft ReactJs Training'
        },
        {
            id: 'O2',
            title: 'ReactJs',
            description: 'JavaScript Library'
        },
        {
            id: 'O3',
            title: 'MongoDb',
            description: 'DataBase'
        },
        {
            id: 'O4',
            title: 'Angular',
            description: 'FrontEnd FrameWork'
        },
        {
            id: 'O5',
            title: 'Web Dev',
            description: 'FrontEnd and BackEnd'
        },
    ]
    return (
        <>
            {array && array.map((ele) => {
                return (
                    <Title key={ele.id} id={ele.id} title={ele.title} desc={ele.description} />
                );
            })}
        </>
    );
}
export default List;