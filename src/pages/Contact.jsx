import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Contact Page</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste exercitationem error, eius ullam ratione sunt velit porro deserunt! Suscipit perspiciatis ipsa assumenda quam, tempora itaque libero tenetur nisi, aliquid quidem necessitatibus delectus dolor velit nulla ex. Doloremque modi in dignissimos quasi vero consectetur aperiam ducimus maiores at optio aliquid nam facere blanditiis iste, nemo quisquam debitis veniam pariatur nobis! Vero a harum voluptatibus ipsam animi numquam aliquam fuga asperiores nesciunt ipsum quos reiciendis facilis maiores distinctio porro molestiae corrupti odit fugit, quia doloribus tempore ab eligendi rerum unde! Molestiae maxime eligendi facere animi a aliquam placeat temporibus culpa sed ex?</p>

      <button onClick={() => {


        navigate("/")
      }}>Go to Home Page</button>
    </div>
  )
}

export default Contact