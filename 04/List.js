import React from 'react';

class List extends React.Component {
    render() {
        const { data, isError } = this.props;
        // console.log(isError);
        const list = data.map(item => (
            <li key={item.id}>
                <h3>{item.name}</h3>
                <h4>{item.size}</h4>
                <p>{item.content}</p>
            </li>
        ))

        return (
            <div>
                <ul>Lista plików:
                    {!isError ? list : null}
                </ul>
                {isError ?
                    <h3>Wybierz plik TXT</h3>
                    : null
                }
            </div>
        )
    }
}

export default List;