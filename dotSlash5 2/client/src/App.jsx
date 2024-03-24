import {BrowserRouter , Routes , Route } from 'react-router-dom'
import HomePage from './pages/Home'
import ReportComplain from './pages/ReportComplain'
import Yes from './pages/yes'
import OfficialLog from './pages/officialLog'

export default function App() {
  return (
    <BrowserRouter>
          <Routes>
              <Route path ="/" element ={<HomePage/>}/>
              <Route path = "/complain" element = {<ReportComplain/>} />
              <Route path = "/yes" element = {<Yes/>}/>
              <Route path = "/log" element = {<OfficialLog/>} />
          </Routes>
    </BrowserRouter>
  )
}
