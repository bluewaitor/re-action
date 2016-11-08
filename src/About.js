import React, {Component} from 'react';

class About extends Component {
    render() {
        console.log(this.props.children);
        return (
            <div>
                About
                {this.props.children}
            </div>
        );
    }
}

export default About;