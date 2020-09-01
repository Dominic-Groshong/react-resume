import React from 'react';
import { API_URL } from 'constants/index';
import axios from 'axios'

class Jobs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: []
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

                const jobs = data.jobs.map((j, i) => (
                    <div className="job" key={i}>
                        <h3>{j.value.company_name}</h3>
                        <p className="jtitle">{j.value.job_title}</p>
                        <p>{j.value.location}<br />
                            {j.value.start_date} - {j.value.end_date}</p>
                        <p>{j.value.current}</p>
                        <span dangerouslySetInnerHTML={{ __html: j.value.job_discription }}></span>
                    </div>
                ))

                this.setState({
                    jobs
                })
            })

    }

    componentDidMount() {
        this.getData()
    }

    render() {
        return (
            <section className="job-list">
                <h2>Previous Experience</h2>
                {this.state.jobs}
            </section>
        )
    }
}

export default Jobs;
