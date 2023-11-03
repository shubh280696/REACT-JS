
import './App.css'
import ClassCom from './2.componet/classcom'
import FunCom from './2.componet/FunCom'
import HomePage from './2.componet/project/Homepage'
import PropsCom from './9.props/PropsFunCom'
import PropFunsCom from './9.props/PropsFunCom'
import PropsClasscom from './9.props/PropsClasscom'
import PropsChange from './9.props/PropsChange'
import Fragment from './9.props/map-key/Fragment'
import Mapkey from './9.props/map-key/Mapkey'
import CityTable from './9.props/map-key/CityTable'

import ConditionCom from './3. ConditionalRendaring/ConditionCom'
import Task from './9.props/map-key/Task '
import UseStateFun from './4.UseState/UseStateFun'
import UseStateClass from './4.UseState/UseStateClass'
import StatePro1 from './4.UseState/StatePro1'
import UseEffect from './5.UseEffect/UseEffect'
import LifeCycle from './6.LifeCycle/LifeCycle'
import InputData from './7.input/InputData'
import DeleteData from './7.input/DeleteData'
import Input2 from './7.input/Input2'
import UpdateData from './7.input/UpdateData'

import UseRef from './11.Hook/useRef,'
import MultipleInput from './10.multipleinput/PasswordVisible'
import Router from './12.Routder/Router'
import IncDec from './4.UseState/IncDec'
import PasswordVisible from './10.multipleinput/PasswordVisible'








function App() {

  return (
    <div className='app'>
      {/* <h1> app</h1> */}
      {/* ----------------componet------ */}
      {/* <ClassCom/> */}
      {/* <FunCom/> */}
      {/* <HomePage /> */}
      {/* -----------------props--------- */}
      {/* <PropFunsCom  name={"shubham"}age={24}/> */}
      {/* <PropFunsCom  name={"Ananaa"}/> */}
      {/* <PropsClasscom data ={{name:"shubhamji", age:24}}/> */}
      {/* <PropsChange name={"shubhi"}/> */}
      {/* ----------fragment------- */}
      {/* <Fragment/> */}
      {/* <Fragment/> */}
      {/* ------------------mapkey------------- */}
      {/* <Mapkey/> */}
      {/* <CityTable/> */}
      {/* <Task/> */}
      {/* -------------------condition rendaring------- */}

      {/* <ConditionCom/> */}
      {/* -------------------usestate------- */}
        {/* <UseStateFun/> */}
      {/* <UseStateClass/> */}
      {/* <StatePro1/> */}

      {/* <UseEffect/> */}
      {/* life sycle--------- */}
      {/* <LifeCycle/> */}
     {/* <InputData/> */}
     {/* <DeleteData/> */}
    {/* <Input2/> */}
    <UpdateData/>/
  
     {/* <UseRef/> */}
  {/* <MultipleInput/> */}
     <IncDec/>
       {/* <Router/> */}
       <PasswordVisible/>
    </div>
  )
}

export default App