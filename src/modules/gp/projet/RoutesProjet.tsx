import { Suspense } from 'react';
import { Route } from 'react-router';
import PageProjet from './PageProjet';
import ViewChercherProjet from './chercher/ViewChercherProjet';
import ViewConsulterProjet from './consulter/ViewConsulterProjet';
import ViewCreerProjet from './creer/ViewCreerProjet';
import ViewModifierProjet from './modifier/ViewModifierProjet';

const PageChercherProjet = () => {
    return (
        <Suspense fallback="">
            <PageProjet>
                <ViewChercherProjet />
            </PageProjet>
        </Suspense>
    );
};

const PageConsulterProjet = () => {
    return (
        <Suspense fallback="">
            <PageProjet>
                <ViewConsulterProjet />
            </PageProjet>
        </Suspense>
    );
};

const PageCreerProjet = () => {
    return (
        <Suspense fallback="">
            <PageProjet>
                <ViewCreerProjet />
            </PageProjet>
        </Suspense>
    );
};

const PageModifierProjet = () => {
    return (
        <Suspense fallback="">
            <PageProjet>
                <ViewModifierProjet />
            </PageProjet>
        </Suspense>
    );
};

const RoutesProjet = () => {
    const map = [];

    map.push(<Route key="ins15" path="/projet/chercher" element={<PageChercherProjet />} />);
    map.push(<Route key="ins16" path="/projet/consulter/:idProjet" element={<PageConsulterProjet />} />);
    map.push(<Route key="ins17" path="/projet/modifier/:idProjet" element={<PageModifierProjet />} />);
    map.push(<Route key="ins18" path="/projet/creer" element={<PageCreerProjet />} />);

    return map;
};

export default RoutesProjet;
