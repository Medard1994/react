
const Login = () => {
  return (
    <div>
      <main className="bg-white">
      <div className=" bg-slate-500 flex flex-col items-center justify-center h-96 mx-auto  text-red-950 space-y-4
      w-96   m-0 auto">

        <h1 className="text-xl caret-red-700">login</h1>


        <input
          className="w-64 h-10 px-2 text-black rounded focus:ring-2 focus:ring-red-900 
          focus:ring-offset-2"
          type="text"
          placeholder="Full Name"
        />

<input
          className="w-64 h-10 px-2 text-black rounded"
          type="text"
          placeholder="Email"
        />

<input
          className="w-64 h-10 px-2 text-black rounded"
          type="password"
          placeholder="password"
        />
        <div className='space-x-4'>
        <button
          className="bg-white w-32 h-9 ">
          login
        </button>
        <button
          className="bg-black px-4 py-2 rounded">
          reset
        </button>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv95O-zYUzoTjD6-JDGqZ0CMYLIYfsBP5ADg&s'/>
        </div>
      </div>
    </main>
    </div>
  );
};

export default Login