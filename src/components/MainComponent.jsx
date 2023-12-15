import {useSelector,useDispatch} from "react-redux"
import { useEffect } from "react";
import {getProduct} from "../redux/action";
import MainComponentCard from "./MainComponentCard";
import styled from "styled-components"
import { Heading } from '@chakra-ui/react'





const MainComponent = () => {
    const {productArray,isLoading}= useSelector(store=>store.productReducer);
    const dispatch = useDispatch();



    useEffect(() => {
       dispatch(getProduct()) 
    }, []);
    
 
   
    
  
  return (
    <>
    {
      isLoading? <Heading textAlign={"center"} as='h2' size='2xl'>
        Loading...
    </Heading>:<Table>
      <thead>
          <tr>
               <th></th>
              <th>Product Name</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Status</th>
              <th></th>
              <th></th>
              <th></th>
          
          </tr>
      </thead>
      
      <TableBody>
          {
            productArray.map(ele=><MainComponentCard key={ele.id} {...ele}/>)
          }
      </TableBody>
  </Table>
    }
    </>
  );
}

export default MainComponent;
const Table = styled.table`
  width: 90%;
  margin: 1rem auto;
  text-align: center;
  border: 1;
  border-collapse: collapse;
 
`;

const TableBody = styled.tbody`

 

`;


