import React from 'react'
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { Button } from "./components/Button";

const ErrorPage = () => {
  return (
    <Wrapper>
    <div className="container">
    
    {/* 1st heading */}
    <h1> 404 </h1> 

{/* 2nd heading */}
<div>
    <h3> Sorry!! You are Lost </h3>
    </div>

    {/* 3rd heading */}
    <p> The page you are looking for does'nt exist. How you got here is a mystery. But you can click the button below to go back to the Homepage, JazakAllah kher.  </p>
    
    
    {/* HOME button linked to HOMEPAGE */}
    
    <Button>
    <NavLink to="/"> HOME </NavLink>
     </Button>
     </div>
    
     </Wrapper> 
       );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
    text-align: center;

    h2 {
      font-size: 10rem;
    }

    h3 {
      font-size: 4.2rem;
    }

    p {
      margin: 2rem 0;
    }
  }
`;

export default ErrorPage;