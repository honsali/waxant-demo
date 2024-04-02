import { Layout, notification } from 'antd';
import Sablier from 'commun/composants/Sablier';
import React, { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router';
import { ContextePageProvider, DialogueErreur, selectInfoActionReussie, useContexteApp, useI18n } from 'waxant';
import LayoutFooter from './LayoutFooter';
import LayoutHeader from './LayoutHeader';
import LayoutSidebar from './LayoutSidebar';

const Context = React.createContext({ name: 'Default' });
const LayoutGlobal = () => {
    const i18n = useI18n();
    const appName = useContexteApp().appName;
    const [api, contextHolder] = notification.useNotification();
    const infoActionReussie = useSelector(selectInfoActionReussie);
    const { pathname } = useLocation();
    const contextValue = useMemo(() => ({ name: appName }), []);

    useEffect(() => {
        const message = i18n.message(infoActionReussie);
        if (message) {
            api.success({
                message,
                placement: 'topRight',
            });
        }
    }, [infoActionReussie]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <Context.Provider value={contextValue}>
            <Sablier>
                {contextHolder}
                <Layout>
                    <LayoutSidebar />
                    <Layout style={{ marginLeft: '-30px', zIndex: '800' }}>
                        <LayoutHeader />
                        <ContextePageProvider>
                            <Outlet />
                        </ContextePageProvider>
                        <LayoutFooter />
                    </Layout>
                    <DialogueErreur />
                </Layout>
            </Sablier>
        </Context.Provider>
    );
};

export default LayoutGlobal;
