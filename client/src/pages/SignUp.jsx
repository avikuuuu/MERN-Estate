import { Link } from "react-router-dom";


export default function SignUp() {
  return (
    <div className="max-w-lg p-3 mx-auto">
      <h1 className="text-3xl text-center font-semibold py-8">Sign Up</h1>
      <form className=" flex flex-col gap-3">
        <input type="text" placeholder="username" id="username"
        className=" p-3  border rounded-lg"
        />
        <input type="email" placeholder="email" id="email"
        className=" p-3  border rounded-lg"
        />
        <input type="password" placeholder="password" id="password"
        className="  p-3  border rounded-lg"
        />
      <button className=" bg-slate-700 text-white uppercase  p-3  border rounded-lg hover:opacity-95 disabled:opacity-70">Sign-up</button>
      </form>
      <div className="flex gap-2 mt-3">
        <p>Have a account</p>
        <Link to='/sign-in'>
        <span className="text-blue-500">Sign in</span>
        </Link>
      </div>
    </div>
  )
}
