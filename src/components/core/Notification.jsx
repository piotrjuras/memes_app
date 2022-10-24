import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { NotificationContext } from '../../Root';


const Notification = ({ type, message }) => {

    const [killAnimation, setKillAnimation] = useState(false);
    const [notification, setNotification] = useContext(NotificationContext); // eslint-disable-line

    const kill = () => {
        setKillAnimation(true);
        setTimeout(() => {
            setNotification(null);
        }, 300)
    }

    useEffect(() => {
        setTimeout(() => kill(), 3000);
    })

    return(
        <StyledNotification type={type} className={killAnimation ? 'animate' : ''} onClick={() => kill()}>
            { message }
        </StyledNotification>
    )
}

const StyledNotification = styled.div`
    position: fixed;
    top: -100px;
    max-height: 100px;
    width: 100%;
    padding: 10px;
    color: var(--white);
    transform: translateY(0);
    z-index: 100;
    align-text: center;

    animation: slide-down .3s ease-in-out forwards;

    @keyframes slide-down{
        0%{
            transform: translateY(0);
        }
        80%{
            transform: translateY(105px);
        }
        100%{
            transform: translateY(100px);
        }
    }

    &.animate{
        animation: slide-up .3s ease-in-out forwards;

        @keyframes slide-up{
            0%{
                transform: translateY(100px);
            }
            20%{
                transform: translateY(105px);
            }
            100%{
                transform: translateY(0);
            }
        }
    }


    ${props => props.type === 'error' ? `
            background: red;
    ` : null}

    ${props => props.type === 'warning' ? `
            background: orange;
    ` : null}

    ${props => props.type === 'success' ? `
        background: green;
    ` : null}
`

export default Notification;