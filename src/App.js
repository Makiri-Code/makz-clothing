import {Routes, Route} from 'react-router-dom'
import Home from './component/routes/home/Home';
import Navigation from './component/routes/navigation/navigation.component';
import Shop from './component/routes/shop-page/Shop.component';
import Authentication from './component/routes/authentication/Authentication.component'


const  App = () => {
  return (
    <Routes>
      <Route path ='/' element= {<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='auth' element={<Authentication/>}/>
      </Route>
    </Routes>
  )
}
export default App;
