import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values ('#EAA4A4').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10)
      setList(colors)
    }catch (error){
      setError(true)
    }
  }

  return (
      <>
      <section className='container'>
        <h3>Shades & Colors Generator</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" value={color}
                  onChange={(e) =>
                  setColor(e.target.value)}
                  placeholder='#EAA4A4'
                 className={`${error ? 'error' : null}`}
          />
          <button className='btn' type='submit'>Submit</button>
        </form>
      </section>
        <section className='text-user'>
          <p><small>Choose your favorite color and copy from the clipboard</small></p>
        </section>
      <section className="colors">
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index}
          hexColor={color.hex}
          />

        })}
      </section>
      </>
  )
}

export default App
