import ServiceNotification from 'modele/commun/notification/ServiceNotification';
import { action } from 'waxant';
import { ReqListerNotification, ResListerNotification } from './MdlListerNotification';

const listerNotificationImpl = async (requete: ReqListerNotification, resultat: ResListerNotification, thunkAPI) => {
    const { mdlAuth } = thunkAPI.getState() as any;
    resultat.listeNotification = await ServiceNotification.listerNotification({ utilisateur: mdlAuth.user.username }, requete.pageCourante);
};

const CtrlListerNotification = {
    listerNotification: action<ReqListerNotification, ResListerNotification>(listerNotificationImpl, 'CtrlListerNotification/listerNotification'),
};

export default CtrlListerNotification;
