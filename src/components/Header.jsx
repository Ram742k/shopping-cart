import React from "react";

const Header = ({ cartCount, toggleCartVisibility }) => {
    const handleCartButtonClick = (e) => {
      e.preventDefault();
      toggleCartVisibility();
    };
    return (
        <div>
           
            <nav className="navbar navbar-expand-lg bg-own">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Shopping Cart</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
               
                <form className="d-flex ms-auto" role="search">
                <button className="btn btn-outline-success"  onClick={handleCartButtonClick}>
                    Cart ({cartCount})
                </button>
                    
                </form>
                </div>
            </div>
            </nav>
        </div>
    )
}
export default Header;