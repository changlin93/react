import React, { Component } from 'react'

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
