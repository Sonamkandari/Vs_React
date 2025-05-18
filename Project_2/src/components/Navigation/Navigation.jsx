// importing navigation file
//import styles from './Navigation.modules.css';
const Navigation = () => {
  return (
   <nav className="container">
    <div className="logo">
        <img src="Images\logo.png"alt="do some coding"></img>
    </div>
    <ul>
       <li> Home </li> 
       <li> About </li> 
       <li> Contact</li> 
    </ul>
   </nav>
  )
}

export default Navigation

