import React from 'react';

class Textarea extends React.Component {
    textAreaRef = React.createRef();


    render() {
        const { onChange } = this.props
        return <textarea
            ref={this.textAreaRef}
            onChange={onChange}

        ></textarea>
    }
}

export default Textarea;