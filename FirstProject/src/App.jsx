// import the css file here first
import'./App.css'; // global css
import Navigation from "./components/Navigation";
import DogsSection from './components/dog';

//create a simple function //since the function name is started with a capital letter it became a component
const App=()=>{
    return <div>
        <Navigation/>
        <DogsSection/>
        
    </div>
};
export default App;  