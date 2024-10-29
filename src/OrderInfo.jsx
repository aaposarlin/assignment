function OrderInfo({product, quantity, totalPrice}) {
    return (
        <div className="order-summary">
            <b>Order info</b>
            <table>
                <thead>
                    <tr>
                        <th><b>Prdouct</b></th>
                        <th><b>Quantity</b></th>
                        <th><b>Total</b></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{product}</td>
                        <td>{quantity}</td>
                        <td>{totalPrice}€</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default OrderInfo;