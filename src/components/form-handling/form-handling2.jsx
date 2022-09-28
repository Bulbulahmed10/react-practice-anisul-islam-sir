import React, { useState } from "react";

export default function FormHandling2() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    bike: "",
    car: "",
  });

  const { name, email, password, bike, car } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitFunc = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <form action="" onSubmit={submitFunc}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="Email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="checkbox">Whats your favorite vehcile:</label>
          <label htmlFor="bike">Bike</label>
          <input
            type="checkbox"
            id="bike"
            name="bike"
            value={bike}
            onChange={handleChange}
          />
          <label htmlFor="car">Car</label>
          <input
            type="checkbox"
            id="car"
            name="car"
            value={car}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
