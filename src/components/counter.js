import React from "react";

class Counter extends React.Component {

    render() {
        const { value, onIncrement, onDecrement, onStart, onStop } = this.props;
        return (
            <div>
                <button onClick={()=>onDecrement(value - 1)}>-</button>
                <span>{ value }</span>
                <button onClick={() => onIncrement(value + 1)}>+</button>
                <button onClick={() => onStart(value)}>Start</button>
                <button onClick={() => onStop() }>Stop</button>
            </div>
        );
    }
}


export default Counter;