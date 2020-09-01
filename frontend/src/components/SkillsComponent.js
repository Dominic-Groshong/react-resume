import React from 'react';
import { API_URL } from 'constants/index';
import axios from 'axios'

class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: []
        };
    }

    getData() {
        const newURL = API_URL + 'pages/4/?format=json';

        // axios.get(newURL).then((repos) => {
        //     const data = repos.data;
        //     console.log('This is your data', data);
        // });

        axios
            .get(newURL)
            .then(res => {
                const data = res.data

                const skills = data.skills.map((j, i) => (
                    <div className="skill" key={i}>
                        <h3>{j.value.skills_title}</h3>
                        <span dangerouslySetInnerHTML={{ __html: j.value.details }}></span>
                    </div>
                ))

                this.setState({
                    skills
                })
            })

    }

    componentDidMount() {
        this.getData()
    }

    render() {
        return (
            <section className="skills-list">
                <h2>Skills</h2>
                {this.state.skills}
            </section>
        )
    }
}

export default Skills;
