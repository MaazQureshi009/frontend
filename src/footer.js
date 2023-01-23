import React from 'react'
import './footer.css'

function footer() {
  return (
    <div className="footer ">

  <footer className="bg-light text-center text-white">
  <div className="container ">
    <section className="mb-4">
      <a className="btn btn-primary btn-floating m-1" style={{background: "#3b5998"}}
        href="#!" role="button" ><i className="fab fa-facebook-f"></i></a>

      <a className="btn btn-primary btn-floating m-1" style={{background: "#55acee"}}
        href="#!" role="button" ><i className="fab fa-twitter"></i></a>

      <a className="btn btn-primary btn-floating m-1"
        style={{background: "#dd4b39"}}
        href="#!"role="button"><i className="fab fa-google"></i></a>

      <a className="btn btn-primary btn-floating m-1" style={{background: "#ac2bac"}}
        href="#!" role="button" ><i className="fab fa-instagram"></i></a>

      <a className="btn btn-primary btn-floating m-1" style={{background: "#0082ca"}}
        href="#!" role="button" ><i className="fab fa-linkedin-in"></i></a>
      
    </section>
  </div>

  <div className="text-center p-4" style={{background: "rgba(0, 0, 0, 0.2)"}}>
    {/* © 2022 Copyright: */}
    <a className="text-black" href='/'>MagicCorner.com</a>
  </div>
</footer>
  
</div>
  )
}


export default footer
