import EmergencyInfo from './(routes)/LifeSkiils/EmergencyInfo'
import Header from './_components/Header'
import ThemeProvider from './_providers/ThemeProvider'
import Home from './(routes)/Home'
import Calendar from './(routes)/LifeSkiils/Calendar'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LifeSkills from './(routes)/LifeSkiils'

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/life-skills" element={<LifeSkills />} />
          </Routes>
          <Routes>
            <Route path="/life-skills/personal-info" element={<EmergencyInfo />} />
          </Routes>
          <Routes>
            <Route path="/life-skills/calendar" element={<Calendar />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  )
}

export default App
