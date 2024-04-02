import ServiceProjet from 'modele/gp/projet/ServiceProjet';
import { action, util } from 'waxant';
import { ReqModifierProjet, ResModifierProjet } from './MdlModifierProjet';

const initModificationProjetImpl = async (requete: ReqModifierProjet, resultat: ResModifierProjet, thunkAPI) => {
    resultat.projet = await ServiceProjet.recuperer(requete.idProjet);
};

const modifierProjetImpl = async (requete: ReqModifierProjet, resultat: ResModifierProjet, thunkAPI) => {
    await requete.form.validateFields();
    const projetForm = util.removeNonSerialisable(requete.form.getFieldsValue());
    resultat.projet = await ServiceProjet.creer({ ...projetForm });
};

const CtrlModifierProjet = {
    initModificationProjet: action<ReqModifierProjet, ResModifierProjet>(initModificationProjetImpl, 'CtrlModifierProjet/initModificationProjet'),
    modifierProjet: action<ReqModifierProjet, ResModifierProjet>(modifierProjetImpl, 'CtrlModifierProjet/modifierProjet'),
};

export default CtrlModifierProjet;
