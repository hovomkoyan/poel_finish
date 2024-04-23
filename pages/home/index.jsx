import React from 'react';
import App from "@/component/layouts/app";
import Gallery from "@/component/gallery/gallery";
import Banner from "@/component/banner/banner";
import Event from "@/component/events/event";
import Discover from "@/component/discover/discover";
import Instagram from "@/component/instagram/instagram";

const Index = () => {
    return (
        <div>
            <App>
                <Gallery/>
                <Banner/>
                <Event/>
                <Discover/>
                <Instagram/>
            </App>
        </div>
    );
};

export default Index;