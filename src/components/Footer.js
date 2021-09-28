import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Let's solve climate change.
    </h2>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted in Austin, Tx.
        </span>
      </div>
    </footer>
  </div>
)
