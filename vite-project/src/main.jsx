import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


const reactElement={
    type: 'a',
    props: {
        href: "https:google.com",
        target: '_blank'

    },
    children: 'click me to  visit '
}

function myApp(){
  return(
    <div>
      <h1>Custom React App</h1>

    </div>
  )
}
const anotherElement=(
  <a href="http://google.com"target='_blank'>Visit Google</a>
) 

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <MyApp/>
  </StrictMode>,
)
