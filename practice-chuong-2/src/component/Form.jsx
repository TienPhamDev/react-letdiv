import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitedForm, setSubmitedForm] = useState(null);
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitedForm({ name: name, email: email, password: password });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          placeholder="name"
          onChange={handleChangeName}
          value={name}
        />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          placeholder="example@gmail.com"
          onChange={handleChangeEmail}
          value={email}
        />
        <label htmlFor="password">Passpwrd :</label>
        <input
          type="password"
          id="password"
          onChange={handleChangePassword}
          value={password}
        />
        <button type="submit">Submit Form</button>
      </form>
      {submitedForm && (
        <div>
          <h1>Thong tin dang ky</h1>
          <p>Ten: {submitedForm?.name}</p>
          <p>email: {submitedForm?.email}</p>
        </div>
      )}
    </div>
  );
};
export default Form;
