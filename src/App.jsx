import { useState, useEffect } from 'react'
import './App.css'
import Judul from './components/Judul'

function App() {
  const [statusHubungan, setStatusHubungan] = useState("")
  const [mantanSaya, setMantanSaya] = useState(1)
  const [namaMantan, setNamaMantan] = useState("")
  

  useEffect(() => {
    if (mantanSaya === 1) {
      setNamaMantan("Aira")
  }  else if (mantanSaya === 2) {
    setNamaMantan("Mei")
  } else if (mantanSaya === 3) {
    setNamaMantan("Rani")
  } else if (mantanSaya === 4) {
    setNamaMantan("Nabila")
  } else {
    setNamaMantan("...")
  }
  }, [mantanSaya])
  useEffect(() => {
    if (mantanSaya <= 3) {
      setStatusHubungan("Mantan")
  } else if (mantanSaya >= 4) {
    setStatusHubungan("Calon Pacar")
  }
  }, [mantanSaya])


  return (
    <>
    <Judul judulstatus={ statusHubungan }/>
    <h2>Nama { statusHubungan } saya { namaMantan }</h2>
      <h1> { statusHubungan } ke { mantanSaya }</h1>
      <button onClick={() => setMantanSaya((prev) => prev + 1 )}>Tambah Mantan</button>
      <button onClick={() => setMantanSaya((prev) => prev <= 0 ?  (alert("gd mantan :) "), 0) : prev - 1 )}>kurang Mantan</button>
    </>
  )
}

export default App
