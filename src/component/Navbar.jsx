import React,{ Component } from 'react';
import { Modal, Button } from 'antd';

class Navbar extends Component{
    state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render(){
    return(
        <React.Fragment>
            <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-right">
            <a class="navbar-brand" href="#">
            <img src="https://drive.google.com/thumbnail?id=1rv7HQd0IG2pDhx7urQ2zB-MuHiSPprE6" /></a>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#">Sell</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Buy</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Finance</a>
                </li>
                </ul>

                {/* AntD Modal Here */}
                <Button type="primary" onClick={this.showModal}>
                Open Modal
                </Button>
                <Modal
                title="Basic Modal"
                visible={this.state.visible}
                footer={null}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                </Modal>
                
            </div>
            </nav>
        </React.Fragment>
    );
  }
}

export default Navbar;