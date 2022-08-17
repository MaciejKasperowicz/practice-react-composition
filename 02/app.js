import React from 'react';
import ReactDOM from 'react-dom';

import List from './List';
import Form from './Form';

class App extends React.Component {
    formRef = React.createRef();

    state = {
        usersList: [],
    }

    handleSubmit = e => {
        e.preventDefault();
        const inputRef = this.formRef.current.inputRef.current;
        const inputRefValue = inputRef.value
        const copiedInputRefValue = inputRefValue

        this.setState(prevState => {
            return {
                usersList: [...prevState.usersList, copiedInputRefValue]
            }
        }
        )
        inputRef.value = "";

    }

    render() {
        const { usersList } = this.state;
        return (
            <section>
                <Form submit={this.handleSubmit} ref={this.formRef} />
                <List items={usersList} />
            </section>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));