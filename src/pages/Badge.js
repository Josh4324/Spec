import React from "react";
import { Link } from "react-router-dom";

export default function Badge(props) {
  let score = props.location.search.slice(7,9);
  let gender = props.location.search.slice(17,);
  console.log(gender);
  let image = ""
  let newimage;

  if (gender === "female"){
    image = 
  score <= 10 ? "../images/badge-specless.png" : 
  score > 10 && score <= 30 ? "../images/badge-specupcoming.png": 
  score > 30 && score <= 60 ?  "../images/badge-specmaking.png" : 
  score > 60 && score <= 94 ? "../images/badge-specful.png" : 
  score > 94 ? "../images/badge-spectacular.png" : null
  }else if (gender === "male"){
    image = 
  score <= 10 ? "../images/men-badge-specless.png" : 
  score > 10 && score <= 30 ? "../images/men-badge-specupcoming.png": 
  score > 30 && score <= 60 ?  "../images/men-badge-specmaking.png" : 
  score > 60 && score <= 94 ? "../images/men-badge-specful.png" : 
  score > 94 ? "../images/men-badge-spectacular.png" : null
  }else{
    image = ""
  }

  if (gender === "female"){
    newimage = 
  score <= 10 ? "Spec-Less" : 
  score > 10 && score <= 30 ? "Spec-Upcoming": 
  score > 30 && score <= 60 ?  "Spec-Making" : 
  score > 60 && score <= 94 ? "Spec-Ful" : 
  score > 94 ? "Spec-Tacular.png" : null
  }else if (gender === "male"){
    newimage = 
  score <= 10 ? "Spec-Less" : 
  score > 10 && score <= 30 ? "an Upcoming Spec": 
  score > 30 && score <= 60 ?  "a Spec in the making" : 
  score > 60 && score <= 94 ? "Spec-Ful" : 
  score > 94 ? "Spec-Tacular.png" : null
  }else{
    newimage = ""
  }

  console.log(image)

  const share = () => {
    window.FB.ui(
      {
        method: 'share',
        href: 'https://developers.facebook.com/docs/',
      },
      // callback
      function(response) {
        if (response && !response.error_message) {
          alert('Posting completed.');
        } else {
          alert('Error while posting.');
        }
      }
    );
  }
  



  let details;
  
  if (score <= 10) {
    details =
      "You just dey! Perhaps, all this spec thing no too concern you? you have a long way to go guy, try level up";
  } else if (score > 10 && score <= 30) {
    details =
      "Opor!,We know you aspire to be Spec-tacular. You are in line, Keep Grinding!";
  } else if (score > 30 && score <= 60) {
    details =
      "On a low, you suppose be Spec o, but you still ghas do one or two";
  } else if (score > 60 && score <= 94) {
    details =
      "You are not doing bad!, But then, you no for like complete am?, 100% suppose be the goal";
  } else if (score > 94) {
    details =
      "Who dey breathe? Spec Overload!, You dey drip glory. E sha never complete";
  }
  return (
    <>
      <div class="wrapper-body wrapper-badge" style={{ backgroundImage: "url(../images/question-bg.jpg)" }}>
      <header className="header">
          <div class="container">
          <div class="row">
                <div class="col-6">
                <Link to="/" className = "logo">
                    <img src="../images/2sure-logo.png" style={{height: "80px"}}/>
                </Link>
                </div>
                <div class="col-6 text-right">
                <Link to="/" className = "logo">
                    <img src="../images/logo.png"/>
                </Link>
                </div>
            </div>
          </div>
        </header>

        <div class="wrapper">
          <div class="container">
              <div class="row justify-content-center">
                <div class="col-md-5">
                  <div class = "page-content">
                    
                    <div class="divider"></div>
                    <h2 class="fc-title sec-title text-center pt-50 mb-3">Share your SPEC Status Badge</h2>
                   {
                     <img src={image} class="spec-badge mb-2"/>
                   }
                   
      
                    <div class="share-button text-center mt-4">
                        <Link to={image} target="_blank" download={'badge'}  className = "btn btn-block download-button px-2" >Download your SPEC badge and share</Link>
                        <span class="share-text mt-3 mb-1">Share on:</span> 
                      

                        <a
            target="_blank"
            style={{color:"white"}}
            rel="noopener noreferrer"
            className = "share-button mr-3"
            href={`https://www.facebook.com/sharer.php?u=${`https://checkspecstatus.com/images/${image}`}`}>
            <i class="fab fa-facebook-square"></i>
          </a>
                        <a                         
            target="_blank"
            style={{color:"white"}}
            rel="noopener noreferrer"
            className = "share-button mr-3" href={`https://twitter.com/share?text=I just checked my Spec Status and the result shows that I' am ${newimage}. You can check your spec status at https://checkspecstatus.com`}><i class="fab fa-twitter-square"></i></a> 
             <a
            target="_blank"
            style={{color:"white"}}
            rel="noopener noreferrer"
            className = "share-button mr-3"
            href={`whatsapp://send?text=I just checked my Spec Status and the result shows that I' am ${newimage}. You can check your spec status at https://checkspecstatus.com`}>
            <i class="fab fa-whatsapp"></i>
          </a>
            <a
            target="_blank"
            style={{color:"white"}}
            rel="noopener noreferrer"
            className = "share-button mr-3"
            href="https://www.instagram.com">
            <i class="fab fa-instagram"></i>
          </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
        </div>
        <div class="footer">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
              <Link to="/privacy" style={{color:"white"}}>
                <div class="col-md-12">
                  <span>TERMS OF USE/ PRIVACY</span>
                </div>
              </Link>
              </div>

              <div class="col-md-6 text-right">
              <a
            target="_blank"
            style={{color:"white"}}
            rel="noopener noreferrer"
            className = "share-button mr-3"
            href="https://www.facebook.com/2SureNigeria/">
            <i class="fab fa-facebook-square"></i>
          </a>
            <a
            target="_blank"
            style={{color:"white"}}
            rel="noopener noreferrer"
            className = "share-button mr-3"
            href="https://www.instagram.com/2sureng/">
            <i class="fab fa-instagram"></i>
          </a>
              <a                         
            target="_blank"
            style={{color:"white"}}
            rel="noopener noreferrer"
            className = "share-button mr-3" href="https://www.twitter.com/2SureNG/"><i class="fab fa-twitter-square"></i></a> 
             
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </>
  );
}