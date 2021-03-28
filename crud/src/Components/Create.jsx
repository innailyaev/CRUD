import react from 'react';
import axios from 'axios';


export default class Create extends react.Component{
    constructor(props){
        super();
        this.nameRef=react.createRef();
        this.capitalRef=react.createRef();
        this.urlRef=react.createRef();
        this.state={
            name:'',
            capital:'',
            imageUrl:''
        }
    }

    onChangeHandler=(e)=>{ 
        this.setState({
            name:this.nameRef.current.value,
            capital:this.capitalRef.current.value,
            imageUrl:this.urlRef.current.value
        })

    }

    formHandler = (e) => {
        e.preventDefault();
        const country = {
            name: this.state.name,
            capital:this.state.capital,
            imageUrl:this.state.imageUrl
          };
      
        axios.post(`https://605b499d27f0050017c06c03.mockapi.io/api/v1/Countries`, { country })
            .then(res => {
                console.log(res);
                console.log(res.data);
        })

    }
    

    
    render(){
        return (
            <form onSubmit={this.formHandler}>
               <input type="text" placeholder="Enter country name" ref={this.nameRef} name="name" onChange={this.onChangeHandler}/>
               <input type="text" placeholder="Enter country capital city" ref={this.capitalRef} name="capital" onChange={this.onChangeHandler}/>
               <input type="text" placeholder="Enter country image url" ref={this.urlRef} name="url" onChange={this.onChangeHandler}/>
               <button type="submit">Add</button>
            </form>

        )   
    }

}