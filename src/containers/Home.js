import React from 'react';
import styled from 'styled-components';

import { device } from '../device';

import Section from './Section';
import CreditsSec from './Credits';
import NavBar from '../components/NavBar';
import WelcomeGraphic from '../components/WelcomeGraphic';
import VerticalNav from '../components/VerticalNav';

import { military } from '../data/military';
import { rotc } from '../data/rotc';
import { podcast } from "../data/podcast";

const Wrapper1 = styled.div`
    background: url(https://backtocampus.s3.amazonaws.com/low_steps.jpg) rgba(37, 18, 130, .45);
    background-blend-mode: multiply;
    background-size: cover;
    background-position: center;
    height: 150vh;

    @media ${device.tablet} {
        height: 175vh;
    }

    @media ${device.laptopS} {
        background: #251282;
        height: fit-content;
    }
`;

const TextWrapper = styled.div`
    margin: auto;
    padding: 1rem;
    width: fit-content;
    text-align: right;

    @media ${device.laptopS} {
        margin-left: 0;
        background: none;
        padding: 0;
        width: inherit;
    }
`;

const Welcome = styled.h1`
    color: white;
    letter-spacing: 1rem;
    font-size: 2.5rem;

    @media ${device.tablet} {
        font-size: 3rem;
        letter-spacing: 4.5rem;
    }

    @media ${device.laptopS} {
        font-size: 5rem;
        position: absolute;
        margin-left: 5vw;
        margin-top: 1rem;
        letter-spacing: 6rem;
    }

    @media ${device.laptop} {
        font-size: 7rem;
    }
`;

const Back = styled.h1`
    color: white;
    font-size: 2.5rem;
    letter-spacing: .75rem;

    @media ${device.tablet} {
        font-size: 3rem;
        letter-spacing: 4rem;
    }

    @media ${device.laptopS} {
        font-size: 5rem;
        margin-top: 25rem;
        position: absolute;
        margin-left: 55vw;
        letter-spacing: 5rem;
    }

    @media ${device.laptop} {
        font-size: 7rem;
        margin-top: 30rem;
    }
`;

const Explore = styled.h1`
    color: white;
    font-size: .75rem;

    @media ${device.tablet} {
        font-size: 1rem;
        margin-right: 4rem;
    }

    @media ${device.laptopS} {
        font-size: 1rem;
        margin-right: inherit;
        margin-top: 32rem;
        position: absolute;
        margin-left: 70vw;
    }

    @media ${device.laptop} {
        font-size: 1rem;
        margin-top: 39rem;
    }
`;

const MobileNavWrap = styled.div`
        display: inherit;
        margin-top: -10rem;
        float: right;

        @media ${device.laptopS} {
            display: none;
        }
`;

const Home = () => (
  <>
    <Wrapper1 id="home">
      <NavBar />
      <TextWrapper>
        <Welcome>WELCOME</Welcome>
        <Back>BACK</Back>
        <Explore>Explore Spectator's Back to Campus Issue</Explore>
        <MobileNavWrap>
          <VerticalNav color="white" current="home" />
        </MobileNavWrap>
      </TextWrapper>
      <WelcomeGraphic />
    </Wrapper1>
    <Section
      id="military"
      header="Military"
      color="#FFC0A5"
      articles={military}
      content = "With nearly 450 veterans currently enrolled at Columbia, the University has more veterans than the rest of the schools in the Ivy League combined. Yet, often, these stories of acclimating to college life often go untold, are lost, as a student veteran lives as “just another person in a sea of students on a college campus,” in the words of Kevin Petersen, GS ’22, a former student veterans representative. To highlight the voices of student veterans and to contextualize Columbia students’ attitudes toward the military, Spec Opinion has curated a selection of op-eds and columns that explore the student veteran experience, as well as students’ attitudes toward the relationship between Columbia and the military. "
    />
    <Section id="rotc" 
        header="ROTC" 
        color="#FFECA5" 
        articles={rotc} 
        content = "Chronicling students’ attitudes toward the military would not be complete without touching on one of the most contentious moments related to the military on campus: the vote to reinstate the Naval Reserve Officers Training Corps. In 1969, fueled by the antagonistic sentiments toward the Vietnam War, the University voted to end ROTC programming on campus. Over time, alternatives emerged: Crosstown ROTC programs provided Columbia students the opportunity to participate in Army and Air Force ROTC programs at Fordham University and Manhattan College, respectively. But it was not until 2011 that Columbia would offer an ROTC program on campus again. This reversal was not without controversy: Six years prior, a vote to reinstate the Columbia NROTC failed, largely due to criticism that the military’s “don’t ask, don’t tell” policy—which forbade gay, lesbian, and bisexual soldiers from serving openly—violated the University’s anti-discrimination policy."
    />
    <Section 
        id="podcast" 
        header="podcast" 
        color="#FFECA5" 
        articles={podcast} 
        />
    <CreditsSec />
  </>
);

export default Home;