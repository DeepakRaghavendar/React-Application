import React from 'react';
import './ProductRow.css';
import 'bootstrap/dist/css/bootstrap.css';


class ProductRow extends React.Component {

  constructor(props) {
    super(props);
    this.destroy = this.destroy.bind(this);
  }
  destroy() {
    this.props.onDestroy(this.props.product.id);
  }
  render() {
    return (
      <tr>
        <td>
          <span className={this.props.product.stocked ? '' : 'ProductRow-out-of-stock'}>
            {this.props.product.name}
          </span>
        </td>
        <td>
           {this.props.product.price}
        </td>
        <td>
           <button class="btn btn-danger" onClick={this.destroy}>Delete</button>
        </td>
      </tr>
    );
  }
}

export default ProductRow;