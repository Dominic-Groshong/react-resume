import React from 'react';

import Header from 'containers/Header';
import Content from 'containers/Content';
import Footer from 'containers/Footer';

class Layout extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <main>
                    <Content />
                </main>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Layout;
