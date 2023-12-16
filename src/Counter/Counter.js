import { useEffect,useState } from 'react'

import './Counter.css'

const Counter = () => {
  const [savings, setSavings] = useState(0)
  const [photos, setPhotos] = useState(0)
  const [rockets, setRockets] = useState(0)
  const [globes, setGlobes] = useState(0)
  
  useEffect(() => {
   const interval = setInterval(() =>{
    const currentSavings = 1274
    const currentPhotos =5786
    const currentRockets = 1440
    const currentGlobes = 1710


    if(savings < currentSavings){
      setSavings(savings +1 )
    }
    if(photos < currentPhotos){
      setPhotos(photos +1 )
    }
    if(rockets < currentRockets){
      setRockets(rockets +1 )
    }
    if(globes < currentGlobes){
      setGlobes(globes +1 )
  }
    else{
      clearInterval(interval)
    }
   },10)
    return () => clearInterval(interval)
  }, [savings])

  
  return (
    <div className='counter'>
      <div className='counter-text'>
        <h1>{savings}+</h1>
        <p>SAVINGS</p>

      </div>
      <div className='counter-text'>
        <h1>{photos}+</h1>
        <p>PHOTOS</p>

      </div>
      <div className='counter-text'>
        <h1>{rockets}+</h1>
        <p>SAVINGS</p>

      </div>
      <div className='counter-text'>
        <h1>{globes}+</h1>
        <p>GLOBES</p>

      </div>




    </div>
  )
}

export default Counter