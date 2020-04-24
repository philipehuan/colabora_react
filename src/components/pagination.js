import React from "react";
import {Button} from "primereact/button";
const Pagination = ({postsPerPage, totalPosts, paginate}) =>{
   const pageNumbers = [];

   for(let i=1 ; i <= Math.ceil(totalPosts / postsPerPage); i++){
       pageNumbers.push(i);
   }

   return(
       <nav>
           <ul className='pagination'>
               {pageNumbers.map(number => (
                   <li key={number} className='page-item'>
                       <Button onClick={() => paginate(number)} label={number}  className='page-link p-button-primary button_pagination' style={{marginRight:'5px'}}>
                       </Button>
                   </li>
               ))}
           </ul>
       </nav>
   );
}

export default Pagination;