import React from 'react'
import imgLogo from '../JeCheon-logo.png';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container px-4 px-lg-5">
              <a className="navbar-brand" href="#!">착한가격 업소</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                      <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                      <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                      <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">업소</a>
                          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                              <li><a className="dropdown-item" href="#!">충청북도</a></li>
                              <li><hr className="dropdown-divider" /></li>
                              <li><a className="dropdown-item" href="#!">제천시</a></li>
                              <li><a className="dropdown-item" href="#!">충주시</a></li>
                          </ul>
                      </li>
                  </ul>
                  <form className="d-flex">
                      <button className="btn btn-outline-dark" type="submit">
                          <i className="bi-cart-fill me-1"></i>
                          장바구니
                          <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                      </button>
                  </form>
              </div>
          </div>
      </nav>
      <header className="bg-white py-0">
          <div className="container px-4 px-lg-5 my-5">
              <div className="text-center text-white">
                <li className="imgList">
                  <img className="card-img-top logo-img" src={imgLogo} alt="로고" />
                  <img className="card-img-top people-img" src="https://www.goodprice.go.kr/images/sub/guide_img01.jpg" alt="사람들" />
                  <img className="card-img-top" src="https://www.goodprice.go.kr/images/sub/guide_img04.jpg" alt="가이드" />
                </li>
              </div>
          </div>
        </header>
    </>
  )
}

export default Navbar