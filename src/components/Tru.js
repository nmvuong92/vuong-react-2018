import React, { Component } from 'react';
import {store} from '../store/store';
import {connect} from 'react-redux';
import {TruAction} from '../actions/CalcAction';
import congReducer from '../reducers/congReducer';


class Tru extends Component{
    constructor(props){
        super(props);
        this.state = {
            x:0,
            y:0   
        }
    }
    
    render(){
        //first retrieve the current state object
        const state = store.getState(); 
        return(
            <div>
                <input type="number" placeholder="x" value={this.state.x} onChange={(event)=>{
                    const new_val  = event.target.value;
                    this.setState({
                        x: new_val
                    });
                }}/>
                 <input type="number" placeholder="y" value={this.state.y} onChange={(event)=>{
                    const new_val  = event.target.value;
                    this.setState({
                        y: new_val
                    });
                }}/>
                <button onClick={()=>{
                    store.dispatch(TruAction(this.state.x, this.state.y));
                }}>-</button>
                <strong>Result: {state.calcReducer.result}</strong>
            </div>
        );
    }
}
export default Tru;
/*
const mapStateToProps = (state) =>({
    truReducer: state.truReducer,
});

export default connect(mapStateToProps)(Tru);*/