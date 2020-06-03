import React from 'react';

const RESET_VALUES = {id: '', category: '', price: '', stocked: false, name: ''};

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.state = {
      product: Object.assign({}, RESET_VALUES),
      errors: {},
    };
  }
  handleChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState((prevState) => {
      prevState.product[name] = value;
      return { product: prevState.product };
    });
  }
  handleSave(e) {
    const errorMessages = [];
    if(this.state.product.name === ""){
      errorMessages.push("Please enter the name");
    }

    else if(this.state.product.category === ""){
      errorMessages.push("Please enter the Category");
    }

    else if(this.state.product.price === ""){
      errorMessages.push("Please enter the price");
    }

 
    else{
    this.props.onSave(this.state.product);
    this.setState({
      product: Object.assign({}, RESET_VALUES),
      errors: {}
    });
    e.preventDefault();
  }
    
  }
  render() {
    return (
      <form>
        <h3>Enter a new product</h3>
        <p>
          <label>
            Name
            <br />
            <input type="text" name="name" onChange={this.handleChange} value={this.state.product.name}  required = 'true'/>
          </label>
        </p>
        <p>
          <label>
            Category
            <br />
            <input type="text" name="category" onChange={this.handleChange} value={this.state.product.category} required = 'true' />
          </label>
        </p>
        <p>
          <label>
            Price
            <br />
            <input type="number" pattern="[0-9]*" inputmode="numeric" name="price" onChange={this.handleChange} value=  { this.state.product.price} required = 'Please enter the numeric value'/>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" name="stocked" onChange={this.handleChange} checked={this.state.product.stocked}/>
            &nbsp;In stock?
          </label>
        </p>
        <input type="submit" value="Save" className="btn btn-primary" onClick={this.handleSave}/>
      </form>
    );
  }
}

export default ProductForm;