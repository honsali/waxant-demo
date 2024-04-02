import RoutesCommun from 'modules/commun/RoutesCommun';
import RoutesProjet from 'modules/gp/projet/RoutesProjet';
import { Suspense } from 'react';
import { Route } from 'react-router';
import ViewAccueilChefProjet from './home';

const PageAccueilChefProjet = (props) => (
    <Suspense fallback="">
        <ViewAccueilChefProjet {...props} />
    </Suspense>
);

const RoutesChefProjet = [];
RoutesChefProjet.push(...RoutesCommun());
RoutesChefProjet.push(...RoutesProjet());
RoutesChefProjet.push(<Route key="100" index element={<PageAccueilChefProjet />} />);
export default RoutesChefProjet;
