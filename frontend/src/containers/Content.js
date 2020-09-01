import React from 'react';

import Jobs from '../components/JobsComponent';
import Schools from '../components/SchoolsComponent';
import Skills from '../components/SkillsComponent';


class Content extends React.Component {
    render() {
        return (
            <section className="container">
                <section className="row">
                    <section className="col-md-6">
                        <Jobs />
                    </section >
                    <section className="col-md-6">
                        <Schools />
                        <Skills />
                    </section>
                </section>
            </section>
        )
    }
}

export default Content;
