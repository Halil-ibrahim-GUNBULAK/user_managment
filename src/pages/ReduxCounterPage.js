import React, { Component } from 'react'
import CounterValue from '../reduxCounter/CounterValue';
import CounterButton from '../reduxCounter/CounterButton';
 class ReduxCounterPage extends Component {
  render() {
    return (
        <div>
            <CounterValue/>
            <CounterButton/>
        </div>
    )
  }
}
export default ReduxCounterPage;