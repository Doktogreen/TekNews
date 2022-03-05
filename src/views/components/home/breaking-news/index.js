import React from "react";

export default function BreakingNews(){
    return(
    // <!-- Breaking News Start -->
    <div class="container-fluid bg-dark py-3 mb-3">
        <div class="container">
            <div class="row align-items-center bg-dark">
                <div class="col-12">
                    <div class="d-flex justify-content-between">
                        <div class="bg-primary text-dark text-center font-weight-medium py-2" style={{width: "170px"}}>Breaking News</div>
                        <div class="owl-carousel tranding-carousel position-relative d-inline-flex align-items-center ml-3 owl-loaded owl-drag" style={{width: "calc(100% - 170px)", paddingRight: "90px"}}>
                        <div class="owl-stage-outer">
                            <div class="owl-stage" style={{transform: "translate3d(-1728px, 0px, 0px)", transition: "all 0s ease 0s", width: "5184px"}}>
                                <div class="owl-item cloned" style={{width: "864px"}}>
                                    <div class="text-truncate">
                                        <a class="text-white text-uppercase font-weight-semi-bold" href="...">
                                            Lorem ipsum dolor sit amet elit. Proin interdum lacus eget ante tincidunt, sed faucibus nisl sodales
                                        </a>
                                    </div>
                                </div>
                            <div class="owl-item cloned" style={{width: "864px"}}>
                                <div class="text-truncate">
                                    <a class="text-white text-uppercase font-weight-semi-bold" href="...">
                                        Lorem ipsum dolor sit amet elit. Proin interdum lacus eget ante tincidunt, sed faucibus nisl sodales
                                    </a>
                                </div>
                            </div>
                            <div class="owl-item active" style={{width: "864px"}}>
                                <div class="text-truncate">
                                    <a class="text-white text-uppercase font-weight-semi-bold" href="...">
                                        Lorem ipsum dolor sit amet elit. Proin interdum lacus eget ante tincidunt, sed faucibus nisl sodales
                                    </a>
                                </div>
                            </div>
                            <div class="owl-item" style={{width: "864px"}}>
                                <div class="text-truncate">
                                    <a class="text-white text-uppercase font-weight-semi-bold" href="...">
                                        Lorem ipsum dolor sit amet elit. Proin interdum lacus eget ante tincidunt, sed faucibus nisl sodales
                                    </a>
                                </div>
                            </div>
                            <div class="owl-item cloned" style={{width: "864px"}}>
                                <div class="text-truncate">
                                    <a class="text-white text-uppercase font-weight-semi-bold" href="...">
                                        Lorem ipsum dolor sit amet elit. Proin interdum lacus eget ante tincidunt, sed faucibus nisl sodales
                                    </a>
                                </div>
                            </div>
                            <div class="owl-item cloned" style={{width: "864px"}}>
                                <div class="text-truncate">
                                    <a class="text-white text-uppercase font-weight-semi-bold" href="...">
                                        Lorem ipsum dolor sit amet elit. Proin interdum lacus eget ante tincidunt, sed faucibus nisl sodales
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="owl-nav">
                        <div class="owl-prev">
                            <i class="fa fa-angle-left"></i>
                        </div>
                        <div class="owl-next">
                            <i class="fa fa-angle-right"></i>
                        </div>
                    </div>
                    <div class="owl-dots disabled"></div>
                </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    // <!-- Breaking News End -->
    )
}