import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from 'react';
import styled from 'styled-components';

import { ModalContext } from '../../Root';

const Modal = ({ children, onCloseEvent, disabledCloseButton = false }) => {

    const { setModal } = useContext(ModalContext);

    return <StyledModal>
            { !disabledCloseButton ? <FontAwesomeIcon icon={faXmark} onClick={() => {
                setModal(null);
                onCloseEvent();
                }}
            /> : null }
            { children }
        </StyledModal>
}

const StyledModal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px 10px 30px 10px;
    z-index: 1;
    animation: fade-in .3s ease-in-out;
    overflow: auto;

    @keyframes fade-in{
        from{
            opacity: 0;
            transform: translate(-50%, -55%);
        }
        to{
            opacity: 1;
            transform: translate(-50%, -50%);
        }
    }

    svg{
        position: absolute;
        top: 10px;
        right: 10px;
        width: 30px;
        height: 30px;
    }

    background: var(--black-background);

    min-width: 300px;
    max-height: 70%;
    border: 2px solid var(--white);
    overflowY: auto;
`

export default Modal;