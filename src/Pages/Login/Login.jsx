import loginImg from "../../assets/images/login/login.svg";

function Login() {
  return (
    <div className='flex justify-center space-x-24 items-center my-14'>
      <div>
        <img src={loginImg} alt='person' />
      </div>
      <form
        // onSubmit={handleSubmit}
        className='bg-white p-20 px-28 rounded-lg shadow-sm shadow-slate-300'
      >
        <h2 className='text-2xl font-extrabold text-gray-800 mb-6'>Login</h2>

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
          className='bg-[#ff3811] hover:bg-blue-700 text-white w-full font-bold py-2 my-4 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          Login
        </button>
        <button
          type='button'
          //   onClick={signInWithGoogle}
          className='  text-[#ff3811] w-full font-bold py-2  px-4 rounded focus:outline-none focus:shadow-outline border border-[#ff3811]'
        >
          Google Signin
        </button>
        <br />
      </form>
    </div>
  );
}

export default Login;
