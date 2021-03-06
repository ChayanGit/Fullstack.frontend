
import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {message: ''};
    }

    componentDidMount() {
        const url = 'http://localhost:30001/greeting';
        axios.get(url).then(response => {
            console.log('response : ');
            console.log(response);
            this.setState({message: response.data.content});
        }).catch(error => {
            console.log('error : ');
            console.log(error);
        });
    }

    render() {
        return (
            <div className="App">
                Message : {this.state.message}
            </div>
        );
    }
}

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
