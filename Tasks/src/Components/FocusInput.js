import React, { Component } from 'react'
import InputRef from './InputRef';
class FocusInput extends Component {

    constructor() {
        super()
        this.componentRef = React.createRef();
    }
    handleClick = () => {
        this.componentRef.current.focus();
    }
    render() {
        //parent component
        return (
            <>
                <InputRef ref={this.componentRef} />
                <button onClick={this.handleClick}>Focus</button>
            </>
        )
    }
}
export default FocusInput;