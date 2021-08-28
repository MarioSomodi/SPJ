import React from "react";

class SearchBar extends React.Component{
    handleChange(){
        this.props.onUserInput(this.refs.filterTextInput.value);
    }
    render(){
        return(
            <div>
                <input id="search" type="text" placeholder="Search..." value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange.bind(this)}/>
            </div>
        );
    }
}

class EditableCell extends React.Component{
    render(){
        return(
            <td>
                <input type="text" name={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} onChange={this.props.onProductTableUpdate}/>
            </td>
        );
    }
}

class ProductRow extends React.Component{
    render(){
        return(
            <tr className="eachRow">
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{type: "name", value:this.props.product.name, id:this.props.product.id}}/>
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{type: "price", value:this.props.product.price, id:this.props.product.id}}/>
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{type: "qty", value:this.props.product.qty, id:this.props.product.id}}/>
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{type: "category", value:this.props.product.category, id:this.props.product.id}}/>
                <td><button className="del" type="button" onClick={this.props.onDelEvent}>Delete</button></td>
            </tr>
        );
    }
}

class ProductTable extends React.Component{
    render(){
        var onProductTableUpdate = this.props.onProductTableUpdate;
        var rowDel = this.props.onRowDel;
        var filterText = this.props.filterText;
        var product = this.props.products.map(function(product){
            if(product.name.indexOf(filterText) === -1){
                return;
            }
            return(<ProductRow onProductTableUpdate={onProductTableUpdate} product={product} onDelEvent={rowDel.bind(this, product)} key={product.id}/>)
        });
        return(
            <div>
                <button id="add" type="button" onClick={this.props.onRowAdd}>Add</button>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Qunantity</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product}
                    </tbody>
                </table>
            </div>
        )
    }
}

class Products extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
        this.state.filterText = "";
        this.state.products = [
            {
                id:1,
                category: "PCs",
                price: "500",
                qty:3,
                name:"Nexus X30"
            },
            {
                id:2,
                category: "PCs",
                price: "5050",
                qty:6,
                name:"Nexus X999"
            },            {
                id:3,
                category: "PCs",
                price: "7000",
                qty:9,
                name:"James BOND 007"
            },            {
                id:4,
                category: "PCs",
                price: "500",
                qty:2,
                name:"Liimryin Kon"
            }
        ]
    }
    handleUserInput(filterText){
        this.setState({filterText: filterText});
    };
    handleRowDel(product){
        console.log(product);
        var index = this.state.products.indexOf(product);
        this.state.products.splice(index, 1);
        this.setState(this.state.products);
    }
    handleAddEvent(evt){
        var id = (new Date() + Math.floor(Math.random * 999999)).toString(36);
        var product = {
            id: id,
            name: "",
            price: "",
            category: "",
            qty: ""
        }
        this.state.products.push(product);
        this.setState(this.state.products);
    }
    handleProductTable(evt){
        var item = {
            id: evt.target.id,
            name: evt.target.name,
            value: evt.target.value
        };
        var products = this.state.products.slice();
        var newProducts = products.map(function(product){
            for(var key in product){
                if(key == item.name && product.id == item.id){
                    product[key] = item.value;
                }
            }
            return product;
        });
        this.setState({products:newProducts});
    };
    render(){
        return(
            <div>
                <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
                <ProductTable onProductTableUpdate={this.handleProductTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} products={this.state.products} filterText={this.state.filterText}/>
            </div>
        );
    }
}

export default Products;