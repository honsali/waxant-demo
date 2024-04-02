import RoutesCommun from 'modules/commun/RoutesCommun';
import RoutesProjet from 'modules/gp/projet/RoutesProjet';
import { Suspense } from 'react';
import { Route } from 'react-router';
import ViewAccueilInvite from './home';

const PageAccueilInvite = (props) => (
    <Suspense fallback="">
        <ViewAccueilInvite {...props} />
    </Suspense>
);

const RoutesInvite = [];
RoutesInvite.push(...RoutesCommun());
RoutesInvite.push(...RoutesProjet());
RoutesInvite.push(<Route key="100" index element={<PageAccueilInvite />} />);
export default RoutesInvite;
