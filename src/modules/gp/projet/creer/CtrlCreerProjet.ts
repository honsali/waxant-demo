import ServiceProjet from 'modele/gp/projet/ServiceProjet';
import { action, util } from 'waxant';
import { ReqCreerProjet, ResCreerProjet } from './MdlCreerProjet';

const initCreationProjetImpl = async (requete: ReqCreerProjet, resultat: ResCreerProjet, thunkAPI) => {
    resultat.projet = {};
};

const creerProjetImpl = async (requete: ReqCreerProjet, resultat: ResCreerProjet, thunkAPI) => {
    await requete.form.validateFields();
    const projetForm = util.removeNonSerialisable(requete.form.getFieldsValue());
    resultat.projet = await ServiceProjet.creer({ ...projetForm });
};

const CtrlCreerProjet = {
    initCreationProjet: action<ReqCreerProjet, ResCreerProjet>(initCreationProjetImpl, 'CtrlCreerProjet/initCreationProjet'),
    creerProjet: action<ReqCreerProjet, ResCreerProjet>(creerProjetImpl, 'CtrlCreerProjet/creerProjet'),
};

export default CtrlCreerProjet;
