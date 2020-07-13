## 安装依赖并运行项目
```
npm i
npm start
```

实现一个留言板功能：

- 添加留言
- 删除留言



本练习所用知识点：

> 1、受控组件
>
> 2、组件间的通信（父传子、子传父）



搭建项目

```
npx create-react-app message-board
```

构建视图及处理逻辑

```javascript
//App.js
import React, { Component } from 'react';
import Li from './components/li';
import Add from './components/add';
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
        this.setState({ data });
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

```

```javascript
//add.jsx
import React, { Component } from 'react';

export default class Add extends Component {
    state = {
        nickname: '',
        contnet: '',
    }

    
    getNickname = ({ target }) => this.setState({ nickname: target.value });
    getContent = ({ target }) => this.setState({ content: target.value });

    getData = (addData) => {
        const { nickname, content } = this.state;
        if (!nickname.trim()) return alert('昵称不能为空！');
        if (!content.trim()) return alert('内容不能为空！');
        addData({nickname, content});
        this.setState({nickname: '', content: ''})
    }

    render() {
        const { nickname, content } = this.state;
        const {addData} = this.props;
        return (
            <div className="addMessage">
                <input type="text" placeholder="请输入昵称" value={nickname} onChange={(e) => this.getNickname(e)} />
                <textarea placeholder="请输入留言" value={content} onChange={(e) => this.getContent(e)}></textarea>
                <button onClick={() => this.getData(addData)}>提交留言</button>
            </div>
        )
    }
}

```

```
//li.jsx
import React, { Component } from 'react'

export default class Li extends Component {
    render() {
        const {datas, removeData} = this.props;
        const {id, nickname, content} = datas;
        return (
            <li>
                <h3>{nickname}</h3>
                <p>{content}</p>
                <button onClick={()=>removeData(id)}>删除</button>
            </li>
        )
    }
}

```

```css
/*css/index.css*/
body,
h2,
p,
h3 {
    margin: 0;
}
ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
body {
    background: #f3f3f3;
}
.wrap {
    margin: 30px auto 0;
    width: 500px;
    border: 1px solid #ccc;
    background: #fff;
    padding: 10px;
}
.title {
    font: bold 20px/40px "宋体";
    text-align: center;
    color: #333;
}
.addMessage {
    overflow: hidden;
}
.addMessage input {
    margin: 5px auto 0;
    display: block;
    box-sizing: border-box;
    width: 300px;
    height: 40px;
    border-radius: 10px 10px 0 0;
    border:none;
    background: #f3f3f3;
    outline: none;
    padding: 5px 20px;
    font: 14px/20px "宋体";
}
.addMessage textarea {
    margin: auto;
    display: block;
    overflow: hidden;
    box-sizing: border-box;
    resize: none;
    width: 300px;
    height: 100px;
    border-radius:  0 0 10px 10px;
    border:none;
    border-top: 1px solid #999;
    background: #f3f3f3;
    outline: none;
    padding: 5px 20px;
    font: 14px/20px "宋体";
}
.addMessage button {
    display: block;
    margin: 10px auto; 
    width: 300px;
    height: 40px;
    border-radius: 10px;
    border:none;
    background: #f3f3f3;
}
.messageList {
    border-top: 1px solid #ccc;
}
.messageList li {
    margin: 10px auto 0;
    width: 400px;
    border: 1px solid #ccc;
    padding-bottom: 5px;
    overflow: hidden;
}
.messageList h3 {
    font: 14px/30px "宋体";
    padding-left: 10px;
    border-bottom: 1px solid #ccc;
}
.messageList p {
    font: 12px/24px "宋体";
    padding: 5px 15px;
    height: 72px;
    overflow: hidden;
    text-indent: 2em;
}
.messageList button {
    margin-right: 15px;
    float: right;
    font:12px/24px "宋体";
    color: #0066bf;
    cursor: pointer;
    border: none;
    background-color: #fff;
}

```

效果图：

![](E:\kkb\homework\react\02-react-message-board\README.assets\image.png)

