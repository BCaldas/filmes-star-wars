import Counter from '../components/counter';
import {connect} from 'react-redux';
import {handleIncrement, handleDecrement, startCount, stopCount} from '../actions/CounterActions';

const mapStateToProxy = (state)=>{
    return state.counter;
};

const mapDispatcherToProps = (dispatcher) => {

    return {
        onIncrement:(newValue) => dispatcher(handleIncrement(newValue)),
        onDecrement:(newValue) => dispatcher(handleDecrement(newValue)),
        onStart:(currentValue) => dispatcher(startCount(currentValue)),
        onStop:() => dispatcher(stopCount())
    }
};

export default connect(mapStateToProxy, mapDispatcherToProps)(Counter);