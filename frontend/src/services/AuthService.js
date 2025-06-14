const AuthServices = {};

AuthServices.Login = async (data) => {
  return await fetch("http://localhost:3001/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export default AuthServices;
