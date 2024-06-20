import { useState } from 'react'
import './App.css'
import Photos from './ImageContainer/Images/'
import Input from './Input/Search'

function App() {
const[text,setText] = useState('')
  return (
    <div>
      <Input inputText={setText}/>
      {!(text) ? 'Please input to get details' :<Photos name={text} key={text}/>}
    </div>
  )
}

export default App
