import React from "react";
// class InputRef extends Component {
//     constructor(){
//         super()
//         this.InputRef = React.createRef();
//     }
//     focusInput = () =>{
//         this.InputRef.current.focus();
//     }
//     render() {
//         //child component
//         return (
//             <>
//                 <input type='text' ref={this.InputRef}/>
//             </>
//         );
//     }
// }
const InputRef = React.forwardRef((props, ref) => {
    return (
        <>
            <input type='text' ref={ref} />
        </>
    );
})
export default InputRef;