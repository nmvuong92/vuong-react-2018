import React, { Component } from 'react';
import {store} from '../store/store';
import {CongAction,TruAction} from '../actions/CalcAction';
import { CONG,TRU } from '../constaints/action-types';
import {connect} from 'react-redux';
//first retrieve the current state object


class Cong extends Component{
    constructor(props){
        super(props);
        this.state = {
            x:0,
            y:0,
        };
    }
    render(){
        const state = store.getState(); 
        return(
            <div>
                <input type="number" placeholder="x" value={this.state.x} onChange={(event)=>{
                   const new_val = event.target.value;
                   this.setState({
                       x:new_val
                   });
                }}/>
                <input type="number" placeholder="y" value={this.state.y} onChange={(event)=>{
                     const new_val = event.target.value;
                     this.setState({
                         y:new_val
                     });
                }}/>
                <button onClick={()=>{
                    store.dispatch(CongAction(this.state.x,this.state.y));
                }}>+</button>
                  <button onClick={()=>{
                    store.dispatch(TruAction(this.state.x,this.state.y));
                }}>-</button>
                <strong>Result: {state.calcReducer.result}</strong>
            </div>
        );
    };
}
export default Cong;

/*
const mapStateToProps = (state) =>({
    congReducer: state.congReducer,
});

export default connect(mapStateToProps)(Cong);*/