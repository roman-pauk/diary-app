import React, { Component } from 'react'

import AppBar from './components/Dumb/AppBar/AppBar'
import ItemsWrap from './components/Dumb/ItemsWrap'
import CommentsWrap from './components/Dumb/CommentsWrap'

class App extends Component {
    render() {
        return (
            <div className="d-flex">
                <AppBar />
                <div className="d-flex app-wp">
                    <ItemsWrap />
                    <CommentsWrap />
                </div>
            </div>
        );
    }
}

export default App;
