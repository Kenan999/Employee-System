import React from "react";
import UserService from "../services/UserService";


class USerCoponent extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            users:[]
        }
    }


    componentDidMount(){
        UserService.getUSers().then((respponse)=>{
            this.setState({users:respponse.data})
        });
    }

    render(){
        return(
        <div>
            <h1 className="text-center">Users List </h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <td>User Id</td>
                        <td>User First Name</td>
                        <td>User Last Name</td>
                        <td>User Email Id</td>
                    </tr>
                </thead>
                <tbody>
                    {this.state.users.map(user=>
                        <tr key = {user.id}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.emailId}</td>
                        </tr> )}
                </tbody>
            </table>
        </div>
        )
    }
}

export default USerCoponent