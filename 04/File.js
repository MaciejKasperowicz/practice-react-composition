import React from 'react';

class File extends React.Component {
    inputRef = React.createRef();

    render() {
        const { submit } = this.props;

        return (
            <form onSubmit={submit}>
                <input type="file" multiple ref={this.inputRef} />
                <br />
                <input type="submit" />
            </form>
        )
    }
}

export default File;