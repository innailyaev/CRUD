import react from 'react';
import axios from 'axios';

export default class AvatarsApi extends react.Component{
    constructor(props){
        super();
        this.state={
            data:[],
        }
    }

    async componentDidMount(){
        const data=await axios.get('https://605b499d27f0050017c06c03.mockapi.io/api/v1/avatars');
        console.log(data);
    }

    
    render() {
        return (
            <>
            </>
        )   
    }

}