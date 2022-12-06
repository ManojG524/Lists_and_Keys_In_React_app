import UserProfile from './Components/UserProfile/index'
import './App.css'

const UserDetailsList = [
  {
    UniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Manoj Reddy',
    role: 'SoftWare Engineer',
  },
  {
    UniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Manoj Reddy',
    role: 'SoftWare Engineer',
  },
  {
    UniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Manoj Reddy',
    role: 'SoftWare Engineer',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">UsersList</h1>
    <ul>
      {UserDetailsList.map(eachItem => (
        <UserProfile UserDetails={eachItem} key={eachItem.UniqueNo} />
      ))}
    </ul>
  </div>
)

export default App
