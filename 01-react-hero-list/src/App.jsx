import React, {Component} from "react";
import List from './components/list'
import './css/index.css'

const data = [
    {
        title: '刺客',
        hero: ['李白', '赵云', '孙悟空']
    },
    {
        title: '法师',
        hero: ['王昭君', '貂蝉', '露娜']
    },
    {
        title: '射手',
        hero: ['公孙离', '伽罗', '虞姬']
    },
]

export default class App extends Component {

    render() {
        return <div className="friend-list">
            {data.map((item, index) => <List data={item} key={index} />)}
        </div>

    }
}