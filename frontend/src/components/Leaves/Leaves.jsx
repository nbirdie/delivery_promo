import { observer } from 'mobx-react-lite';
import { useRef, useContext } from 'react';

import { MultiContext } from '../../contexts';
import { LeavesWrapper } from './Leaves.styles';

export const Leaves = observer(({ leaves, widthScreen, width }) => {
    const globalContext = useContext(MultiContext);
    const leavesRef = useRef([]);

    return (
        <>
            {leaves.map((item, index) => {
                return (
                    <LeavesWrapper
                        key={index}
                        item={item}
                        indexfigure={index}
                        widthscreen={widthScreen}
                        width={width}
                        shouldanimate={globalContext.store.shouldAnimateLeaves ? 1 : 0}
                    >
                        <item.leaf className="leaf" ref={(ref) => (leavesRef.current[index] = ref)} />
                    </LeavesWrapper>
                );
            })}
        </>
    );
});
