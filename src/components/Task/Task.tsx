import { useEffect, useState } from 'react'
import './Task.css'

function Task() {
  const [conpletado, setCompletado] = useState(false)
  const[tarefa, setTarefa] = useState('')


  useEffect(() =>{
    if(conpletado == true){
      setTarefa("Tarefa Concluida")
    }
  
  }, [conpletado])

  return (
    <div className="container">
        <h1>Tarefa</h1>
        <h3>Status da Tarefa:{ tarefa }</h3>
        <button onClick={ () => {setCompletado(true)}}>Conclua a Tarefa</button>
    </div>
  )
}

export default Task