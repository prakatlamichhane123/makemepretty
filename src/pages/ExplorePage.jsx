import './ExplorePage.css'
import Productcard from '../components/prodcard/Productcard';
import { useEffect, useState } from 'react';
import useGetRequest from '../hooks/useGetRequest';

export default function ExplorePage(){
    const [searchValue , setSearchValue] = useState("")
    const {data,hasError,errorMessage,isLoading,getRequest} = useGetRequest();
    console.log(searchValue)

        useEffect(()=>{
            getRequest('search?search='+searchValue);
        },[searchValue])
      


          return(

        <>
        <div className="explore-container">
            <div className="explore-search">
                <div className="placeholder"></div>
                <input
                 type="text"
                 placeholder='Search Products'
                 value={searchValue}
                 className='search-bar'
                 onChange={(e)=>setSearchValue(e.target.value)}  
                 />
                
             </div>
        
        
            <div className="products-display">
                  {
                            isLoading?<div className="loading">Loading......</div>:data?.data.map((product,i) => (
<Productcard key={i} id={product.id} prodName={product.prodname} prodDescription={product.proddesc} productPrice={product.price} catagory={product.catagory}/>
                            ))
                             
                                

                
                          } 
                        
            </div>
        </div>
        
        </>
    );
}