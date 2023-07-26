import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

// Carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Navbar from './Navbar';

export default function Subcriptions(){

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <>
     <Navbar />
      <section class="pricing-section">
        <div class="container">
            <div class="sec-title text-center">
                <span class="title">Get plan</span>
                <h2>Choose a Plan</h2>
            </div>

            <div class="outer-box">
                <div class="row">

                <Carousel responsive={responsive} infinite={true}>
                    {/* <!-- Pricing Block --> */}
                    <div class="pricing-block free-plan  wow fadeInUp">
                        <div class="inner-box">
                            <div class="icon-box">
                                <div class="icon-outer"><i class="fas fa-paper-plane"></i></div>
                            </div>
                            <div class="price-box">
                                <div class="title"> Free Pass</div>
                                <h4 class="price">$0.00</h4>
                            </div>
                            <ul class="features">
                                <li class="true">Conference plans</li>
                                <li class="true">Free Lunch And Coffee</li>
                                <li class="true">Certificate</li>
                                <li class="false">Easy Access</li>
                                <li class="false">Free Contacts</li>
                            </ul>
                            <div class="btn-box">
                                <a href="" class="theme-btn">BUY plan</a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Pricing Block --> */}
                    <div class="pricing-block onemonth-plan wow fadeInUp" data-wow-delay="400ms">
                        <div class="inner-box">
                            <div class="icon-box">
                                <div class="icon-outer"><i class="fas fa-gem"></i></div>
                            </div>
                            <div class="price-box">
                                <div class="title">1 Month Pass</div>
                                <h4 class="price">$99.99</h4>
                            </div>
                            <ul class="features">
                                <li class="true">Conference plans</li>
                                <li class="true">Free Lunch And Coffee</li>
                                <li class="true">Certificate</li>
                                <li class="true">Easy Access</li>
                                <li class="false">Free Contacts</li>
                            </ul>
                            <div class="btn-box">
                                <a href="" class="theme-btn">BUY plan</a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Pricing Block --> */}
                    <div class="pricing-block twomonth-plan wow fadeInUp" data-wow-delay="800ms">
                        <div class="inner-box">
                            <div class="icon-box">
                                <div class="icon-outer"><i class="fas fa-gem"></i></div>
                            </div>
                            <div class="price-box">
                                <div class="title">3 Month Pass</div>
                                <h4 class="price">$199.99</h4>
                            </div>
                            <ul class="features">
                                <li class="true">Conference plans</li>
                                <li class="true">Free Lunch And Coffee</li>
                                <li class="true">Certificate</li>
                                <li class="true">Easy Access</li>
                                <li class="false">Free Contacts</li>
                            </ul>
                            <div class="btn-box">
                                <a href="" class="theme-btn">BUY plan</a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Pricing Block --> */}
                    <div class="pricing-block threemonth-plan wow fadeInUp" data-wow-delay="1000ms">
                        <div class="inner-box">
                            <div class="icon-box">
                                <div class="icon-outer"><i class="fas fa-gem"></i></div>
                            </div>
                            <div class="price-box">
                                <div class="title">8 Month Pass</div>
                                <h4 class="price">$399.99</h4>
                            </div>
                            <ul class="features">
                                <li class="true">Conference plans</li>
                                <li class="true">Free Lunch And Coffee</li>
                                <li class="true">Certificate</li>
                                <li class="true">Easy Access</li>
                                <li class="false">Free Contacts</li>
                            </ul>
                            <div class="btn-box">
                                <a href="" class="theme-btn">BUY plan</a>
                            </div>
                        </div>
                    </div>


                    {/* <!-- Pricing Block --> */}
                    <div className="pricing-block fourmonth-plan wow fadeInUp" data-wow-delay="1200ms">
                        <div class="inner-box">
                            <div class="icon-box">
                                <div class="icon-outer"><i class="fas fa-rocket"></i></div>
                            </div>
                            <div class="price-box">
                                <div class="title">Annual Pass</div>
                                <h4 class="price">$599.99</h4>
                            </div>
                            <ul class="features">
                                <li class="true">Conference plans</li>
                                <li class="true">Free Lunch And Coffee</li>
                                <li class="true">Certificate</li>
                                <li class="true">Easy Access</li>
                                <li class="true">Free Contacts</li>
                            </ul>
                            <div class="btn-box">
                                <a href="" class="theme-btn">BUY plan</a>
                            </div>
                        </div>
                    </div>

                    </Carousel>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
