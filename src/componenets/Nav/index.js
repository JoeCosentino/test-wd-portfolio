import React from 'react';
import '../../index.css'
import './nav.css'

function Nav(props) {

    const {
        contactSelected,
        setContactSelected,
        portfolioSelected,
        setPortfolioSelected,
        aboutSelected,
        setAboutSelected,
        resumeSelected,
        setResumeSelected
    } = props;


    return (
        <section className='header'>
            <h2>
                <a href='https://joecosentino.github.io/test-wd-portfolio/'>Giuseppe Cosentino</a>
            </h2>
            <ul>
                <li className={aboutSelected && 'active'}>
                    <span onClick={() => {
                        setAboutSelected(true)
                        setContactSelected(false)
                        setResumeSelected(false)
                        setPortfolioSelected(false)
                    }}>About</span> 
                </li>
                <li className={portfolioSelected && 'active'}>
                    <span onClick={() => {
                        setPortfolioSelected(true)
                        setAboutSelected(false)
                        setContactSelected(false)
                        setResumeSelected(false)
                    }}
                        >Portfolio</span>
                </li>
                <li className={contactSelected && 'active'}>
                    <span onClick={() => {
                    setContactSelected(true)
                    setAboutSelected(false)
                    setResumeSelected(false)
                    setPortfolioSelected(false)
                    }} >Contact</span>
                </li>
                <li className={resumeSelected && 'active'}>
                    <span onClick={() => {
                        setResumeSelected(true)
                        setPortfolioSelected(false)
                        setAboutSelected(false)
                        setContactSelected(false)
                    }}>Resume</span>
                </li>
            </ul>
        </section>
    )
}

export default Nav;