import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Modal extends Component {
	render() {
		const { modalVisible, closeModal } = this.props;
		const visible = modalVisible ? "is-visible" : "";

		return (
			<div id="main-modal" className={`modal modal-bg ${visible}`} onClick={closeModal} >
	            <div className="modal-body">
	                <div className="modal-content">
	                	<h1 className="u-accent-primary">OOPS!</h1>
	                	<p>We detected that you are connected to wrong Ethereum Network or you don't have MetaMask installed. Please change your network or install MetaMask. For more information please visit our <Link to="/faq" className="linker" onClick={closeModal}>FAQ</Link>.</p>      
	                </div>
	                <div className="modal-close" onClick={closeModal}>
	                    <span className="close"></span>
	                </div>
	            </div>
	        </div>
		);
	}
}
