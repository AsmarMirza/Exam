import React from 'react'
import "./footer.scss"
function Footer() {
  return (
    <div className='footer'>
       <div className='footerMain'>
<div className='footerBox'>
<h1 className='footerDif'>Top Products</h1>
<p className='footerText'>Managed Website</p>
<p className='footerText'>Manage Reputation</p>
<p className='footerText'>Power Tools</p>
<p className='footerText'>
Marketing Service</p>
</div>

<div className='footerBox'>
<h1 className='footerDif'>Quick Links</h1>
<p className='footerText'>Jobs</p>
<p className='footerText'>Brand Assets</p>
<p className='footerText'>Investor Relations</p>
<p className='footerText'>
Terms of Service</p>
</div>

<div className='footerBox'>
<h1 className='footerDif'>Features</h1>
<p className='footerText'>Jobs</p>
<p className='footerText'>Brand Assets</p>
<p className='footerText'>Investor Relations</p>
<p className='footerText'>
Terms of Service</p>
</div>


<div className='footerBox'>
<h1 className='footerDif'>Resources</h1>
<p className='footerText'>Guides</p>
<p className='footerText'>Research</p>
<p className='footerText'>Experts</p>
<p className='footerText'>
Agencies</p>
</div>


<div  className='footerBox'>
<h1 className='footerDif'>Newsletter</h1> 
<p className='footerText_'>Heaven fruitful doesn't over lesser in days. Appear creeping</p> 
<div className='footerInp'>
<input className='footerInput' type="text" name="" id="" placeholder='Email Address' />
<button className='footerBtn'>Subscribe</button>
</div>
</div>
       </div>

       <div className='footer__'>
        <p className='footerText2'>Copyright ©2024 All rights reserved | This template is made with <i className="fa-regular fa-heart"></i>  by Colorlib</p>
        <div className='footerIcons'>
        <i id='icon' className="fa-brands fa-facebook-f"></i>
        <i id='icon'  className="fa-brands fa-twitter"></i>
        <i id='icon'  className="fa-solid fa-globe"></i>
        <i id='icon'  className="fa-brands fa-behance"></i>
        </div>
       </div>
    </div>
  )
}

export default Footer