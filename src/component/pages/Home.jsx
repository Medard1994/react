

const Home = () => {
  return (
    <main className="m-2 ">
    <form className="bg-blue-900 flex h-32 position: fixed">
    <div className="text-6xl ml-4 text-amber-400">
   <h1>bussiness</h1>
   
   <h1>online</h1>
    </div>

    <div className=" flex ml-[800px] space-x-10
    ">
        <h1>
            <select>
        <option className="">
        <h1>RWA</h1></option>
      <option>EN</option>
      </select>
      </h1>
    
    <h1 className="text-amber-300 text-2xl">Signin</h1>
    <h1 className="text-amber-300 text-2xl">registad</h1>
    </div>
    </form>
    
        <ul className=" h-16 flex gap-16 text-lg pt-32 ">
        <li className="ml-4">Home</li>
        <li>
          <select>
            <option>Games</option>
            <option>football</option>
            <option>volbool</option>
            <option>karat</option>
          </select>
          </li>
        <li>How to play</li>  
        <li>Resulter</li>  
        <li>Become in agent</li>
        <li>help & suport</li>  
        <li>pless realise</li>  
        <li>Winners</li>  
        <li></li>        
        </ul>
         
        <div className="bg-blue-500 h-96 py-20 flex gap-32" >
            <div className="bg-blue-900 w-96  ml-44 gap-3">
            <h1 className="text-xl text-white ">Dawnolod the official App</h1>
            <input type="number" required placeholder="mobile no(start whith 0) "
            className="ml-2"/>

            <button className="bg-amber-400 ml-14">GET APP LINK</button>
            <img src="https://www.hellotech.com/guide/wp-content/uploads/2020/05/HelloTech-qr-code-1024x1024.jpg" 
            className="w-36 p-4"/>
            <h1 className="text-2xl text-white ml-36">my name medard</h1>
             </div>
         <div>
          <img src="https://www.shutterstock.com/image-photo/boys-toddler-hands-holdingphone-on-260nw-2153545075.jpg" 
          className="  h-auto w-96 "/>
          </div>
       </div>
          

        <h1 className="text-4xl text-black ml-56">Follow these steps to install the <span className="text-blue-700">
             online bussiness</span></h1>
             <button className="bg-black w-44 h-20 ml-96">
              <img src="https://cdn.pixabay.com/photo/2017/01/11/08/31/icon-1971128_1280.png"
              className="w-7"/>
                <h1 className="text-white text-xl">Dawnolod</h1>
                <h1 className="text-white text-2xl">android Apk</h1>
             </button>

             <div className="flex gap-56 mx-48 pt-9">
              <div className="w-48 h-52 bg-red-200 rounded-2xl  ">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfVgPUYCOplDcPlVnQvDrZvaWQTigTOjmPLA&s"
                className="w-48 h-52"/>
              </div>
              <div className="w-48 h-52 bg-red-200 rounded-2xl">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEUlo3sJu-IS70S84wnPKuD1iWAJizSEgBlPofsx126aiIt43qyilYJHULE2ZZ_yQ63yg&usqp=CAU"
                className="w-48 h-52 "/>
              </div>
              <div className="w-48 h-52 bg-red-200 rounded-2xl" >
                <img src="https://www.shutterstock.com/image-photo/six-year-old-asian-little-260nw-2511519731.jpg"
                className="w-48 h-52"/>
              </div>
             </div>
    
    </main>
  )
}

export default Home