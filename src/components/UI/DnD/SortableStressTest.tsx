import type { FC } from 'react';
import { useEffect, useState } from 'react';

import DnDContainer from './DnDContainer';

export const SortableStressTest: FC = () => {
    // Avoid rendering on server because the big data list is generated
    const [shouldRender, setShouldRender] = useState(false);
    // Won't fire on server.
    useEffect(() => setShouldRender(true), []);
    return <>{shouldRender && <DnDContainer />}</>;
};
