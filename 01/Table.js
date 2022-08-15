import React from 'react';

const TableHeader = (props) => {
    const { data, style } = props
    return (
        <thead>
            <tr>
                {Object.keys(data[0]).map(name => {
                    return <th style={style} key={name}>{name}</th>
                })}
                <th style={style}>Kwota do zapłaty</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const { data, style } = props

    return (
        <tbody>
            {data.map(item => (
                <TableRow item={item} style={style} key={item.id} />
            ))}
        </tbody>
    )
}

const TableRow = (props) => {
    const { item, style } = props

    return (
        <tr>
            <td style={style}>{item.id}</td>
            <td style={style}>{item.name}</td>
            <td style={style}>{item.price}</td>
            <td style={style}>{item.quantity}</td>
            <td style={style}>{item.price * item.quantity}</td>
        </tr>
    )
}

const TableFooter = props => {
    const { data } = props

    return (
        <tfoot>
            <tr>
                <td>Suma do zapłaty za wszystkie produkty</td>
                <td>
                    {data.reduce((acc, curr) => {
                        return acc + curr.price * curr.quantity
                    }, 0)}
                </td>
            </tr>
        </tfoot>
    )
}

class Table extends React.Component {
    render() {
        const { data } = this.props;
        console.log(data);
        const style = { "border": "1px solid" };

        return (
            <table style={style}>
                <TableHeader style={style} data={data} />
                <TableBody style={style} data={data} />
                <TableFooter data={data} />
            </table>)
    }
}

export default Table;
