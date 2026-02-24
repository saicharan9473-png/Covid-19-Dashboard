// function MyComponent(props){
//     return <h1>Hello,{props.name}</h1>
// }
// export default MyComponent;
import React,{Component} from "react"; 
class MyComponent extends Component{
    render(){
        return <h1>Hi,{this.props.name}</h1>
    }
}
export default MyComponent;