import React from 'react';

import Aboutme from '../components/Aboutme';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

const Main = () => {
    const [data, setData] = React.useState(null);

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
            setData(data);
        } catch (err) {
            console.log({ err: err });
        }
    };

    return (
        <main>
            <Aboutme />
            {data ? (
                <>
                    <Projects data={data.projects} />
                    <Skills data={data.skills} />
                </>
            ) : null}
        </main>
    );
};

export default Main;
