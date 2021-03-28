import react from 'react';
import Api from "./Api";
import "./Style.css"

export default class Home extends react.Component{
    constructor(props){
        super();
       
    }


    render(){
        return (
            
            <div className="container">
               <Api/>
            </div>
        )   
    }

}