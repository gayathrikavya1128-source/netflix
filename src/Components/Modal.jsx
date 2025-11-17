// Modal.js
import React from 'react';
import './Modal.css';

function Modal({ show, children, close }) {
    if (!show) return null;
    
    return (
        <div className='modal-overlay' onClick={close}>
            <div className='modal-content' onClick={(e) => { e.stopPropagation() }}>
                {children}
            </div>
        </div>
    );
}

export default Modal;