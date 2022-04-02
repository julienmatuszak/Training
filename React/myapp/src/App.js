/*import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
    render() {
        return <h2>Hi, I am a Car!</h2>;
    }
}

export default Car;
*/
//this allows the class to be used in other files

import React from 'react';
import ReactDOM from 'react-dom';
import styles from './mystyle.module.css';

class Car extends React.Component{
    render() {
        return <h1 className={styles.bigblue}>Hello Car!</h1>;
    }
}

export default Car;