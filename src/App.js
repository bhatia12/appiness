import React, {useState} from 'react';
import UserData from './data/data.json'
import MaterialTable from 'material-table'
import LoginForm from './components/LoginForm'
function App() {
  const adminUser = {
    email: "hr@uday@gmail.com",
    password: "hruday123"
  }

  const [user, setUser] = useState({name: "", email:""})
  const [error, setError] = useState("")
  const columns =[
    {
      title: 'Name', field: 'name'
    },
    {
      title: 'Age', field: 'age'
    },
    {
      title: 'Email', field: 'email'
    },
    {
      title: 'Gender', field: 'gender'
    },
    {
      title: 'Phone No', field: 'phoneNo'
    }
  ]
  
  const Login = details => {
    console.log(details)
    if(details.email == adminUser.email && details.password == adminUser.password){
      console.log('logged In' )
      setUser({
        name: details.name,
        email: details.email
      })
    } else {
      console.log("password do not match")
      setError("Details Do not match")
    }
  }

  const Logout = () => {
    console.log('logout')
    setUser({name: "", email:""})
  }
  return (
    <div className="App">
      {(user.email != "") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
            <MaterialTable title="Material Table" 
              data={UserData}
              columns={columns}
              options={{
                search:false,
                paging:false
              }}
            />
          </div>
      ) : (
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;