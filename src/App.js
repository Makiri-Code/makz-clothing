import {Routes, Route} from 'react-router-dom'
import Home from './component/routes/home/Home';
import Navigation from './component/routes/navigation/navigation.component';
import SignIn from './component/routes/sign-in/SignIn.component';
import SignUp from './component/sign-up/SignUp.component';

const Shop = () => {
  return(
    <div>
      <h1>I am the shop page</h1>
    </div>
  )
}
const  App = () => {
  return (
    <Routes>
      <Route path ='/' element= {<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='sign-in' element={<SignIn/>}/>
        {/* <Route path='sign-up' element={<SignUp/>}/> */}
      </Route>
    </Routes>
  )
}
export default App;
