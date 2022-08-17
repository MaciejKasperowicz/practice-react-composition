import React from 'react';

class Form extends React.Component {
    inputRef = React.createRef();

    render() {

        const { submit } = this.props;
        return (
            <form
                onSubmit={submit}
            >
                <input
                    ref={this.inputRef}
                />
                <input type="submit"

                />
            </form>
        )
    }
}

export default Form;