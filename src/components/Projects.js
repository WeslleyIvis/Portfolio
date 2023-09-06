import React from 'react';
import Slider from './Slider';

const Projects = (projects) => {
    return (
        <section className="content-project">
            <h1 className="h1-sub-title">My Projects</h1>
            {/* <ul className="select-slider">
                <li className="selected">
                    <p>All Projects</p>
                </li>
                <li>
                    <p>UI/UX Design</p>
                </li>
            </ul> */}

            {projects ? <Slider data={projects} /> : null}
        </section>
    );
};

export default Projects;
