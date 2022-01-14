import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css"
const Contact = () => {
  return (
      <div class="bg-info contact4 overflow-hiddedn position-relative">
        <div className="mainSec">
            {/* <div className="col-lg-6 contact-box mb-4 mb-md-0"> */}
              <div className="HeroSec" >
                <h1 className="title font-weight-light text-white mt-2">
                  Contact Us
                </h1>
                <form className="mt-3">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <input
                          className="form-control text-white"
                          type="text"
                          placeholder="name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <input
                          className="form-control text-white"
                          type="email"
                          placeholder="email address"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <textarea
                          className="form-control text-white"
                          rows={3}
                          placeholder="message"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 d-flex align-items-center mt-2">
                      <button
                        type="submit"
                        className="btn bg-white text-inverse px-3 py-2"
                      >
                        <span> Submit</span>
                      </button>
                   
                    </div>
                  </div>
                </form>
            </div>
          </div>
      </div>
  );
};

export default Contact;
