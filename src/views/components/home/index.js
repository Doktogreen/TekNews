import React, { Fragment } from "react";
import BreakingNews from "./breaking-news";
import FeaturedNews from "./featured-news";
import MainNewsSlider from "./main-news-slider-section";
import NewsWithSlider from "./news-with-slider";

export default function HomeComponent(){
    return(
        <Fragment>
            <MainNewsSlider />
            <BreakingNews />
            <NewsWithSlider />
            <FeaturedNews />
        </Fragment>
    )
}