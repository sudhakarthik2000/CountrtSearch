import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Country() {
    const[data,setdata] = useState([])
    useEffect(()=>{
        fetchdata()

    },[])
    const fetchdata = async()=>{
        try{
            const{data,status} = await axios.get("https://restcountries.com/v3.1/all")
            // .then(data=>setdata(data.data))
            if(status === 200){
                setdata(data)
               const result =  nameExtractor(data)
               console.log(result);
            }
        }
        catch(err){
            console.log("error");
        }
    }

    // const nameExtractor = (data)=>{
    //     return data.map((each)=>
    //         each.name.official
    //     )

    // }

    const nameExtractor = (data)=>{
        return data.map((each)=>{
            return(
                each.name.official
             
            )
        })
    }



  return (
    <div>
        <>
        <h3>Country Listing</h3>

        <select >
            {
                data.map((each)=>{
                    

                })
            }

            
        </select>
        </>

      {/* {console.log(data)} */}


      {/* {
        data.map((each)=>{
            return(
                <h3>{each.name.official}</h3>
            )
        })
      } */}
    </div>
  )
}

export default Country
