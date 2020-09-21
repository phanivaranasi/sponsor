import * as React from 'react';
import { connect } from 'react-redux';

import { ApplicationState } from '../store';
import * as CounterStore from '../store/Counter';

type CounterProps =
    CounterStore.CounterState &
    typeof CounterStore.actionCreators 

class Counter extends React.PureComponent<CounterProps> {
    public render() {
        return (
            <React.Fragment>
                <h1>Counter</h1>

                <p>This is a simple example of a React component.</p>

                <p aria-live="polite">Current count: <strong>{this.props.count}</strong></p>

                <button type="button"
                    className="btn btn-primary btn-lg"
                    onClick={() => { this.props.increment(); }}>
                    Increment
                </button>
                <button type="button" className="btn btn-sm btn-info" onClick={()=>{this.props.decrement();}}>
                    Decrement
                </button>
            </React.Fragment>
        );
    }
};

export default connect(
    (state: ApplicationState) => state.counter,
    CounterStore.actionCreators
)(Counter);