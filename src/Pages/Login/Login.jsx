import { useContext } from "react";
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import loginImg from "../../assets/images/login/login.svg";

function Login() {
  const { signInWithEmailPassword } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInWithEmailPassword(email, password)
      .then((result) => {
        console.log(result);
        alert("User Login Successfully!");
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='flex justify-center space-x-24 items-center my-14'>
      <div>
        <img src={loginImg} alt='person' />
      </div>
      <form
        onSubmit={handleSignIn}
        className='bg-white p-20 px-28 rounded-lg border border-[#ff3811]'
      >
        <h2 className='text-3xl text-center font-semibold text-gray-800 mb-10'>
          Login
        </h2>

        <div className='mb-4'>
          <label htmlFor='email' className='block text-gray-700 font-bold mb-2'>
            Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            className='w-full border rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
          />
        </div>
        <div className='mb-2'>
          <label
            htmlFor='password'
            className='block text-gray-700 font-bold mb-2'
          >
            Password
          </label>
          <input
            type='password'
            name='password'
            id='password'
            className='w-full border rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
          />
        </div>
        <span className='text-sm mb-4'>
          Forget password?{" "}
          <span
            className='text-blue-500 cursor-pointer'
            // onClick={handleForgetPassword}
          >
            reset
          </span>
        </span>
        <br />
        <button
          type='submit'
          className='bg-[#ff3811] hover:bg-blue-700 text-white w-full font-bold py-2 mt-4 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          Login
        </button>
        <div className='text-center my-4 text-sm font-medium'>
          or Sign in with
        </div>
        <div className='text-center space-x-4 text-[#ff3811]'>
          <button className='p-3 rounded-full bg-slate-100'>
            <FaFacebook />
          </button>
          <button className='p-3 rounded-full bg-slate-100'>
            <FaGoogle />
          </button>
          <button className='p-3 rounded-full bg-slate-100'>
            <FaLinkedin />
          </button>
        </div>
        <div className='text-center text-md mt-3 text-sm text-slate-600'>
          New here?{" "}
          <Link to='/signup'>
            <span className='text-[#ff3811] font-medium'>Sign up</span>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
