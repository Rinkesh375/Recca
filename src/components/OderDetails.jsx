import React from "react";
import styled from "styled-components";
import { SiCakephp } from "react-icons/si";
import { GiCakeSlice } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
import { GiBeerBottle } from "react-icons/gi";
import { IoIosSnow } from "react-icons/io";
import { TbBrandValorant } from "react-icons/tb";
import { WiCloud } from "react-icons/wi";
import { LuCake } from "react-icons/lu";

function OrderDetails() {
  return (
    <Container>
      <div>
        <p>Supplier</p>
        <h3>East coast fruits & vegetables</h3>
      </div>
      <div>
        <p>Shipping date</p>
        <h3>Thu, Feb 10</h3>
      </div>
      <div>
        <p>Total</p>
        <h3>$ 15,028.3</h3>
      </div>
      <div>
        <p>Category</p>
        <div><IoFastFoodOutline /><GiBeerBottle /><IoIosSnow /><WiCloud /><TbBrandValorant /><SiCakephp /><GiCakeSlice /><LuCake /></div>
      </div>
      <div>
        <p>Department</p>
        <h3>300-444-678</h3>
      </div>
      <div>
        <p>Status</p>
        <h3>Awaiting your approvel</h3>
      </div>
    </Container>
  );
}

const Container = styled.div`
box-sizing: border-box;
  margin: auto;
  max-width: 1200px;
  border-radius: 20px;
  border: 3px solid lightgray;
  text-align: start;
  padding: 1vw; 
  display: grid;
  grid-template-columns: repeat(6,16%);
  justify-content: space-between;

  div{
    border-right: 3px solid lightgray;
    padding: 1vw;

    p{
      margin: 0px;
      margin-bottom: 5px;
    }
    h3{
      margin: 0px;
    }
    div{
      padding: 0px;
      display: grid;
      row-gap: 7px;
      grid-template-columns: repeat(4,24%);
    }
  }
  div:last-child{
    border: none;
  }


`;

export default OrderDetails;