import React from "react";

export default function FeaturedNews() {
    return(
    // <!-- Featured News Slider Start -->
    <div className="container-fluid pt-5 mb-3">
        <div className="container">
            <div className="section-title">
                <h4 className="m-0 text-uppercase font-weight-bold">Featured News</h4>
            </div>
            <div className="owl-carousel news-carousel carousel-item-4 position-relative">
                <div className="position-relative overflow-hidden" style={{height: "300px"}}>
                    <img className="img-fluid h-100" src="img/news-700x435-1.jpg" style={{objectFit: "cover"}} alt="featured-news" />
                    <div className="overlay">
                        <div className="mb-2">
                            <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                href="...">Business</a>
                            <a className="text-white" href="..."><small>Jan 01, 2045</small></a>
                        </div>
                        <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="...">Lorem ipsum dolor sit amet elit...</a>
                    </div>
                </div>
                <div className="position-relative overflow-hidden" style={{height: "300px"}}>
                    <img className="img-fluid h-100" src="img/news-700x435-2.jpg" style={{objectFit: "cover"}} alt="featured-news" />
                    <div className="overlay">
                        <div className="mb-2">
                            <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                href="...">Business</a>
                            <a className="text-white" href="..."><small>Jan 01, 2045</small></a>
                        </div>
                        <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="...">Lorem ipsum dolor sit amet elit...</a>
                    </div>
                </div>
                <div className="position-relative overflow-hidden" style={{height: "300px"}}>
                    <img className="img-fluid h-100" src="img/news-700x435-3.jpg" style={{objectFit: "cover"}} alt="featured-news" />
                    <div className="overlay">
                        <div className="mb-2">
                            <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                href="...">Business</a>
                            <a className="text-white" href="..."><small>Jan 01, 2045</small></a>
                        </div>
                        <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="...">Lorem ipsum dolor sit amet elit...</a>
                    </div>
                </div>
                <div className="position-relative overflow-hidden" style={{height: "300px"}}>
                    <img className="img-fluid h-100" src="img/news-700x435-4.jpg" style={{objectFit: "cover"}} alt="featured-news" />
                    <div className="overlay">
                        <div className="mb-2">
                            <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                href="...">Business</a>
                            <a className="text-white" href="..."><small>Jan 01, 2045</small></a>
                        </div>
                        <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="...">Lorem ipsum dolor sit amet elit...</a>
                    </div>
                </div>
                <div className="position-relative overflow-hidden" style={{height: "300px"}}>
                    <img className="img-fluid h-100" src="img/news-700x435-5.jpg" style={{objectFit: "cover"}} alt="featured-news" />
                    <div className="overlay">
                        <div className="mb-2">
                            <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                href="...">Business</a>
                            <a className="text-white" href="..."><small>Jan 01, 2045</small></a>
                        </div>
                        <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="...">Lorem ipsum dolor sit amet elit...</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    // {/* <!-- Featured News Slider End --> */}
    )
}