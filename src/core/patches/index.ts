import fixconnecting from './fix-connection';
import tracking from './no-track';
import settings from './settings';
import inspect from './inspect';
import toasts from './toasts';
import badges from './badges';
import theme from './theme';


const handlePatch = (patchType: string, patch: () => any | void) => {
    try {
        patch();
    } catch (e) {
        console.warn(`Failed to patch ${patchType}: ${e.message ?? e}`)
    }
}

export function initialize(): void {
    const patches = {
        inspect,
        settings,
        tracking,
        badges,
        theme,
        toasts,
        fixconnecting
    }

    Object.entries(patches).forEach(entry => handlePatch(...entry));
}
