import React from 'react';
import Greeter from './Greeter'

export default class GreeterComponent extends React.Component<{ userName: string }>{
    // name: string;
    // constructor(props:{userName:string}) {
    //     super(props)
    //     this.name = props.userName || 'Anonymous';
    // }

    render() {
        // Below code includes amended line Steve mentioned - is this.name in lab guide
	    let greeting:string = new Greeter(this.props.userName).getGreeting();
        return <div id='greet'>Message: {greeting}</div>;
    }
}
