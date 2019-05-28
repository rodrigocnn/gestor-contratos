import Api from '.././Api'


export function getInfoDashboard(){
    const info = Api.getInfoDashboard()
    return{
        type:'GET_INFO',
        payload: info
    }
}