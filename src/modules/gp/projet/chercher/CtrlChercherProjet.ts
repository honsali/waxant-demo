import ServiceProjet from 'modele/gp/projet/ServiceProjet';
import { action, util } from 'waxant';
import { ReqChercherProjet, ResChercherProjet } from './MdlChercherProjet';

const chercherProjetImpl = async (requete: ReqChercherProjet, resultat: ResChercherProjet, thunkAPI) => {
    resultat.filtre = requete.form ? util.removeNonSerialisable(requete.form.getFieldsValue()) : {};
    resultat.listeProjet = await ServiceProjet.chercher(resultat.filtre, requete.pageCourante);
};

const changerPageProjetImpl = async (requete: ReqChercherProjet, resultat: ResChercherProjet, thunkAPI) => {
    const { mdlChercherProjet } = thunkAPI.getState() as any;
    resultat.listeProjet = await ServiceProjet.chercher(mdlChercherProjet.requete.filtre, requete.pageCourante);
};

const CtrlChercherProjet = {
    chercherProjet: action<ReqChercherProjet, ResChercherProjet>(chercherProjetImpl, 'CtrlChercherProjet/chercherProjet'),
    changerPageProjet: action<ReqChercherProjet, ResChercherProjet>(changerPageProjetImpl, 'CtrlChercherProjet/changerPageProjet'),
};

export default CtrlChercherProjet;
