import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../style.css";
import "../bootstrap.min.css";

function Privacy(props) {
  return (
    <>
      <div className="wrapper-home" style={{ backgroundImage: "url(images/bg-new-2.jpg)" }}>
        

        <header className="header">
          <div class="container">
            
            <Link to="/" className = "logo">
                <img src="images/logo.png"/>
            </Link>
          </div>
        </header>

        <div class="main">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-8 mt-5">
                <div class="home-spec-info" style={{textAlign:"justify"}}>
                  <h2>Privacy Policy</h2>
                  <p>Your privacy is critically important to us.</p>
                  <p>Here’s a chance to check just how much of a SPEC your SPEC is.</p>
                  <p>It is Spec Status NG's policy to respect your privacy regarding any information we may
collect while operating our website. This Privacy Policy applies to
https://SpecStatus.ng (hereinafter, "us", "we", or "https://SpecStatus.ng"). We respect
your privacy and are committed to protecting personally identifiable information you
may provide us through the Website. We have adopted this privacy policy ("Privacy
Policy") to explain what information may be collected on our Website, how we use this
information, and under what circumstances we may disclose the information to third
parties. This Privacy Policy applies only to information we collect through the Website
and does not apply to our collection of information from other sources.
This Privacy Policy, together with the Terms and conditions posted on our Website,
set forth the general rules and policies governing your use of our Website. Depending
on your activities when visiting our Website, you may be required to agree to
additional terms and conditions.</p>
<h5>Website Visitors</h5>
<p>
Like most website operators, Spec Status NG collects non-personally-identifying
information of the sort that web browsers and servers typically make available, such
as the browser type, language preference, referring site, and the date and time of each
visitor request. Spec Status NG's purpose in collecting non-personally identifying
information is to better understand how Spec Status NG's visitors use its website.
From time to time, Spec Status NG may release non-personally-identifying
information in the aggregate, e.g., by publishing a report on trends in the usage of its
website.
Spec Status NG also collects potentially personally-identifying information like
Internet Protocol (IP) addresses for logged in users and for users leaving comments
on https://SpecStatus.ng blog posts. Spec Status NG only discloses logged in user and
commenter IP addresses under the same circumstances that it uses and discloses
personally-identifying information as described below</p>
<h5>Gathering of Personally-Identifying Information</h5>
<p>To provide you with quality service as Job seekers and employers, Spec Status NG
requires certain personally-identifying information which includes (but not limited to);
email addresses, full names, biodata, etc. By using the Spec Status website
SpecStatus.ng you agree that the information provided is solely and wholly of your
volition, and you understand that this is to offer you the best of our service.</p>

<h5>Security</h5>
<p>The security of your Personal Information is important to us, but remember that no
method of transmission over the Internet, or method of electronic storage is 100%
secure. While we strive to use commercially acceptable means to protect your
Personal Information, we cannot guarantee its absolute security.</p>
<h5>Advertisements</h5>
<p>Ads appearing on our website may be delivered to users by advertising partners, who
may set cookies. These cookies allow the ad server to recognize your computer each
time they send you an online advertisement to compile information about you or
others who use your computer. This information allows ad networks to, among other
things, deliver targeted advertisements that they believe will be of most interest to
you. This Privacy Policy covers the use of cookies by Spec Status NG and does not cover
the use of cookies by any advertisers.</p>
<h5>Links To External Sites</h5>
<p>Our Service may contain links to external sites that are not operated by us. If you click
on a third party link, you will be directed to that third party's site. We strongly advise
you to review the Privacy Policy and the terms and conditions of every site you visit.
We have no control over and assume no responsibility for the content, privacy policies
or practices of any third party sites, products or services.
<h5> https://SpecStatus.ng uses Google AdWords & Facebook for remarketing</h5>
<p>Https://SpecStatus.ng uses the remarketing services to advertise on third party
websites (including Google) to previous visitors to our site. It could mean that we
advertise to previous visitors who haven't completed a task on our site, for example
using the contact form to make an enquiry. This could be in the form of an
advertisement on the Google search results page, or a site in the Google & Facebook
Display Network. Third-party vendors, including Google, use cookies to serve ads
based on someone's past visits. Of course, any data collected will be used in
accordance with our own privacy policy and Google's privacy policy.
You can set preferences for how Google advertises to you using the Google Ad
Preferences page, and if you want to you can opt-out of interest-based advertising
entirely by cookie settings or permanently using a browser plugin.</p>
<h5>Protection of Certain Personally-Identifying Information</h5>
<p>Spec Status NG discloses potentially personally identifying and personally-identifying
information only to those of its employees, contractors and affiliated organizations
that (i) need to know that information in order to process it on Spec Status NG's behalf
or to provide services available at Spec Status NG's website, and (ii) that have agreed
not to disclose it to others. Some of those employees, contractors and affiliated
organizations may be located outside of your home country; by using Spec Status NG's
website, you consent to the transfer of such information to them. Spec Status NG will
not rent or sell potentially personally-identifying and personally-identifying
information to anyone. Other than to its employees, contractors and affiliated
organizations, as described above, Spec Status NG discloses potentially personallyidentifying and personally-identifying information only in response to a subpoena, 
court order or other governmental requests, or when Spec Status NG believes in good
faith that disclosure is reasonably necessary to protect the property or rights of Spec
Status NG, third parties or the public at large.
If you are a registered user of https://SpecStatus.ng and have supplied your email
address, Spec Status NG may occasionally send you an email to tell you about new
features, solicit your feedback, or just keep you up to date with what's going on with
Spec Status NG and our products. We primarily use our blog to communicate this type
of information, so we expect to keep this type of email to a minimum. If you send us a
request (for example via a support email or via one of our feedback mechanisms), we
reserve the right to publish it in order to help us clarify or respond to your request or
to help us support other users. Spec Status NG takes all measures reasonably
necessary to protect against the unauthorized access, use, alteration or destruction of
potentially personally-identifying and personally-identifying information.</p>
<h5>Aggregated Statistics</h5>
Spec Status NG may collect statistics about the behaviour of visitors to its website.
Spec Status NG may display this information publicly or provide it to others. However,
Spec Status NG does not disclose your personally-identifying information.
<h5>Cookies</h5>
To enrich and perfect your online experience, Spec Status NG uses "Cookies", similar
technologies and services provided by others to display personalized content,
appropriate advertising and store your preferences on your computer.
A cookie is a string of information that a website stores on a visitor's computer, and
that the visitor's browser provides to the website each time the visitor returns. Spec
Status NG uses cookies to help Spec Status NG identify and track visitors, their usage
of https://SpecStatus.ng, and their website access preferences. Spec Status NG visitors
who do not wish to have cookies placed on their computers should set their browsers 
to refuse cookies before using Spec Status NG's websites, with the drawback that
certain features of Spec Status NG's websites may not function properly without the
aid of cookies.
By continuing to navigate our website without changing your cookie settings, you
hereby acknowledge and agree to Spec Status NG's use of cookies.</p>
<h5>Privacy Policy Changes</h5>
<p>Although most changes are likely to be minor, Spec Status NG may change its Privacy
Policy from time to time, and at Spec Status NG's sole discretion. Spec Status NG
encourages visitors to frequently check this page for any changes to its Privacy Policy.
Your continued use of this site after any change in this Privacy Policy will constitute
your acceptance of such change.</p>
<h5>Contact Information</h5>
If you have any questions about this Privacy Policy, please contact us via
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="footer">
          <div class="container">
            <Link to="/privacy" style={{color:"white"}}>
            <div class="col-md-12">
              <span>TERMS OF USE/ PRIVACY</span>
            </div>
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}


export default connect()(Privacy);
