import React from "react";
import VMC from './inc/Vmc';



function About(){


    return (
        <div >
        <section className="py-4 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h4>About Us</h4>
            </div>
              <div className="col-md-8 my-auto">
                <h6 className="float-end">
                  Home  / About Us
                </h6>
              </div>
          </div>
        </div>
    </section>

    <section className="section border-bottom">
      <div className="container">
        <h5 className="main-heading">Our Company</h5>
        <div className="underline"></div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>

      </div>

    </section>
        {/* Our Vision, mission and Values*/}
          <VMC/>
               
               </div>
     

           

        
            
          
           
         
       
    
      );
    }
    
    export default About;