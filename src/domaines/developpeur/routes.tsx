import RoutesCommun from 'modules/commun/RoutesCommun';
import RoutesProjet from 'modules/gp/projet/RoutesProjet';
import { Suspense } from 'react';
import { Route } from 'react-router';
import ViewAccueilDeveloppeur from './home';

const PageAccueilDeveloppeur = (props) => (
    <Suspense fallback="">
        <ViewAccueilDeveloppeur {...props} />
    </Suspense>
);

const RoutesDeveloppeur = [];
RoutesDeveloppeur.push(...RoutesCommun());
RoutesDeveloppeur.push(...RoutesProjet());
RoutesDeveloppeur.push(<Route key="201" index element={<PageAccueilDeveloppeur />} />);

export default RoutesDeveloppeur;
