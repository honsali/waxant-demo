import { Suspense } from 'react';
import { Route } from 'react-router';
import ViewListerNotification from './notification/lister/ViewListerNotification';

const PageListerNotification = (props) => (
    <Suspense fallback="">
        <ViewListerNotification {...props} />
    </Suspense>
);

const RoutesCommun = () => {
    const map = [];
    map.push(<Route key="cm_ln" path="/notification" element={<PageListerNotification />} />);
    return map;
};

export default RoutesCommun;
