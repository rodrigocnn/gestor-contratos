import React , {Component} from 'react'
import 'react-confirm-alert/src/react-confirm-alert.css' 
import MainLayout   from '../.././layout/MainLayout'
import Panel from '../.././layout/Panel'
//import jwt_decode from 'jwt-decode';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getInfoDashboard} from '../.././actions/actionsDashboard'


class Dashboard extends Component {
   
    componentWillMount(){
        this.props.getInfoDashboard()
    } 

    welcome(){
        
        if(sessionStorage.getItem('userData')){
            const itemStorage = JSON.parse(sessionStorage.getItem('userData'))
            return   itemStorage.data.user.name
        } 
    
    }

    render(){

        const  {total_empresas , total_contratos , total_aditivos, total_lancamentos,
             total_lancamentos_aditivo, contratos_vencidos, aditivos_vencidos} = this.props.dashboard.data || []
      
        return(

        <MainLayout title="Dashboard">   

        <div className="alert alert-info" role="alert">
            Bem Vindo Ao Gestor Contratos !  Você está logado como <strong>{this.welcome()}</strong> 
        </div>

        <div className="row">
            <Panel label="Empresas Cadastradas"  icon="fa fa-copyright fa-5x" info={total_empresas }  link='/empresas'  type="panel panel-primary"> </Panel>
            <Panel label="Contratos Cadastrados" icon="fa fa-file-text-o fa-5x" info={total_contratos}  link='/contratos' type="panel panel-green"> </Panel>
            <Panel label="Aditivos Cadastrados"  icon="fa fa-plus-circle fa-5x" info={ total_aditivos}  link='/aditivos'  type="panel panel-yellow"> </Panel>
            <Panel label="Lançamentos Contratos" icon="fa fa-pencil-square-o fa-5x" info={total_lancamentos}  link='/lancamentos'  type="panel panel panel-red"> </Panel>
            <Panel label="Lançamentos Aditivos"  icon="fa fa-pencil-square-o fa-5x" info={ total_lancamentos_aditivo}  link='/lancamentos-aditivos'  type="panel panel panel-red"> </Panel>
            <Panel label="Contratos Vencidos"    icon="fa fa-file-text-o fa-5x" info={contratos_vencidos}  link='/contratos' type="panel panel-green"> </Panel>
            <Panel label="Aditivos Vencidos"     icon="fa fa-plus-circle fa-5x" info={aditivos_vencidos} link='/aditivos'  type="panel panel-yellow"> </Panel>
            
        </div>

        
        </MainLayout>
        )
    }

}

function mapStateToProps(state){
    return {dashboard: state.dashboard}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getInfoDashboard}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

