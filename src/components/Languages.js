import React,{Component} from 'react';
import { langAction } from '../actions/langAction';
import { store } from '../store/store';
export default class Languages extends Component{
    constructor(props){
        super(props);
        
    }
    fnChangeLanguage(){
      
    }
    render(){
        const { i18n } = this.props;
        return (
            <div>                
                <button onClick={()=>{
                     i18n.changeLanguage('de');
                     store.dispatch(langAction('de'));
                }}>de</button>
                <button onClick={()=>{
                     i18n.changeLanguage('en');
                     store.dispatch(langAction('en'));
                }}>en</button>
                <button onClick={()=>{
                    i18n.changeLanguage('vi');
                    store.dispatch(langAction('vi'));
                }}>vi</button>
            </div>
        );
    }
}