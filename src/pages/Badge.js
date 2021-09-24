import React from "react";
import { Link } from "react-router-dom";

export default function Badge(props) {
  let score = props.location.search.slice(7);
  let image = 
  score <= 30 ? "../images/badge-specless.png" : 
  score > 30 && score <= 40 ? "../images/badge-specupcoming.png": 
  score > 40 && score <= 50 ?  "../images/badge-specmaking.png" : 
  score > 50 && score <= 60 ? "../images/badge-specful.png" : 
  score > 60 ? "../images/badge-spectacular.png" : null



  let details;
  
  if (score <= 30) {
    details =
      "You just dey! Perhaps, all this spec thing no too concern you? you have a long way to go guy, try level up";
  } else if (score > 30 && score <= 40) {
    details =
      "Opor!,We know you aspire to be Spec-tacular. You are in line, Keep Grinding!";
  } else if (score > 40 && score <= 50) {
    details =
      "On a low, you suppose be Spec o, but you still ghas do one or two";
  } else if (score > 50 && score <= 60) {
    details =
      "You are not doing bad!, But then, you no for like complete am?, 100% suppose be the goal";
  } else if (score > 60) {
    details =
      "Who dey breathe? Spec Overload!, You dey drip glory. E sha never complete";
  }
  return (
    <>
      <div class="wrapper-body wrapper-badge" style={{ backgroundImage: "url(../images/question-bg.jpg)" }}>
        <header className="header">
            <div class="container">
              <Link to="/" className = "logo">
                  <img src="../images/logo.png"/>
              </Link>
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
                      score <= 30 ? <img src="../images/badge-specless.png" class="spec-badge mb-2"/> : 
                      score > 30 && score <= 40 ? <img src="../images/badge-specupcoming.png" class="spec-badge mb-2"/> : 
                      score > 40 && score <= 50 ? <img src="../images/badge-specmaking.png" class="spec-badge mb-2"/> : 
                      score > 50 && score <= 60 ? <img src="../images/badge-specful.png" class="spec-badge mb-2"/> : 
                      score > 60 ? <img src="../images/badge-spectacular.png" class="spec-badge mb-2"/> : null
                    }
      
                    <div class="share-button text-center mt-4">
                        <Link to={image} target="_blank" download={'badge'}  className = "btn btn-block download-button px-2" >Download your SPEC badge and upload</Link>
                        <span class="share-text mt-3 mb-1">Share on:</span> 
                        <a target="_blank" href={`https://www.facebook.com/sharer.php?imageurl=${window.location.href}/${image}`} className = "share-button mr-2"><i class="fab fa-facebook-square"></i></a> 
                        <Link to="/" className = "share-button"><i class="fab fa-twitter-square"></i></Link>
            
                    </div>
                  </div>
                </div>
              </div>
            </div>

        
        </div>
        <div class="footer">
        <div class="container">
          <div class="col-md-12">
            <span>TERMS OF USE/ PRIVACY</span>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
