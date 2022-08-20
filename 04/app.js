import React from 'react';
import ReactDOM from 'react-dom';
import { v4 as uuidv4 } from 'uuid';

import File from './File';
import List from './List';

class App extends React.Component {
    fileRef = React.createRef();

    state = {
        filesList: [],
    }

    handleSubmit = e => {
        e.preventDefault();
        const inputRef = this.fileRef.current.inputRef.current;
        console.log(inputRef.files[0])
        const inputRefFile = inputRef.files[0];
        if (!inputRefFile) return




        function readFile(file) {
            return new Promise((resolve, reject) => {
                const fileReader = new FileReader();
                fileReader.onload = () => {
                    resolve(fileReader.result);
                };
                fileReader.readAsText(file)
            })
        }

        async function createData() {
            const content = await readFile(inputRefFile);
            const { name, size } = inputRefFile;
            return {
                id: uuidv4(),
                name,
                size,
                content
            }
        }

        (async () => {
            const newData = await createData()
            this.setState(prevState => {
                return {
                    filesList: [...prevState.filesList, newData]
                }
            })
        })()
        // this.setState(prevState => {
        //     const newData = createData()
        //     return {
        //         filesList: [...prevState.filesList, newData]
        //     }
        // })
    }


    render() {
        const { filesList } = this.state;
        return (
            <section>
                <File ref={this.fileRef} submit={this.handleSubmit} />
                <List data={filesList} />
            </section>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));