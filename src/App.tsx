import 'assets/styles/default.css';
import { mapActionCtrl } from 'commun/i18n/mapActionCtrl';
import { mapActionUI } from 'commun/i18n/mapActionUI';
import { mapErreur } from 'commun/i18n/mapErreur';
import { mapLibelle } from 'commun/i18n/mapLibelle';
import { mapMessage } from 'commun/i18n/mapMessage';
import { mapTitre } from 'commun/i18n/mapTitre';
import LayoutGlobal from 'commun/layout/LayoutGlobal';
import mapReducer from 'commun/redux/mapReducer';
import mapDroitAcces from 'commun/securite/mapDroitAcces';
import mapRole from 'commun/securite/mapRole';
import { theme } from 'commun/theme/theme';
import mapDomaine from 'domaines/mapDomaine';
import ServiceReference from 'modele/commun/reference/ServiceReference';
import { useMemo } from 'react';
import { ConfigAppType, WaxantApp } from 'waxant';

const App = () => {
    const config: ConfigAppType = useMemo(
        () => ({
            appName: 'DEMO_APP',
            locale: 'fr',
            formatDate: 'MM/DD/YYYY',
            apiTimeout: 50000,
            keycloakConfig: null, //keycloakConfig,
            theme: theme,
            mapDroitAcces: mapDroitAcces,
            mapRole: mapRole,
            mapActionCtrl: mapActionCtrl,
            mapActionUI: mapActionUI,
            mapLibelle: mapLibelle,
            mapTitre: mapTitre,
            mapErreur: mapErreur,
            mapMessage: mapMessage,
            mapDomaine: mapDomaine,
            mapReducer: mapReducer,
            listerReference: ServiceReference.lister,
        }),
        []
    );

    return (
        <WaxantApp config={config}>
            <LayoutGlobal />
        </WaxantApp>
    );
};
export default App;
