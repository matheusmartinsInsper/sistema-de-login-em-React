
import { useState } from 'react';
import Card from './Card'
import Button from './Task';
import './App.css'
import Context from './Context';
import { Login } from './Login';

/*
function App() {
  let [list,setList]=useState([])
  let [unlist,setUnlist]=useState([])
 
  const handleClick=(event)=>{
    const newTest = {
      positionX: event.clientX,
      positionY: event.clientY
    }

   setList((list)=>[...list, newTest])
    console.log(newTest)
   
  }

 const RemoverComponent=(event)=>{
  event.stopPropagation()

  const lasItem=list[list.length-1]

  setUnlist((unlist)=>[...unlist, lasItem])

  setList((prev)=>{
    const newArr=[...prev].slice(0,-1)
    return newArr
  })
  console.log(unlist)
 }

const RestaurarComponent=(event)=>{
  event.stopPropagation()

  const lastItemDaUnlist=unlist[unlist.length-1]

  setUnlist((unlist)=>{
    const newArr=[...unlist].slice(0,-1)
    return newArr
  })

  setList((prev)=>[...prev, lastItemDaUnlist])
  
  
}
console.log(list)
 return (
 
  <div id='page' onClick={handleClick}>
    {list.map((element)=> (<span className='teste' style={{left: element.positionX, top:element.positionY }}/>))}
    <button className='button' onClick={RemoverComponent}>Desfazer</button>
    <button className='button' onClick={RestaurarComponent}>Refazer</button>
    
  </div>
 )
}

export default App;


export default function App() {
    const [state,setState]=useState(0)
    return (
      <Context.Provider value={[state,setState]} >
      <div id='page'>
        <h1 style={{color: 'black'}}>
          {state}
        </h1>
        <Button />
      </div>
      </Context.Provider>
    )
}*/

export default function App() {
  const [email,setEmail]=useState('')
  const [senha,setSenha]=useState('')
  const [mensagem, setMensagem]=useState(null)
  const [sucess, setSucess]=useState(null)
  const [isRequesting, setIsResquesting]=useState(false)


  const handleEmail=(event)=>{
    setEmail((email)=>email=event.target.value)
  }
  const handleSenha=(event)=>{
    setSenha(event.target.value)
  }
  function handleButton(event) {
    setIsResquesting(true);
    setMensagem(null);
    setSucess(null);
    event.preventDefault();
    
    let values = {email:email, senha: senha }
    Login(values)
            .then((sucess)=>{
              setSucess(sucess.mensagem)
            })
            .catch((erro)=> {
               console.log(erro.mensagem);
               setMensagem(erro.mensagem)} )
            .finally(()=>{setIsResquesting(false)})
    console.log('submit')
  }
  return (
    <div style={{width:'100%', height:'100vh'}} id='main'>
      <form>
        <div className='titulo'><h2>Login</h2></div>
        {mensagem&&<div className='errorMensage'><span><strong>{mensagem}</strong></span></div>}
        {sucess&&<div className='sucessMensage'><span><strong>{sucess}</strong></span></div>}
        <div>
          <label >Email</label>
          <input 
          id='email' 
          value={email} 
          onChange={handleEmail}
          autoComplete='off'
          />
        </div>
        <div>
          <label >Senha</label> 
          <input 
          type='password'
          id='senha' 
          value={senha} 
          onChange={handleSenha}/>
        </div>
        <div id='button'>
          <button 
          type='submit'
          disabled={email===''||senha.length<6||isRequesting} 
          onClick={handleButton}>
            Login
          </button>
        </div>
      </form>
    </div>
  )
}
