import React, {useState} from 'react';
import ReactPlayer from 'react-player';

function Bmi() {
  // state
  const [weight, setWeight] = useState()
  const [height, setHeight] = useState()
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')
 
  let calcBmi = (event) => {
    //prevent submitting to the server
    event.preventDefault()
 
    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    } else {
      let bmi = (weight / (height * height) * 10000)
      setBmi(bmi.toFixed(1))
 
      // Logic for message
 
      if (bmi < 18.5) {
        setMessage('You are underweight')
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setMessage('You are a healthy weight')
      } else if(bmi>=25 && bmi<29.9){
        setMessage('You are overweight')
      }
      else if(bmi>=29.9){
        setMessage('You are obese')
      }

    }
  }
 
 
  let reload = () => {
    window.location.reload()
  }
  const Player = ({ url }) => (
    <div style={{ margin: '20px' }}>
      <ReactPlayer url={url} width="400px" height="200px"/>
    </div>
  );

    const [isVisible, setIsVisible] = useState(true);
  
    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };
  
 
  return (
    <div className="app">
    <div className='container'>
      <h1 className='center'>BMI CALCULATOR</h1>
      <form onSubmit={calcBmi}>
 
        <div>
          <label>Weight (kg)</label>
          <input value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Enter Weight"/>
        </div>
 
        <div>
          <label>Height (cm)</label>
          <input value={height} onChange={(event) => setHeight(event.target.value)} placeholder="Enter Height"/>
        </div>
 
        <div>
          <button style={{color: "black", background:"#ffd1aa"}} className='btn colorchange' type='submit' onClick={toggleVisibility}>
            Submit
          </button>
          <button style={{color: "black", background:"#ffd1aa"}} className='btn btn-outline colorchange' onClick={reload} type='submit'>Reload</button>
        </div>
      </form>
 
      <div className='center'>
        <h3>Your BMI is: {bmi}</h3>
        <p>{message}</p>
      </div>
    </div>
    

    {/* Video recommendation part */}
    {isVisible && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Player url="https://youtu.be/tCfM0Udly18" />
          <Player url="https://youtu.be/5BwlDW0CAuU" />
          <Player url="https://youtu.be/V7cdJ9-T6CM" />
        </div>
      )}
  </div>
  );
}

export default Bmi