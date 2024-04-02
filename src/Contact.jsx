import styled from "styled-components";


const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);

            }
          }
        }
      }
    }
  `;

  return (
   <Wrapper>
  
   <h2 className="common-heading"> Feel Free to Contact </h2>
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.5153786894466!2d67.15298127504043!3d24.880396177916303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3398fc35fe105%3A0xb946654ca3adf66e!2sBlock%203%20Shah%20Faisal%20Colony%203%20Shah%20Faisal%20Colony%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1707712965525!5m2!1sen!2s"
    width="100%"
     height="500"
      style= { { border:0 } } 
      allowFullScreen="" 
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade">  </iframe>
  
      {/* Contact Form */}

      <div className="container">
 <div className="contact-form">
 <form action="https://formspree.io/f/xnqedqop" method="POST" className="contact-inputs">

      {/* Type your UserName */}

 <input 
 type="text"
  placeholder="username" 
 name="username" 
 required
 autoComplete="off" />

      {/* Type your Email */}

 <input 
 type="email"
  placeholder="Enter your Email" 
 name="Email" 
 required
 autoComplete="off" />

      {/* Type Your Message */}

 <textarea
  placeholder="Enter your Message" 
  name="Message" 
  cols="30" 
 rows="10" 
 required
 autoComplete="off"></textarea>

       {/* Submit Button */}
 <input type="submit" value="SEND"/>      
 
       </form>
 </div>
  </div>
 
      </Wrapper>



    );
};


export default Contact;