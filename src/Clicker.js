import React, { Component } from 'react';
import logo from './logo.svg';
import './Clicker.css';

class Header extends Component {
    render() {
        const title = this.props.title;
        return(
            <div class = "cls_skClickerHeaderWrapper">
                <div class = "cls_skClickerHeader">
                    {title}
                </div>
            </div>
        );
    }
}

class Display extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const count = this.props.counter;
        return (
            <div class = "cls_skCounterWrap">
                <div class = "cls_skCounter">
                    {count}
                </div>
            </div>
        );
    }
}

class Modifier extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this)
    }
    handleInputChange(event) {
        this.props.onInpChange(event);
    }
    render() {
        const purpose = this.props.purpose;
        const id = "id_skMod" + purpose;
        return (
            <div class = "cls_skModifyHeader" id = {id} name = {purpose} onClick={this.handleInputChange}>
                <div class = "cls_skModify"></div>
            </div>
        );
    }
}

class Clicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        var value = this.state.count;
        const name = event.target.getAttribute("name");
        if(name == "increment")
        {
            value++;
        }
        else if(name == "decrement")
        {
            value--;
        }
        else 
        {
            value = 0;
        }
        this.setState({
            count: value
        });
    }
    render() {
        return (
            <div class = "cls_skClickerWrapper">
                <Header title = "React Clicker"/>
                <div class = "cls_skContentWrap">
                    <Display counter = {this.state.count} />
                    <div class = "cls_skModifierWrap">
                        <Modifier purpose = "increment" onInpChange = {this.handleInputChange}/>
                        <Modifier purpose = "reset"  onInpChange = {this.handleInputChange}/>
                        <Modifier purpose = "decrement"  onInpChange = {this.handleInputChange}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Clicker;