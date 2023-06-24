import React from "react";
//import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';
//component should return jsx syntax;
 const Carding =()=>{
    return(
      /*
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    */
      <section className="pricing py-5">
        <div className="container" >
          <div className="row">
                  <div className="col-lg-4">
                    <div className="card mb-5 mb-lg-0">
                      <div className="card-body">
                        <h5 className="card-title text-muted text-uppercase text-center">Free</h5>
                        <h5 className="card-price text-center"><span>$0</span>/month</h5>
                        <hr></hr>
                        <ul className="fa-ul">
                                    <li><span><i className="fa-solid fa-check"> </i></span>  Single User</li>
                                    <li><span><i className="fa-solid fa-check"> </i></span>  5GB Storage</li>
                                    <li><span><i className="fa-solid fa-check"> </i></span>  Unlimited Public Project</li>
                                    <li><span><i className="fa-solid fa-check"> </i></span>  community Access</li>
                                    <li className="text-muted"><span><i className="fa-solid fa-xmark"> </i></span>  Unlimited Private Projects</li>
                                    <li className="text-muted"><span><i className="fa-solid fa-xmark"> </i></span>  Dedicated Phone Support</li>
                                    <li className="text-muted"><span><i className="fa-solid fa-xmark"> </i></span>  Free Subdomain</li>

                                    <li className="text-muted"><span><i className="fa-solid fa-xmark"> </i></span>  Monthly State Reports</li>
 
                        </ul>
                        <div className="d-grid">
                        <button className="btn btn-primary btn-lg">BUTTON</button>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card mb-5 mb-lg-0">
                      <div className="card-body">
                        <h5 className="card-title text-muted text-uppercase text-center">PLUS</h5>
                        <h5 className="card-price text-center"><span>$9</span>/month</h5>
                        <hr></hr>
                        <ul className="fa-ul">
                                    <li><span><i className="fa-solid fa-check"> </i></span>  5 Users</li>
                                    <li><span><i className="fa-solid fa-check"> </i></span>  50GB Storage</li>
                                    <li><span><i className="fa-solid fa-check"> </i></span>  Unlimited Public Project</li>
                                    <li><span><i className="fa-solid fa-check"> </i></span>  community Access</li>
                                    <li ><span><i className="fa-solid fa-check"> </i></span>  Unlimited Private Projects</li>
                                    <li ><span><i className="fa-solid fa-check"> </i></span>  Dedicated Phone Support</li>
                                    <li ><span><i className="fa-solid fa-check"> </i></span>  Free Subdomain</li>

                                    <li className="text-muted"><span><i className="fa-solid fa-xmark"> </i></span>  Monthly State Reports</li>
 
                        </ul>
                        <div className="d-grid">
                        <button className="btn btn-primary btn-lg">BUTTON</button>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card mb-5 mb-lg-0">
                      <div className="card-body">
                        <h5 className="card-title text-muted text-uppercase text-center">PRO</h5>
                        <h5 className="card-price text-center"><span>$49</span>/month</h5>
                        <hr></hr>
                        <ul className="fa-ul">
                                    <li><span><i className="fa-solid fa-check"> </i></span>  Unlimited User</li>
                                    <li><span><i className="fa-solid fa-check"> </i></span>  150GB Storage</li>
                                    <li><span><i className="fa-solid fa-check"> </i></span>  Unlimited Public Project</li>
                                    <li><span><i className="fa-solid fa-check"> </i></span>  community Access</li>
                                    <li ><span><i className="fa-solid fa-check"> </i></span>  Unlimited Private Projects</li>
                                    <li ><span><i className="fa-solid fa-check"> </i></span>  Dedicated Phone Support</li>
                                    <li ><span><i className="fa-solid fa-check"> </i></span> <b>Unlimited</b> Free Subdomain</li>

                                    <li ><span><i className="fa-solid fa-check"> </i></span>  Monthly State Reports</li>
 
                        </ul>
                        <div className="d-grid">
                        <button className="btn btn-primary btn-lg">BUTTON</button>

                        </div>
                      </div>
                    </div>
                  </div>
          </div>
        </div>
      </section>
    )
}

export default Carding;