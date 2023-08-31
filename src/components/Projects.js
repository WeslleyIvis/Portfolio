import React from 'react';

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

            setDataProjects(data);
            console.log(dataProjects);
        } catch (err) {
            console.log({ err: err });
        }
    };

    return (
        <section className="content-project">
            <h1>My Projects</h1>
            <ul>
                <li>All Projects</li>
                <li>UI/UX Design</li>
            </ul>

            {dataProjects ? (
                <div>
                    {dataProjects.map((element) => {
                        return (
                            <div
                                key={element.name}
                                style={{
                                    background: `url(${element.img})`,
                                }}
                            >
                                <div
                                    style={{
                                        background: 'rgba(0, 0, 0, 0.82)',
                                    }}
                                >
                                    <h3>{element.name}</h3>
                                    <p>{element.descrition}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : null}
            {dataProjects ? (
                <div>
                    <div>
                        {dataProjects.map((node) => {
                            return <span value="">O</span>;
                        })}
                        <button>SETA </button>
                        <button>SETA</button>
                    </div>
                </div>
            ) : null}
        </section>
    );
};

export default Projects;
