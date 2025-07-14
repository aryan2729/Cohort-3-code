
// for this search -> http://localhost:3000/signup  not /auth/signup

export default function Signup(){

    return <div >

        <div className="border m-4 p-2">

            <input type="text" placeholder="username"  className="bg-slate-800 mb-2 text-center"/>
            <br />
            <input type="password" placeholder="password" className="bg-slate-800 text-center"/>
            <br />
            <button className="bg-blue-500 w-44 mt-2">Sign up </button>

        </div>
    </div>
}