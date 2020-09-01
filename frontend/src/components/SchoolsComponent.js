import React from 'react';
import { API_URL } from 'constants/index';
import axios from 'axios'

class Schools extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            schools: []
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

                const schools = data.schools.map((j, i) => (
                    <div className="school" key={i}>
                        <h3>{j.value.degree}</h3>
                        <p>{j.value.school_name} - {j.value.location}<br />
                            {j.value.start_date} - {j.value.end_date}</p>
                        <p><strong>Field of study:</strong> {j.value.major}</p>
                    </div>
                ))

                this.setState({
                    schools
                })
            })

    }

    componentDidMount() {
        this.getData()
    }

    render() {
        return (
            <section className="schools-list">
                <h2>Education</h2>
                {this.state.schools}
            </section>
        )
    }
}

export default Schools;
