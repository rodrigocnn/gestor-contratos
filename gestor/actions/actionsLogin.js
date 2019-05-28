import Api from '.././Api'

export function login(user) {
   
    return function(dispatch) {
        Api.login(user)
        .then((res) => {
            if (res){
                sessionStorage.setItem('userData', JSON.stringify(res))
                const result = true
                dispatch({  type:'LOGIN', payload: result})
              
            }
        })
        .catch((err) => {
            dispatch({  type:'LOGIN_FAIL', payload:  err.response.data.error})
        })
    }
  }


  export function changeValue(e){
    return {
        type:'CHANGED_VALUE_LOGIN',
        field: e.target.name,
        value: e.target.value
    }
} 

