import UserProfile from './Components/UserProfile/index'

import './App.css'

const UserDetailsList = [
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Saikumar',
    role: 'Software Developer',
  },
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Yashikaa',
    role: 'Database Administrator',
  },
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Floid',
    role: 'Software Developer',
  },
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Saikumar',
    role: 'Software Developer',
  },
]
const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      {UserDetailsList.map(each => (
        <UserProfile UserDetails={each} />
      ))}
    </ul>
  </div>
)

export default App
