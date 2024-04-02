import MdlListerNotification from 'modules/commun/notification/lister/MdlListerNotification';
import MdlChercherProjet from 'modules/gp/projet/chercher/MdlChercherProjet';
import MdlConsulterProjet from 'modules/gp/projet/consulter/MdlConsulterProjet';
import MdlCreerProjet from 'modules/gp/projet/creer/MdlCreerProjet';
import MdlModifierProjet from 'modules/gp/projet/modifier/MdlModifierProjet';

const mapReducer = {
    mdlListerNotification: MdlListerNotification,

    mdlChercherProjet: MdlChercherProjet,
    mdlConsulterProjet: MdlConsulterProjet,
    mdlModifierProjet: MdlModifierProjet,
    mdlCreerProjet: MdlCreerProjet,
};

export default mapReducer;
