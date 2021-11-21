import React from 'react';
import styled from 'styled-components';

const VertNav = styled.div`
    width: fit-content;
    margin-top: 20rem;
    text-align: center;
    position: sticky;
`;

const Swirly = styled.svg`
    margin-top: -10rem;
`;

const NavText = styled.text`
    font-weight: ${props => props.current ? 'bold': 500};
    fill: ${props => props.color};
    font-size: .80rem;
    letter-spacing: .1rem;

    :hover {
        font-weight: bold;
    }
`;

const NavBar = ({color, current}) => {
    return (
        <VertNav>
            <Swirly width="200" height="600" viewBox="-60 0 200 497" fill="none" xmlns="http://www.w3.org/2000/svg">
                <a href="/#home">
                        <NavText x="0" y="-10" color={color} current={current === "home"}>HOME</NavText>
                </a>
                <a href="/#military">
                        <NavText x="25" y="90" color={color} current={current === "student_life"}>
                            <tspan x="25" dy="1.2em">MILITARY</tspan> </NavText>
                </a>
                <a href="/#rotc">
                        <NavText x="-55" y="180" color={color} current={current === "on_campus"}>
                            <tspan x="-25" dy="1.2em">ROTC</tspan></NavText>
                </a>
                <a href="/#podcast">
                        <NavText x="15" y="290" color={color} current={current === "beyond_campus"}>
                            <tspan x="15" dy="1.2em">PODCAST</tspan> </NavText>
                </a>
                <a href="/#credits">
                        <NavText x="10" y="512" color={color} current={current === "credits"}>
                            CREDITS
                        </NavText>
                </a>
                <path d="M36.401 491.964C36.401 491.964 24.977 488.792 26.5656 467.102C28.1541 445.411 53.9659 429.645 51.5331 401.362C49.1004 373.079 25.7918 357.87 7.27808 336.242C-11.2356 314.614 17.0929 258.093 17.0929 258.093" stroke={color}/>
                <circle cx="39" cy="493" r="4" transform="rotate(-90 39 493)" fill={color}/>
                <path d="M20.0364 3.74756C20.0364 3.74756 40.344 17.971 45.3885 40.0826C55.0236 82.317 6.27879 74.21 7.42874 120.539C8.16534 150.215 20.0314 155.51 26.8978 182.539C35.9083 218.009 17.0828 258.093 17.0828 258.093" stroke={color}/>
                <circle cx="20" cy="4" r="4" transform="rotate(-90 20 4)" fill={color}/>
            </Swirly>
        </VertNav>
    );
};

export default NavBar;