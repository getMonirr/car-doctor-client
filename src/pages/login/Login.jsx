import { Link } from "react-router-dom";
import LoginImg from "../../assets/images/login/login.svg";
import CdButton from "../../components/CdButton";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const { createUser, loginUser } = useAuth();

  const handleLoginAndSignUp = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    if (isLogin) {
      loginUser(email, password)
        .then((userCredential) => {
          if (userCredential.user) {
            Swal.fire("Login successful", "Welcome back", "success");
          }
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `Something went wrong! ${err?.message}`,
            footer: '<a href="">Why do I have this issue?</a>',
          });
        });
    } else {
      createUser(email, password)
        .then((userCredential) => {
          console.log(userCredential.user);
          if (userCredential.user) {
            updateProfile(userCredential.user, { displayName: name })
              .then(() => {
                console.log("Registration successful");
                Swal.fire(
                  "Registration successful",
                  "Thank for your joining with us",
                  "success"
                );
                form.reset();
              })
              .catch((err) => {
                console.log(err);
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: `Something went wrong! ${err?.message && err?.message}`,
                  footer: '<a href="">Why do I have this issue?</a>',
                });
              });
          }
        })
        .catch((err) => {
          console.log(err);
          if (err) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: `Something went wrong! ${err?.message && err?.message}`,
              footer: '<a href="">Why do I have this issue?</a>',
            });
          }
        });
    }
  };

  return (
    <div className="hero min-h-screen my-10">
      <div className="hero-content flex gap-8">
        <div className="text-center lg:text-left">
          <img src={LoginImg} alt="Login img" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm border">
          <div className="card-body">
            <div className="text-center">
              {isLogin ? (
                <h3 className="text-3xl ">Sign in</h3>
              ) : (
                <h3 className="text-3xl ">Sign up</h3>
              )}
            </div>
            <form className="space-y-5" onSubmit={handleLoginAndSignUp}>
              {!isLogin && (
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                    name="name"
                  />
                </div>
              )}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                />
              </div>
              <div className="form-control mt-6">
                {isLogin ? (
                  <CdButton className="bg-cd-primary border-cd-primary text-cd-white hover:bg-red-500">
                    <input type="submit" value="Login" />
                  </CdButton>
                ) : (
                  <CdButton className="bg-cd-primary border-cd-primary text-cd-white hover:bg-red-500">
                    <input type="submit" value="Sign up" />
                  </CdButton>
                )}
              </div>
            </form>
            <div className="my-6 text-center">
              {isLogin ? (
                <p>
                  Need a Account?{" "}
                  <Link
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-cd-primary"
                  >
                    Sign up
                  </Link>
                </p>
              ) : (
                <p>
                  Already have an account?{" "}
                  <Link
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-cd-primary"
                  >
                    Log in
                  </Link>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
