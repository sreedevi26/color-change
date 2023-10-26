import { useState } from 'react';
import './App.css';
import { SketchPicker } from 'react-color';

function App() {
  const [colors,setColor] = useState("#ff6")
  const handleChange =(color)=>{
    setColor(color.hex)
    // console.log(color);
  }

  const styles = {
    backgroundColor:colors,
    height:'100vh',
    textAlign:'center'
  }
  return (
    <div className="App" style={styles}>
      <h1 className='align-items-center'>Color Picker</h1>
      <SketchPicker className='justify-content-center align-item-center flex-column'
      color={colors}
      onChangeComplete={handleChange}/>
    </div>
  );
}

export default App;
