import React, {Component} from "react";

export  default class List extends  Component{
    state = {
        isShow: false
    }
    handleClick = () =>{
        this.setState({
            isShow: !this.state.isShow
        })
    }
    render() {
        const {isShow} = this.state;
        let {title, hero} = this.props.data;

        return <dl className={isShow?'expanded friend-group':'friend-group'} >
            <dt onClick={this.handleClick}>{title}</dt>
            {hero.map((item, index)=><dd key={index}>{item}</dd>)}
        </dl>
    }
}