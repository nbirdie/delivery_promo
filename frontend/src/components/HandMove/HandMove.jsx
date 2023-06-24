import { observer } from 'mobx-react-lite';
import { useState, useEffect, useContext, useRef } from 'react';

import { ReactComponent as HandSvg } from '../../assets/hand.svg';
import leavesSoundPath from '../../assets/leaves-sound.mp3';
import { MultiContext } from '../../contexts';
import { AudioElement, HandMoveWrapper } from './HandMove.styles';

export const HandMove = observer(() => {
    const globalContext = useContext(MultiContext);
    const [dragging, setDragging] = useState(false);
    const audioRef = useRef(null);

    const handleMouseDown = () => {
        setDragging(true);
    };
    const handleMouseUp = () => {
        setDragging(false);
    };
    const handleMouseMove = () => {
        if (dragging) {
            playSound();
            globalContext.store.setShouldAnimateLeaves(true);
            globalContext.store.setVisiblePromo(true);
        }
    };
    const handleTouchStart = () => {
        setDragging(true);
    };
    const handleTouchEnd = () => {
        setDragging(false);
    };
    const handleTouchMove = () => {
        if (dragging) {
            playSound();
            globalContext.store.setShouldAnimateLeaves(true);
            globalContext.store.setVisiblePromo(true);
        }
    };
    const playSound = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.muted = false;
            audioRef.current.play().catch((error) => {
                console.error('Failed to play sound:', error);
            });
        }
    };

    useEffect(() => {
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('touchstart', handleMouseDown);
        window.addEventListener('touchend', handleMouseUp);

        return () => {
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchstart', handleMouseDown);
            window.removeEventListener('touchend', handleMouseUp);
        };
    }, []);

    return (
        <HandMoveWrapper
            isvisible={globalContext.store.visiblePromoAndLink ? 0 : 1}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
        >
            <AudioElement muted ref={audioRef}>
                <source src={leavesSoundPath} type="audio/mp3" />
            </AudioElement>
            <div className="hand-icon">
                <hr />
                <HandSvg />
            </div>
            <span>
                Пошуршите листьями,
                <br />
                заберите промокод
            </span>
        </HandMoveWrapper>
    );
});
