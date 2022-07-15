import axios from 'axios';
import { useState } from "react";

function LoginComponent() {
  const [user, setUser] = useState("allison");
  const [senha, setSenha] = useState("teste");

  const handleUsername = (e) => {
    e.preventDefault();
    console.log("USUARIO: ", e.target.value);
    setUser(e.target.value);
  };

  const handlePassword = (e) => {
    e.preventDefault();
    console.log("MINHA SENHA: ", e.target.value);
    setSenha(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    try {
     
      axios({
        url: "https://dash.adtail.ag/homolog/React-Dash/autentica",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: { username: "allison", password: "teste" }
      }).then((response) => {
          console.log(response)
      }) 
    } catch (error) {
      console.log("Error:", error.status);
    }

  };

  return (
    <div className="App">
      <form onSubmit={submit}>
        <input
          type="text"
          name="username"
          value={user}
          onChange={handleUsername}
        />

        <input
          type="password"
          name="password"
          value={senha}
          onChange={handlePassword}
        />

        <input type="submit" name="Sign Up" />
      </form>
    </div>
  );
}

export default LoginComponent;
