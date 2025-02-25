import { useState } from 'react'
import 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    	<Navbar />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </>
  )
}

export default App
