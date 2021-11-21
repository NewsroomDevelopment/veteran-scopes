import React, { useEffect } from 'react';
import styled from 'styled-components';
import { device } from '../device';

const BackButton = styled.button`
    cursor: pointer;
    width: fit-content;
    padding: 1rem 2rem;
    background: transparent;
    border: 3px solid white;
    color: white;
    font-weight: bold;
    font-size: 1rem;
    margin: 2rem;

    :hover {
        background: white;
        color: #251282;
    }
`;

const Wrapper = styled.div`
    background: #251282;
`;

const Text = styled.div`
    color: white;
    text-align: center;
    padding-bottom: 5rem;
`;

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    text-align: left;
    justify-content: center;

    @media ${device.tablet} {
        justify-content: space-evenly;
    }
`;

const SubDiv = styled.div`
    width: 75vw;

    @media ${device.tablet} {
        width: fit-content;
    }
`;

const CreditsPage = () => {
    useEffect(() => {
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'auto'
        });
    });

    return (
    <>
        <Wrapper>
            <a href="/">
                <BackButton>
                    BACK
                </BackButton>
            </a>
            <Text>
                <h1>CREDITS</h1>

                <Row>
                    <SubDiv>
                        <h2>Corporate Board</h2>
                        <p>Sarah Braka, Editor in Chief</p>
                        <p>Elizabeth Karpen, Managing Editor</p>
                        <p>Tamarah Wallace, Publisher</p>
                    </SubDiv>
                </Row>
                <h1>Content</h1>
                <Row>
                    <SubDiv>
                        <div>
                            <h3>Opinion</h3>
                            <p>Ryan Oden, Editorial Page Editor</p>
                            <p>Senem Yurdakul, Deputy Editorial Page Editor</p>
                            <p>Lily Nathanson, Deputy Editorial Page Editor</p>
                            <p>Karlton Gaskin, Deputy Editorial Page Editor</p>
                            <p>Sean Conlon, Senior Associate Editorial Page Editor</p>
                            <p>Eki Uzamere, Associate Editorial Page Editor</p>
                            <p>Isabella Inouye, Associate Editorial Page Editor</p>
                            <p>Julina Novarr, Associate Editorial Page Editor</p>
                            <p>Julien Roa, Associate Editorial Page Editor</p>
                            <p>Lauren Zhou, Associate Editorial Page Editor</p>
                            <p>Maria Rice, Associate Editorial Page Editor</p>
                            <p>Melanie Cheung, Associate Editorial Page Editor</p>
                            <p>Michaela Fleischer, Associate Editorial Page Editor</p>
                            <p>Milene Klein, Associate Editorial Page Editor</p>
                            <p>Ruth Dejene, Associate Editorial Page Editor</p>
                            <p>Sara Chough, Associate Editorial Page Editor</p>
                            <p>Sydney Goldson, Associate Editorial Page Editor</p>
                            <p>Tori Sproat, Associate Editorial Page Editor</p>
                            <p>Celeste Ramirez, Associate Editorial Page Editor</p>
                        </div>
                        <div>
                            <h3>Photo</h3>
                            <p>Beatrice Shlansky, Photo Editor</p>
                            <p>Millie Felder, Deputy Photo Editor</p>
                            <p>Samantha Camacho, Deputy Photo Editor</p>
                            <p>Kate Della Pietra, Deputy Photo Editor</p>
                            <p>Rommel Nunez, Deputy Photo Editor</p>
                            <p>Elisabeth McLaughlin, Deputy Photo Editor</p>
                            <p>Aliya Schneider, Senior Staff Photographer</p>
                            <p>Gabi Levy, Staff Photographer</p>
                            <p>Caitlyn Buckley, Staff Photographer</p>
                            <p>Princeton Huang, Staff Photographer</p>
                            <p>Shannon Binns, Columbia Daily Spectator</p>
                            <p>Kat St. Martin, Columbia Daily Spectator</p>
                            <p>Annie Son, Columbia Daily Spectator</p>
                        </div>
                        <div>
                            <h3>Product Design</h3>
                            <p>Cindy Espinosa, Head of Product</p>
                            <p>Sagarika Sharma, Product Manager</p>
                            <p>Ray Banke, Lead Product Designer</p>
                            <p>Caroline Mao, Product Designer</p>
                        </div>
                    </SubDiv>
                    <SubDiv>
                    <div>
                            <h3>Illustrations</h3>
                            <p>Cover Illustration: Taylor Yingshi, Staff Illustrator</p>
                            <p>Brenda Huang, Illustrations Editor</p>
                            <p>Yingjie Wang, Deputy Illustrations Editor</p>
                            <p>Liza Evseeva, Deputy Illustrations Editor</p>
                            <p>Carlos Ochoa, Deputy Illustrations Editor</p>
                            <p>Ashley Jiao, Deputy Illustrations Editor</p>
                            <p>Tina Wang, Staff Illustrator</p>
                            <p>Katya Reichart, Staff Illustrator</p>
                            <p>Magan Chin, Staff Illustrator</p>
                            <p>Natalie Tak, Staff Illustrator</p>
                            <p>Sadia Sharif, Staff Illustrator</p>
                            <p>Marion Kamara, Staff Illustrator</p>
                            <p>Tejasri Vijayakumar, Staff Illustrator</p>
                            <p>Ji Yoon Sim, Staff Illustrator</p>
                        </div>
                        <div>
                            <h3>Graphics</h3>
                            <p>Jessica Li, Graphics Editor</p>
                            <p>Eleanor Lin, Columbia Daily Spectator</p>
                            <p>Amanda Cassel, Columbia Daily Spectator</p>
                            <p>Andrada Nicolae, Columbia Daily Spectator</p>
                        </div> 
                        <div>
                            <h3>Spectrum</h3>
                            <p>Ariana Novo, Spectrum Editor</p>
                            <p>Swethaa Suresh, Deputy Spectrum Editor</p>
                            <p>Haley Long, Deputy Spectrum Editor</p>
                            <p>Aliza Rabinovitz, Deputy Spectrum Editor</p>
                            <p>Emma Cho, Deputy Spectrum Editor</p>
                            <p>Caroline Somers, Staff Writer</p>
                            <p>Kenza Chraibi, Staff Writer</p>
                            <p>Nour Kandil, Staff Writer</p>
                            <p>Charlotte Wu, Staff Writer</p>
                            <p>Fatma Al Aryani, Staff Writer</p>
                            <p>Kylie Gall, Staff Writer</p>
                            <p>Ross O'Brien, Staff Writer</p>
                        </div>
                        <div>
                            <h3>A&E</h3>
                            <p>Noah Sheidlower, A&E Editor</p>
                            <p>Katie Levine, A&E Deputy Editor</p>
                            <p>Olivia Doyle,  A&E Deputy Editor</p>
                            <p>Bella Druckman, A&E Deputy Editor</p>
                            <p>Sophie Craig, A&E Deputy Editor</p>
                            <p>Isabella Farfan, A&E Staff Writer</p>
                            <p>Daniela Miranda, A&E Staff Writer</p>
                            <p>Jane Loughman, A&E Staff Writer</p>
                            <p>Clare Donaldson, A&E Staff Writer</p>
                            <p>Emma Danon, A&E Staff Writer</p>
                            <p>Liz Radway, A&E Staff Writer</p>
                            <p>Julia Tong, A&E Staff Writer</p>
                            <p>Emily Chen, A&E Staff Writer</p>
                        </div>
                    </SubDiv>
                    <SubDiv>
                        <div>
                            <h3>Copy</h3>
                            <p>Emma Bradbury, Head Copy Editor</p>
                            <p>Kaylene Chong, Deputy Copy Editor</p>
                            <p>Vincenzo DiNatale, Deputy Copy Editor</p>
                            <p>Mabry Griffin, Deputy Copy Editor</p>
                            <p>Harry Shi, Deputy Copy Editor</p>
                            <p>Robyn Fohouo, Deputy Copy Editor</p>
                            <p>Olivia Vella, Deputy Copy Editor</p>
                            <p>Renuka Balakrishnan, Associate Copy Editor</p>
                            <p>Sam Barnett, Associate Copy Editor</p>
                            <p>Rachel Borshchenko, Associate Copy Editor</p>
                            <p>Katherine Carraway, Associate Copy Editor</p>
                            <p>Alia Derriey, Associate Copy Editor</p>
                            <p>Madison Guzy, Associate Copy Editor</p>
                            <p>Jacob Kang, Associate Copy Editor</p>
                            <p>Maria Levit, Associate Copy Editor</p>
                            <p>Jonah Pitkowsky, Associate Copy Editor</p>
                            <p>Noyna Roy, Associate Copy Editor</p>
                            <p>Leif Wood, Associate Copy Editor</p>
                            <p>Safia Aladlouni, Preslotter</p>
                            <p>Adam Burns, Preslotter</p>
                            <p>Ronit Dhulia, Preslotter</p>
                            <p>Ana Eveleigh, Preslotter</p>
                            <p>Emma Grungold, Preslotter</p>
                            <p>Joyce Liu, Preslotter</p>
                            <p>Willa Nagy, Preslotter</p>
                            <p>Grace O’Malley, Preslotter</p>
                            <p>Maya Platek, Preslotter</p>
                            <p>Sadie Rochman, Preslotter</p>
                            <p>Meera Sahney, Preslotter</p>
                            <p>Yvin Shin, Preslotter</p>
                            <p>Lanah Wyne, Preslotter</p>
                            <p>Natarsha Yan, Preslotter</p>
                            <p>Bonnie Yang, Preslotter</p>
                        </div>
                        <div>
                            <h3>Revenue</h3>
                            <p>	Haru Yamanaka, Revenue Manager	</p>
                            <p>Vilanna Wang, Revenue Manager</p>
                            <p>Rachel Forest, Revenue Manager</p>
                            <p>Anushka Thorat, Revenue Manager</p>
                            <p>Suheyla Tozan, Revenue Associate</p>
                            <p>Kevin Jiang, Revenue Associate</p>
                            <p>Helen Hung, Revenue Associate</p>
                            <p>Angela Chea, Revenue Associate</p>
                            <p>Jamin Feng, Revenue Associate</p>
                            <p>Tyler Shern, Revenue Associate</p>
                            <p>Kris Packauskas, Revenue Associate</p>
                            <p>Lisa Cardoso, Revenue Associate</p>
                            <p>Ece Hasdemir, Revenue Associate</p>
                            <p>Ian Civiletti, Revenue Associate</p>
                            <p>Mike Kim, Revenue Associate</p>
                            <p>April Lin, Revenue Associate</p>
                            <p>Amanda Teramihardja, Revenue Associate</p>
                        </div> 
                    </SubDiv>
                </Row>
            </Text>
        </Wrapper>
    </>
)};

export default CreditsPage;