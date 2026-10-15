import React, { useState, useEffect, useContext } from "react";
import { PageContext } from "../App";
import { Link } from "react-router-dom";


function One() {
    const [questions, setQuestions] = useState("")
    const count = useContext(PageContext);

    async function fetchPost() {

      
      const url = "https://jsonplaceholder.typicode.com/posts/" + count;

      const response = await fetch(url);
      const data = await response.json();

      console.log(data);

      setQuestions(data.title)

   
   }

   useEffect(() => {
      fetchPost();
   });


    


   return (
      <div className="bg-orange-100 border border-amber-100 shadow-2xl rounded-4xl h-100 text-2xl flex justify-center items-center flex-col w-[40%] m-auto mt-20 p-4">
         <div>
            <div className="bg-orange-200 p-15 rounded-2xl ">
               <p>Q1 Venus is the hottest planet in our solar system, even though Mercury is closer to the Sun</p>
            </div>
            <div className="flex justify-center mt-10 gap-7">
               <label for="true">
                  <input type="radio" id="true" name="question" value="true" />
                  TRUE
               </label>
               <label for="false">
                  <input type="radio" id="false" name="question" value="false" />
                  FALSE
               </label>
            </div>
         </div>

         <div className="flex justify-around gap-2 mt-6">
            {/* <button className="p-4 bg-mist-100 border rounded-2xl transition duration-200 hover:scale-110 hover:bg-orange-200">PREV</button> */}
            <button className="p-4 bg-mist-100 border rounded-2xl transition duration-200 hover:scale-110 hover:bg-orange-200"><Link to="/2">NEXT</Link></button>
         </div>
      </div>
   );
}

export default One;
