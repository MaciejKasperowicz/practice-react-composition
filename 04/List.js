import React from 'react';

class List extends React.Component {
    render() {
        const { data } = this.props;
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
                    {list}
                </ul>

            </div>
        )
    }
}

export default List;