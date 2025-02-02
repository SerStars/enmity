import { getByProps, getModule } from '@metro';
import { create } from '@patcher';


const Patcher = create('fix-connection');

export default function () {
    let AuthenticationUtilities = getByProps("startSession", "switchAccountToken")
    let AuthenticationStore = getModule(x => x._dispatcher && x.getName?.() === "AuthenticationStore")
    let FluxDispatcher = getByProps("dispatch", "subscribe")

    Patcher.after(AuthenticationUtilities, 'startSession', () => {
		setTimeout(() => {
			if (!AuthenticationStore.getSessionId()) {
				FluxDispatcher.dispatch({ type: 'APP_STATE_UPDATE', state: 'inactive' });
				FluxDispatcher.dispatch({ type: 'APP_STATE_UPDATE', state: 'background' });
				FluxDispatcher.dispatch({ type: 'APP_STATE_UPDATE', state: 'active' });
			}
		}, 300);
	}, true);
}