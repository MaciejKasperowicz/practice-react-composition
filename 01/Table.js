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

class Table extends React.Component {
    render() {
        const { data } = this.props;
        console.log(data);
        const style = { "border": "1px solid" };

        return (
            <table style={style}>
                {/* <thead>
                    <tr>
                        {Object.keys(data[0]).map(name => {
                            return <th style={style} key={name}>{name}</th>
                        })}
                        <th style={style}>Kwota do zapłaty</th>
                    </tr>
                </thead> */}
                <TableHeader style={style} data={data} />
                <tbody>
                    {data.map(item => {
                        return (
                            <tr key={item.id}>
                                <td style={style}>{item.id}</td>
                                <td style={style}>{item.name}</td>
                                <td style={style}>{item.price}</td>
                                <td style={style}>{item.quantity}</td>
                                <td style={style}>{item.price * item.quantity}</td>
                            </tr>
                        )
                    })}
                </tbody>
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
            </table>)
    }
}

export default Table;
