import './ExplorePage.css'
import Productcard from '../components/prodcard/Productcard';
import { useEffect, useState } from 'react';
import useGetRequest from '../hooks/useGetRequest';

export default function ExplorePage(){
    const [searchValue , setSearchValue] = useState("")
//    const [isSearchClicked , setIsSearchClicked] = useState(false)
    const {data,hasError,errorMessage,isLoading,getRequest} = useGetRequest();
    console.log(searchValue)

        // useEffect(()=>{
        //      getRequest('products') 
        //   },[isSearchClicked]);

        useEffect(()=>{
            getRequest('search?search='+searchValue);
        },[searchValue])
        //   const clickHandler = ()=>{
                
                
          //}


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
                
                {/* <button 
                type="button" 
                name='search-btn' 
                className='search-btn' 
                onClick={clickHandler}
                >Search</button>     */}
             </div>
        
        
            <div className="products-display">
                  {
                            isLoading?<div className="loading">Loading......</div>:data?.data.map((product) => (
<Productcard key={product.id} prodName={product.prodname} prodDescription={product.proddesc} productPrice={product.finalprice} productDiscount={product.price}/>
                            ))
                             
                                

                
                          } 
                        
            </div>
        </div>
        
        </>
    );
}