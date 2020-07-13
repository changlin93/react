import React, { Component } from 'react';
import Li from './components/li';
import Add from './components/add'
import './css/index.css';

export default class App extends Component {
    state = {
        data: []
    }


    //添加数据
    addData = (newContent) => {
        let {data} = this.state;
        data.unshift({
            id: Date.now(),
            ...newContent
        });
        this.setState({
            data
        });
    }

    //删除数据
    removeData = (id) => {
        const {data} = this.state;
        this.setState({
            data:data.filter(item=>item.id!==id)
        })
    }

    render() {
        const { data } = this.state;
        return (
            <section className="wrap">
                <h2 className="title">留言板</h2>
                <Add addData={this.addData} />
                <ul className="messageList">
                    {
                        data.length > 0 && data.map(item => <Li 
                            key={item.id} 
                            datas={item} 
                            removeData={this.removeData} 
                        />)
                    }
                </ul>
            </section>
        )
    }
}
