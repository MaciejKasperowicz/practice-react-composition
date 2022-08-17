import React from 'react';

import ListItem from './ListItem';

function List(props) {
    const { items } = props;
    return (
        <ul>
            {items.map((item, i) => <ListItem item={item} key={i} />)}

        </ul>
    )
}

export default List;