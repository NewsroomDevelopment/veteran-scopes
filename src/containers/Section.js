import React from 'react';
import styled from 'styled-components';

import { device } from '../device';

import ArticleBox from '../components/ArticleBox';
import VerticalNav from '../components/VerticalNav';
import MobileNavBar from '../components/MobileNav';

const SectionWrap1 = styled.div`
    display: flex;
    background: ${props => props.color};
`;

const Wrapper2 = styled.div`
    width: 100%;
    text-align: center;
`;

const Header = styled.h1`
    margin: 3rem;
    font-size: 2rem;
    letter-spacing: .5rem;
    color: #251282;

    @media ${device.tablet} {
        font-size: 3rem;
        letter-spacing: .5rem;
    }

    @media ${device.laptopS} {
        letter-spacing: .5rem;
    }
`;

const ArticlesWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

const NavWrap = styled.div`
    display: none;

    @media ${device.tablet} {
        display: inherit;
        padding-bottom: 0rem;
    }

    @media ${device.laptopS} {
        padding-bottom: 0rem;
    }

    @media ${device.laptop} {
        padding-bottom: 0rem;
    }
`;

const MobileNavWrap = styled.div`
        display: inherit;

        @media ${device.tablet} {
            display: none;
        }
`;

const Content = styled.p`
    font-weight: 650;
    margin-right: auto;
    margin-left: auto;
    width: 75%;
`;

const Section = ( { id, articles, header, color, content } ) => {
    return (
        <SectionWrap1 id={id} color={color}>
            <Wrapper2>
                <MobileNavWrap>
                    <MobileNavBar color="#251282" current={id} />
                </MobileNavWrap>
                <Header>{header}</Header> 
                <Content> {content}</Content>
                <ArticlesWrap>
                    {articles.map(article => (
                        <ArticleBox article={article} />
                    ))}
                </ArticlesWrap>
            </Wrapper2>
            <NavWrap>
                <VerticalNav color="#251282" current={id} />
            </NavWrap>
        </SectionWrap1>
    );
};

export default Section;