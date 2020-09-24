import React from "react";
import PropTypes from "prop-types";


const Section = ({title, content, id, imageName}) => {
    return (
        <div>
            <div className="section-content" id={id}>
                <h4>{title}</h4>
                {
                    imageName && <img src={require(`../../resources/images/${imageName}`)} alt={title}/>
                }
                <p>{content}</p>
            </div>
        </div>
    );
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    imagePath: PropTypes.string
}

export default Section;