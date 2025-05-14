// import the css file here first
import'./App.css'; // global css
import Navigation from "./components/Navigation";
import DogsSection from './components/dog';

//create a simple function //since the function name is started with a capital letter it became a component
const App=()=>{
    return <div>
        <Navigation/>
        <DogsSection/>
        {/* <Navigation/>
        <Navigation/>
        <Navigation/>
        <Navigation/>
        <Navigation/>
        <Navigation/>
        <Navigation/>   one of a way to increase the reusability */} 

        
    </div>
};
export default App;  