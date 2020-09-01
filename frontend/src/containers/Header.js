import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header>
                <section className="container clearfix">
                    <div className="contact-info ">
                        <h1>Dominic Groshong</h1>
                        <p><a href="mailto:&#103;&#114;&#111;&#115;&#104;&#111;&#110;&#100;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">&#103;&#114;&#111;&#115;&#104;&#111;&#110;&#100;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;</a></p>
                        <p><a href="tel:&#053;&#048;&#051;&#053;&#054;&#057;&#050;&#050;&#048;&#054;">&#053;&#048;&#051;.&#053;&#054;&#057;.&#050;&#050;&#048;&#054;</a></p>
                    </div>
                </section>
            </header>
        )
    }
}

export default Header;
