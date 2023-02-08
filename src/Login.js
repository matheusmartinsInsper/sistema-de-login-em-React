import React from 'react'

export function Login({email, senha}) {
    const delay= (0.7+Math.random()*2)*1000;

    return new Promise((resolve,reject)=>{
     
        setTimeout(function () {  
        if(email==='matheusrocha'&&senha==='senha1'){
            resolve({mensagem: 'Logado'})
        }
        else{
          reject({mensagem: 'Senha ou email incorreto'})
        }}, delay)
    })
}

