import React, { Component } from 'react'

export default class Li extends Component {
    render() {
        const {datas, removeData} = this.props;
        const {id, nickname, content} = datas;
        console.log(datas)
        return (
            <li>
                <h3>{nickname}</h3>
                <p>{content}</p>
                <button onClick={()=>removeData(id)}>删除</button>
            </li>
        )
    }
}
