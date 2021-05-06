import Auth from './components/Auth';
import {useState, useEffect} from 'react';
import List from './components/List';


function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [data, setData] = useState([])
  const [houses, setHouses] = useState([])


  const login =  async (userdata) => {
     const response = await fetch('http://test-alpha.reestrdoma.ru/api/login/', 
     {
      headers: {
        'Content-Type': "application/json",
        'Accept': "application/json"
      },
      credentials: 'include',
      method: "POST",
      body: JSON.stringify(userdata)
     })
     const data = await response.json()
     console.log(data)
     localStorage.setItem('token', data.data.token.access);
     setIsAuth(true)
  }

  const getCompanies = async () => {
    const token = localStorage.token
    const response = await fetch("http://test-alpha.reestrdoma.ru/api/reestrdoma/companies/",
    {
        headers: {
            "accept": "application/json",
            "Authorization": `Bearer ${token}`
        }}
    )
    const data = await response.json()
        setData(data.data);
} 


  const getHouses = async (company_id) => {
    const token = localStorage.token
    const response = await fetch(`http://test-alpha.reestrdoma.ru/api/reestrdoma/company/houses/${company_id}`, 
    {
      headers: {
          "accept": "application/json",
          "Authorization": `Bearer ${token}`
      }}
    )
    const data = await response.json()
    setHouses(data.data)
  }

  return (
<>
 { !isAuth && <Auth login={login}/> }
 { isAuth && <List getCompanies={getCompanies}
  data={data} houses={houses} getHouses={getHouses} /> 
 } 
</>
  )
}

export default App;

