const OneProduct = (props) => {
  const buyItem = (price) => {
    if (props.wallet < price) {
      return;
    }
    props.setWallet(props.wallet - price);
  };

  return (
    <tr>
      <th scope="row">{props.id + 1}</th>
      <td>{props.data.id}</td>
      <td>{props.data.name}</td>
      <td>{props.data.price}</td>
      <td>{props.data.dateOfManufacture}</td>
      <td>{props.data.description}</td>
      <td>
        <button
          className="btn btn-info"
          onClick={() => buyItem(props.data.price)}
        >
          Buy
        </button>
      </td>
    </tr>
  );
};

export default OneProduct;
