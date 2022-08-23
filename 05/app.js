import React from 'react';
import ReactDOM from 'react-dom';

import Textarea from './Textarea';

class App extends React.Component {
    componentTARef = React.createRef();

    state = {
        text: ''
    }

    getTextArea = () => {
        return this.componentTARef.current.textAreaRef.current
    }

    getOffsetHeight = (el) => {
        return el.offsetHeight
    }

    getScrollHeight = (el) => {
        return el.scrollHeight
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        const textarea = this.getTextArea();
        const offsetHeight = this.getOffsetHeight(textarea)
        const scrollHeight = this.getScrollHeight(textarea);

        if ((scrollHeight > offsetHeight) && offsetHeight < 100) {
            return { resize: true }
        }
        return null


    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        const textarea = this.getTextArea();

        const scrollHeight = this.getScrollHeight(textarea);

        if (snapshot && snapshot.resize) {
            textarea.style.height = scrollHeight + "px"
        }
    }

    handleChange = () => {
        const textareaValue = this.getTextArea().value;

        this.setState(() => {
            return { text: textareaValue }
        })

    }

    render() {
        const { text } = this.state;
        return (
            <Textarea content={text} ref={this.componentTARef} onChange={this.handleChange} />
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));