import { useEffect } from 'react';
import { useContextePage } from 'waxant';
import CarteNavigationProjet from './CarteNavigationProjet';

const PageProjet = ({ children }) => {
    const contextePage = useContextePage();
    useEffect(() => {
        contextePage.changerCarte(CarteNavigationProjet.initialiser());
    }, []);
    return <div style={{ padding: '40px' }}>{children}</div>;
};

export default PageProjet;
