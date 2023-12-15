import React from 'react';
import { useDispatch } from "react-redux"
import { FaCheck } from "react-icons/fa";
import { updateProductStatus } from '../redux/action';
import styled from "styled-components"
import MissingItemCard from './MissingItemCard';
import EditModal from './EditModal';

const MainComponentCard = ({ id, name, brand, price, quantity, status, comment, image }) => {
    const tableRowStyle = {
        marginTop: '10px', // Adjust the margin-top value as needed
      };
    const dispatch = useDispatch()
    return (
          <>
               <tr style={tableRowStyle}>
                <td style={{ width: "50px" }}><img src={image} alt={name} /></td>
                <td>{name}</td>
                <td>{brand}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td >₹ {quantity * price}</td>
                {status === "Approved" ? <TableDataApproved><span>{status}</span></TableDataApproved> : status==="Missing"?<TableDataMissing>{status}</TableDataMissing>:status === "Missing Urgent"?<TableDataMissingUrgent>{status}</TableDataMissingUrgent>:status==="Quantity and Price Both Updated"?<TableDataQuantityPrice>{status}</TableDataQuantityPrice>:status === "Quantity Updated"?<TableDataQuantity>{status}</TableDataQuantity>:status === "Price Updated"?<TableDataPrice>{status}</TableDataPrice>:<td></td>}
                <td style={{ cursor: "pointer" }} onClick={() => dispatch(updateProductStatus({ id, obj: { status: "Approved" } }))}><FaCheck /></td>
                <td style={{ cursor: "pointer" }}><MissingItemCard id={id} /></td>
                <td><EditModal data={{id,name,brand,price,quantity,status,comment,image}}/></td>
            </tr>
          </>
         
        
      
    );
}

export default MainComponentCard;

const TableDataApproved = styled.td`
    background-color: green;
    border-radius: 2rem;
    color: white;
    margin: auto 1rem;
    cursor: pointer;

`

const TableDataMissingUrgent = styled.td`
    background-color: red;
    border-radius: 2rem;
    color: white;
    margin: auto 1rem;
    cursor: pointer;

`

const TableDataMissing = styled.td`
    background-color: orange;
    border-radius: 2rem;
    color: white;
    margin: auto 1rem;
    cursor: pointer;

`

const TableDataPrice = styled.td`
    background-color: green;
    border-radius: 2rem;
    color: white;
    margin: auto 1rem;
    cursor: pointer;

`

const TableDataQuantity = styled.td`
    background-color: green;
    border-radius: 2rem;
    color: white;
    margin: auto 1rem;
    cursor: pointer;

`

const TableDataQuantityPrice = styled.td`
    background-color: green;
    border-radius: 2rem;
    color: white;
    margin: auto 1rem;
    cursor: pointer;

`



