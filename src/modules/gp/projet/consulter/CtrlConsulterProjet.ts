import { action } from 'waxant';
import { ReqConsulterProjet, ResConsulterProjet } from './MdlConsulterProjet';
import ServiceProjet from 'modele/gp/projet/ServiceProjet';

const consulterProjetImpl = async (requete: ReqConsulterProjet, resultat: ResConsulterProjet, thunkAPI) => {
    resultat.projet = await ServiceProjet.recuperer(requete.idProjet);
};

const CtrlConsulterProjet = {
    consulterProjet: action<ReqConsulterProjet, ResConsulterProjet>(consulterProjetImpl, 'CtrlConsulterProjet/consulterProjet'),
};

export default CtrlConsulterProjet;
