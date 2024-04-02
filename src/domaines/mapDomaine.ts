import { MapDomaineType } from 'waxant';
import MenuInvite from './invite/menu';
import RoutesInvite from './invite/routes';
import MenuChefProjet from './chefProjet/menu';
import RoutesChefProjet from './chefProjet/routes';
import MenuDeveloppeur from './developpeur/menu';
import RoutesDeveloppeur from './developpeur/routes';

const mapDomaine: Record<string, MapDomaineType> = {
    chefProjet: {
        menu: MenuChefProjet,
        routes: RoutesChefProjet,
    },
    developpeur: {
        menu: MenuDeveloppeur,
        routes: RoutesDeveloppeur,
    },
    invite: {
        menu: MenuInvite,
        routes: RoutesInvite,
    },
};

export default mapDomaine;
