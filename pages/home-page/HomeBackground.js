import React from "react";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import styled from "styled-components";
import media from "components/layouts/Master/MediaQuery";

const HomeBackgroundBox = styled.div`
    width: 100%;
    position: relative;
    padding-bottom: 1em;
    ${media.desktop`
      padding-bottom: 5.5em;
    `};
    img.hero-background {
        float: right;
    }
    img.strips {
        ${media.tablet`
            display:none;
        `};
    }
`;
const Bars = styled.div`
    position: absolute;
    left: 0;  
    max-width: 400px;
    bottom: 0;
    transform: rotate(0deg);
    ${media.desktop`
    max-width:200px;
     ${media.desktop`
       position: absolute;
    `};
    `};
`;
const Presenter = styled.div`
    display: inline-flex;
    padding-bottom: 40px;
    ${media.tablet`
   display:block;
   padding: 10em 0
    `};
    .speaker-img {
        max-width: 400px;
        max-height: 400px;
        height: 400px;
        justify-content: center;
        z-index: 9;
        margin-left: -30px;
        margin-top: 10%;
        ${media.desktop`
margin-left:0px;
    `};
        ${media.tablet`
margin: 0 auto;
position: relative;
    `};
        img {
            width: 100%;
            border-radius: 50%;
        }
    }
    .description {
        text-align: left;

        transform: translate(0, 40%);
        margin-left: 50px;
        max-width: 600px;
        margin-right: 5%;
        ${media.desktop`
    transform: translate(0,30%);
    `};
        ${media.tablet`
     text-align: left;
    font-family: "LatoWebMedium";
    font-weight: 900;
    font-size: 1.5em;
    -webkit-transform: translate(0,20%);
    -ms-transform: translate(0,20%);
    transform: translate(0,20%);
    margin-left: 50px;
    max-width: 95%;
    margin-right: 5%;
    `};
        h3 {
            font-family: "LatoWebMedium";
            font-weight: 900;
            font-size: 1.5em;
        }
        h4 {
            font-size: 1rem;
            color: #000;
            margin: 0;
        }
        p {
            font-size: 1rem;
        }
    }
`;

const HomeBackground = () => {
    return (
        <HomeBackgroundBox>
            <Row gutter={0} type="flex" justify="end" align="top">
                <Col
                    className="gutter-row"
                    xs={{ span: 0 }}
                    sm={{ span: 0 }}
                    md={{ span: 17 }}
                    lg={{ span: 15 }}
                    xl={{ span: 13 }}
                    
                >
                    <img className="hero-background" src="/static/image/splash.svg" />
                </Col>
            </Row>
            <Bars><img className="strips" src="/static/image/bars.svg" /></Bars>
            {/* <Row gutter={0} type="flex" justify="end" align="top">
                <Col
                    className="gutter-row"
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    md={{ span: 24 }}
                    lg={{ span: 24 }}
                    xl={{ span: 24 }}
                >
                    <Presenter>
                        <Bars>
                            <img src="/static/image/bars.png" />
                        </Bars>
                        <div className="speaker-img">
                            <img src="/static/image/presenter.jpg" />
                        </div>

                        <div className="description">
                            <h3> Sara Hashemi </h3>
                            <h4> Presenter </h4>
                            <p>
                                {" "}
                                Founder and CEO of Wink App. Experienced Product
                                Manager with a demonstrated history of working
                                in the marketing and advertising industry.
                                Skilled in Negotiation, Business Planning,
                                Retail, and Customer Relationship Management
                                (CRM). Strong product management professional
                                with a Master of Business Administration
                                (M.B.A.) focused in MEBA from IMI (Industrial
                                Management Institute).
                            </p>
                        </div>
                    </Presenter>
                </Col>
            </Row> */}
        </HomeBackgroundBox>
    );
};

export default HomeBackground;
