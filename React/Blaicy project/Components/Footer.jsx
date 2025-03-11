import '../Styles/Footer.css'

function Footer(){
  return(
    <footer>
      <div className='lists'>
        <div >
           <p>COMPANY</p>
        <ul>
          <li>About us</li>
          <li>Advertise with us</li>
          <li>Investor relation</li>
        </ul>
        </div>
        <div>
          <p>FOR DEALERS</p>
        <ul>
          <li>Dealer resources</li>
          <li>Dealer signup</li>
        </ul>
        </div>
        <div>
          <p>TERMS</p>
        <ul>
          <li>Terms of use</li>
          <li>Privacy policy</li>
          <li>Your privacy choices</li>
          
          
        </ul>
        </div>
        <div>
          <p>HELP</p>
        <ul>
          <li>Help</li>
          <li>Contact us</li>
          <li>Delivery</li>
        </ul>
        </div>
        <div>
           <img src="acrediited.png" alt="" />
        </div>
      </div>
      <div className='cpr'><span>
        &#169;2024 Huunie motors,all reserved;designed by Blaicy.
        </span>
      </div>
    </footer>
  )


}

export default Footer

