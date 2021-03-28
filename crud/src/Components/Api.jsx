import react from 'react';
import axios from 'axios';

export default class Api extends react.Component{
    constructor(props){
        super();
        this.state={
            data:[],
        }
    }

    async componentDidMount(){
        const data=await axios.get('https://605b499d27f0050017c06c03.mockapi.io/api/v1/Countries');
        this.setState({data:data.data})
        console.log(this.state.data);
    }

    render(){
        return (
            <div className="homePage">
                {
                    this.state.data.map((c,index)=>(
                            <div key={index} className="card">
                                <h2>{c.name}</h2>
                                <p>{c.capital}</p>
                                <img src={c.imageUrl} alt="" width="300px"/>
                                <div className="buttons">
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </div>
                            </div>
                    ))
                }
            </div>
        )   
    }

}