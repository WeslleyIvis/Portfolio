import React from 'react';
import Slider from './Slider';

const Projects = () => {
    const [dataProjects, setDataProjects] = React.useState([]);

    React.useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('data.json', {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });

            const data = await response.json();
            setDataProjects(data.projects);
        } catch (err) {
            console.log({ err: err });
        }
    };

    return (
        <section className="content-project">
            <h1>My Projects</h1>
            <ul className="select-slider">
                <li className="selected">All Projects</li>
                <li>UI/UX Design</li>
            </ul>

            {dataProjects ? <Slider data={dataProjects} /> : null}
        </section>
    );
};

export default Projects;
