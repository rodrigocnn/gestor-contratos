import axios from 'axios'

const instance = axios.create({
   baseURL: 'http://localhost:8000/api'
 });
 

 if(sessionStorage.getItem('userData')){
 
   const itemStorage = JSON.parse(sessionStorage.getItem('userData'))
   const AUTH_TOKEN = itemStorage.data.token
   instance.defaults.headers.common = {'Authorization': `Bearer ${AUTH_TOKEN}`}
} 


const apis ={

    //AUTH =====================================================================    

     login:(user)=>  axios.post(`http://localhost:8000/api/login`, user),

    //DASHBOARD==================================================================
  
      getInfoDashboard:()=> instance.get(`/home`),
  
    //COMPANYS ==================================================================
        
        getCompanys:()=> instance.get(`/empresas`),
        deleteCompany:(id)=>  instance.get(`/empresas/${id}/delete`),
        getCompanyEdit:(id)=>  instance.get(`/empresas/${id}`),
        saveCompany:(company)=>  instance.post(`/empresas`, company),
        updateCompany:(id, company)=>  instance.put(`/empresas/${id}`, company),
        getCompanysCustom:()=> instance.get(`/empresas-custom`),
        searchCompany:(name)=>  instance.get(`/empresas/busca/${name}`),
  
     //CONTRACTS =================================================================
       
        getContracts:()=> instance.get(`/contratos`),
        getContractEdit:(id)=>  instance.get(`/contratos/${id}`),
        deleteContract:(id)=>  instance.get(`/contratos/${id}/delete`),
        saveContract:(contract)=> instance.post(`/contratos`, contract),
        updateContract:(id, contract)=> instance.put(`/contratos/${id}`, contract),
        getContractsByCompany:(id)=> instance.get(`/contratos/empresa/${id}`),
        
     //ADDITIVES ==================================================================
        
        getAdditives:()=> instance.get(`/aditivos`),
        saveAdditive:(contract)=>  instance.post(`/aditivos`, contract),
        getAdditiveEdit:(id)=>  instance.get(`/aditivos/${id}`),
        deleteAdditive:(id)=>  instance.get(`/aditivos/${id}/delete`),
        updateAdditive:(id, contract)=> instance.put(`/aditivos/${id}`, contract),
        getAdditivesByCompany:(id)=> instance.get(`/aditivos/empresa/${id}`),
        

     //LAUNCHS =====================================================================
         
        getLaunchs:()=> instance.get(`/lancamentos`),
        getLaunchEdit:(id)=>  instance.get(`/lancamentos/${id}`),
        saveLaunch:(launch)=>  instance.post(`/lancamentos`, launch),
        deleteLaunch:(id)=>  instance.get(`/lancamentos/${id}/delete`),
        updateLaunch:(id, launch)=> instance.put(`/lancamentos/${id}`, launch),

        
     //LAUNCHS ADDITIVE =====================================================================
         
        getLaunchsAdditive:(tipo)=> instance.get(`/lancamentos-aditivo`),
        getLaunchEditAdditive:(id)=>  instance.get(`/lancamentos-aditivo/${id}`),
        saveLaunchAdditive:(launch)=>  instance.post(`/lancamentos-aditivo`, launch),
        deleteLaunchAdditive:(id)=>  instance.get(`/lancamentos-aditivo/${id}/delete`),
        updateLaunchAdditive:(id, launch)=> instance.put(`/lancamentos-aditivo/${id}`, launch),
        

     //USUARIOS =====================================================================
         
        getUsers:(tipo)=> instance.get(`/usuarios`), 
        getUserEdit:(id)=>  instance.get(`/usuarios/${id}`),
        deleteUser:(id)=>  instance.get(`/usuarios/${id}/delete`),
        saveUser:(user)=>  instance.post(`/usuarios`, user),
        updateUser:(id, user)=> instance.put(`/usuarios/${id}`, user),


    //UPLOAD ANEXO  E EXTRATO DE CONTRATO  ===================================================================== 

        uploadAttachment:(file, config)=>  instance.post(`/arquivos`, file, config),


    //RELATORIOS  ===================================================================== 
    
         contractsExpiredDate:(days)=>  instance.get(`/relatorios/contratos/${days}`),
         additivesExpiredDate:(days)=>  instance.get(`/relatorios/aditivos/${days}`),
     

}

export default apis