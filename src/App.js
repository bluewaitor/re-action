import React, {Component} from 'react';
import { Link } from 'react-router';

class App extends Component {
    render() {
        return (
            <div>
                <Link to="/">首页</Link>
                <Link to="/about">关于</Link>
                <div>
                    Hello Re-action
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default App;