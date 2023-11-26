import { Route, Routes, useNavigate } from 'react-router-dom'
import{Home, About, Header, Tasks, Todo, Footer} from './components'
import { ToastContainer } from 'react-toastify';



function App() {
const navigate = useNavigate();

  return (
        <>
          <Header />

          <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
          />

          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks />}/>
          
          
            <Route path='/todo/:todoId' element={<Todo />}/>
          </Routes>
          <Footer/>


        </>
  )
}

            
export default App
      //  <div key={user.id}>
      //       {/* <h1>{user.firstName + " " + user.bank.cardNumber}</h1> */}
      //       </div>
        
      //       <div>
      //       {/* <h1>Counter: {count}</h1>
      //       <button onClick={() => setCount(count + 5)}>Click me</button> */}
      //       </div>