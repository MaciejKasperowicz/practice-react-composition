import React from 'react';

function Category(props) {
    const { children } = props;
    return (
        <>
            <h2>Category</h2>
            <section>
                {children}
            </section>
        </>

    )
}

export default Category;