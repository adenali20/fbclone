import {URI,FBC} from './Constants'
export function post(body,url){
    const jwt = window.sessionStorage.getItem("jwtToken")

    fetch(`${URI}/${FBC}/${url}`, {
      headers: new Headers({
        'Content-Type': 'application/json',
        "Authorization": jwt
      }),
      method: "POST",
      body:JSON.stringify({...body}) ,
    }).then(response => {

      return response.json();
    }).catch(err => {
      console.log(err);
      throw err

    })
}

export async function get(url){
    const jwt = window.sessionStorage.getItem("jwtToken")

    await fetch(`${URI}/${FBC}/${url}`, {
      headers: new Headers({
        'Content-Type': 'application/json',
        "Authorization": jwt
      }),
    }).then(response => {
        if(response!=null)

      return response.json();
    }).catch(err => {
      console.log(err);
      throw err

    })
}

