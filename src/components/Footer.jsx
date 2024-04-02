import styled from "styled-components";
import { Button } from "../components/Button";
import { NavLink } from "react-router-dom";
import { FaDiscord } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
              <section className="contact-short">
          <div className="grid grid-two-column">
            <div>
              <h3> Ready to get started? </h3>
              <h3> Talk to us Today </h3>
            </div>
            <div>
               {/* Use the Button component and wrap NavLink inside it */}
              <Button>
                <NavLink to="/contact"> Get Started </NavLink>
              </Button>
            </div>
          </div>
        </section>

{/* Main Footer */}
<footer>
<div className="container grid grid-four-column">
<div className="footer-about">

{/* Footer About */}
<h3> MUHAMMAD FAYZAN </h3>
<p> A dedicated and
 a passionate engineer + developer ALHAMDULILLAH. </p>
</div>


{/* Footer-Subcribe */}
<div className="footer-subscribe">
<h3> Subscribe to get important updates </h3>

{/* Footer-Subcribe Form */}
<form method="POST"
 action="https://formspree.io/f/xnqedqop">

<input
 type="email"
 placeholder="Your E-mail" 
 name="Email" 
required
autoComplete="off" />

{/* Footer-Subcribe Form */}
<input
 type="submit" 
 value="SUBSCRIBE" />
</form>
</div>

{/* Footer-Social */}
<div className="footer-social">
<h3> Follow Us  </h3>

{/* Footer-Social Icons */}
<div className="footer-social--icons">
<div>
<FaDiscord className="icons" />
</div>
<div>
<FaInstagram className="icons" />
</div>
<div>
<a
href="https://www.youtube.com/channel/UCOMPSyatQpMYmkYOcd6sRpA"
target="_blank">
<FaYoutube className="icons" /> 
</a>
</div>
</div>
</div>
{/* Footer-Contact */}
<div className="footer-contact">
<h3> Call us </h3>
{/*  <a href="tel:12345678978"> +923196393136 </a> */}
<h3> +923196393136 </h3>
</div>
</div>

{/* Bottom Footer */}
<div className="footer-bottom--section">
<hr />
<div className="container">
<div className="grid grid-two-column">

<p>
  @{ new Date().getFullYear() } Engineer MUHAMMAD FAIZAN. All Rights Reserved </p>

<div>
<p> PRIVACY POLICY </p>
<p> TERMS & CONDITIONS   </p>
</div>

</div>
</div>
</div>

</footer>
</Wrapper>
  );
};

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default Footer;