import { observer } from 'mobx-react-lite';

import { MultiContext } from '../../contexts';
import { buildAllStores } from '../../stores';

const allStores = buildAllStores();

export const MultiContextProvider = observer((props) => {
    return <MultiContext.Provider value={allStores}>{props.children}</MultiContext.Provider>;
});
