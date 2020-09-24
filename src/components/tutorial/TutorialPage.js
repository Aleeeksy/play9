import React from "react";
import Section from "./Section";
import {sections} from "./sectionData";

const TutorialPage = () => {

    return (
        <>
            <h2>Tutorial</h2> <br/>
            {
                sections.map(section =>
                    <Section
                        key={section.id}
                        id={section.id}
                        title={section.title}
                        content={section.content}
                        imageName={section.imageName}
                    />
                )
            }
        </>
    );
}

export default TutorialPage;