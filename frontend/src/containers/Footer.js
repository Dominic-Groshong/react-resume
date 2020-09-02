import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <section className="container">
                    <p>©{`${new Date().getFullYear()}`} Dominic Groshong |  All rights reserved  | For more information email me at <a href="mailto:&#103;&#114;&#111;&#115;&#104;&#111;&#110;&#100;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">&#103;&#114;&#111;&#115;&#104;&#111;&#110;&#100;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;</a></p>
                    <p>This site is on GitHub Pages via <a href="https://reactjs.org/" rel="noopener noreferrer" target="_blank">React.js</a>, and being served content via a REST API on a <a href="https://www.djangoproject.com/" rel="noopener noreferrer" target="_blank">Django</a> framework hosted by <a href="http://pythonanywhere.com/" rel="noopener noreferrer" target="_blank">Python Anywhere</a>.</p>
                </section>
            </footer>
        )
    }
}

export default Footer;
