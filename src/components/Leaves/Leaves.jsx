import React, {
    useEffect,
    useState,
    useRef,
    useLayoutEffect,
    useContext,
} from "react";
import { observer } from "mobx-react-lite";
import { LeavesWrapper } from "./Leaves.styles";
import { MultiContext } from "../../contexts";

export const Leaves = observer(({ leaves, widthScreen, width }) => {
    const globalContext = useContext(MultiContext);
    const leavesRef = useRef([]);

    return (
        <>
            {/* <audio
                ref={audioElement}
                src={leavesSoundPath}
                style={{ display: "none" }}
            ></audio> */}
            {leaves.map((item, index) => {
                return (
                    <LeavesWrapper
                        key={index}
                        item={item}
                        indexfigure={index}
                        widthscreen={widthScreen}
                        width={width}
                        shouldanimate={
                            globalContext.store.shouldAnimateLeaves ? 1 : 0
                        }
                    >
                        <item.leaf
                            className="leaf"
                            ref={(ref) => (leavesRef.current[index] = ref)}
                        />
                    </LeavesWrapper>
                );
            })}
        </>
    );
});

// const runSound = () => {
//     if (audioElement && audioElement.current) {
//         audioElement.current.muted = false;
//         console.log(audioElement.current)
//         audioElement.current
//             .play()
//             .then(() => {
//                 if (gainNodeElement === undefined) {
//                     const audioCtx = new AudioContext();
//                     const audioApiSource = new MediaElementAudioSourceNode(
//                         audioCtx,
//                         {
//                             mediaElement: audioElement.current,
//                         }
//                     );
//                     gainNodeElement = new GainNode(audioCtx);
//                     audioApiSource.connect(gainNodeElement);
//                     gainNodeElement.connect(audioCtx.destination);
//                 }
//             })
//             .catch((error) => {
//                 console.log(`Audio error: ${error}`);
//             });
//     }
// };

// useEffect(() => {
//     if (globalContext.store.shouldAnimateLeaves) {
//         runSound();
//     }

// }, [globalContext.store.shouldAnimateLeaves])
