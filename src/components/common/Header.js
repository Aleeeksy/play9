import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {Link} from "react-scroll";
import {sections} from "../tutorial/sectionData";

const Header = ({history}) => {
    const [tutorialSectionIndex, setTutorialSectionIndex] = useState(-1);
    const activeStyle = {color: "#F15B2A"};
    const tutorialSectionIds = sections.map((section) => section.id);
    let isTutorial = window.location.pathname === "/tutorial";

    useEffect(() => {
        if(tutorialSectionIds[tutorialSectionIndex]) {
            history.push(`#${tutorialSectionIds[tutorialSectionIndex]}`)
        }
    }, [tutorialSectionIndex])

    return (
        <nav className="navbar-expand-md navbar-light bg-light fixed-top">
            <NavLink to="/" activeStyle={activeStyle} onClick={() => isTutorial = false} exact>Game</NavLink>{" | "}
            <NavLink to="/tutorial" activeStyle={activeStyle} onClick={() => isTutorial = true} exact>Tutorial</NavLink>
            {
                isTutorial
                    ? <div style={{float: "right"}}>
                        <button className="btn btn-link" disabled={tutorialSectionIndex <= 0}>
                            <Link
                                to={tutorialSectionIds[tutorialSectionIndex - 1] ? tutorialSectionIds[tutorialSectionIndex - 1] : ""}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={() => setTutorialSectionIndex(tutorialSectionIndex - 1)}
                            >
                                Previous section
                            </Link>
                        </button>
                        <button className="btn btn-link" disabled={tutorialSectionIndex === tutorialSectionIds.length - 1}>
                            <Link
                                to={tutorialSectionIds[tutorialSectionIndex + 1] ? tutorialSectionIds[tutorialSectionIndex + 1] : ""}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={() => setTutorialSectionIndex(tutorialSectionIndex + 1)}
                            >
                                Next section
                            </Link></button>
                    </div>
                    : <></>
            }
        </nav>
    );
}

export default Header