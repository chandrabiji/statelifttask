import React, { Component } from 'react'
import Address from './Address'
import OrderInfo from './OrderInfo'
import Summary from './Summary'

export class Order extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            quantity:"",
            address:"",
            productName:""
             
        }
    }

    onOrderInfoChange=(val)=>{
        this.setState({quantity:val})
    }
    checkData=()=>{
        console.log(this.state.quantity)
    }

    onAdressInfoChange=(val)=>{
        this.setState({address:val})
    }

    getProductName= (val)=>{
        this.setState({productName:val})
    }
    
    
    render() {
        return (
            <div>
                <h1>Welcome to product order screen..</h1>
                <hr/>
                <OrderInfo quantity={this.state.quantity} 
                onQualityChange={this.onOrderInfoChange}
                onProductChange={this.getProductName}/>
                <button onClick={this.checkData}>Get Data</button>

                <hr/>

                <Address address={this.state.address} onAddressChange={this.onAdressInfoChange}></Address>

                <hr/>

                <Summary productName={this.state.productName}
                quantity={this.state.quantity}
                address={this.state.address}/>
            </div>
            
        )
    }
}

export default Order
