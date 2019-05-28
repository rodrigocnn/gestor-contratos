import React, {Component} from 'react'
import {  Redirect } from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {login, changeValue} from '../.././actions/actionsLogin'



class Login extends Component{
    
    constructor(props){
        super(props)
    
        this.state = {
            logout: props.location.pathname,
            loginFail: false
        }

    }

    componentDidMount(){
        this.logout()
    }


    handleSumit = (event)=> {  
        event.preventDefault();
        const dataLogin = this.props.users.login 
        this.props.login(dataLogin)
     }


    logout(){

        if(this.state.logout === "/logout"){
            sessionStorage.clear();
        }
      
    }

    loginFail = () => {
        if(this.props.users.loginFail){
            return <div className="alert alert-danger" role="alert">
                     {this.props.users.loginFail}
                  </div> 
        }
    }

    render(){
      
        if (this.props.users.loginSuccess ) {
            return (
                <Redirect to="/dashboard"/>
                
            )
        } else {
            return(

        <div className="bg-login">    
             <div className="container">
                    <div className="login_wrapper">
                        <div className="animate form login_form">
                            <div className="login_content">
                    
                            <h1>
                                <i className="fa fa-file fa-2x"></i>
                                <strong>Gestor</strong>Contratos
                            </h1>
                    
                                <form name="contactform" className="contactform" onSubmit={this.handleSumit}>
                                <input name="email" type="email" onChange={this.props.changeValue}  className="form-control" placeholder="Email"></input>
                                <input name="password" type="password" onChange={this.props.changeValue}  className="form-control" placeholder="Senha" ></input>

                                    <input type="submit" className="btn btn-default submit" value="Acessar"></input>
                                     {this.loginFail()} 
                                </form>
                    
                            </div>
                        </div>
                            
                    </div>
                </div>
            
            </div>
                
            )}
    
        
    }
}

function mapStateToProps(state){
    return {users: state.user}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({login, changeValue}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)

