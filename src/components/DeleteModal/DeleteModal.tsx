import React from 'react'
import { Modal } from '../Modal/Modal';
import Tilt from 'react-parallax-tilt';
import Santa from '../../images/santa-claus.png';
import './DeleteModal.css';
import { ButtonModal } from '../Buttons/Buttons';
interface ModalProps {
    isOpen:boolean;
    closeModal:React.MouseEventHandler;
    handleDelete:React.MouseEventHandler;
}


export const DeleteModal = ({isOpen,handleDelete,closeModal}: ModalProps) => {
    return (
        <Modal isOpen={isOpen} onClick={closeModal}>
            <div className="DeleteModal__container">
                <Tilt className="DeleteModal__tilt" 
                        trackOnWindow={true}  
                        tiltMaxAngleX={13}
                        tiltMaxAngleY={13}
                        tiltReverse={true} 
                        perspective={50}
                        scale={1}
                        gyroscope={true} >
                <span className="DeleteModal__portrait">
                    <img src={Santa} alt="santa claus portrait" />
                </span>
                </Tilt>
                
                <div className="DeleteModal__text">
                    <p className="DeleteModal__text--title">¿Estás seguro?</p>
                    <p className="DeleteModal__text--subtitle">Todos tus regalos se eliminarán.</p>
                </div>
                <div className="DeleteModal__ButtonsContainer">
                        <ButtonModal onClick={closeModal} variant="outline">Mejor No</ButtonModal>
                        <ButtonModal onClick={handleDelete} variant="delete">Eliminar</ButtonModal>
                </div>
            </div>
        </Modal>
    )
}
