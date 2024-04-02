import MapperPagination from 'modele/commun/pagination/MapperPagination';
import { NotificationRep } from 'proxy/common/notification/representation/NotificationRep';
import NotificationResource from 'proxy/common/notification/resource/NotificationResource';
import { Page } from 'proxy/common/page/Page';
import { IListePagineeNotification, IRequeteNotification } from './DomaineNotification';
import MapperNotification from './MapperNotification';

const listerNotification = async (requeteNotification: IRequeteNotification, pageCourante: number) => {
    const pageNotificationRep: Page<NotificationRep> = await NotificationResource.listForUser(requeteNotification.utilisateur, MapperPagination.creerPageable({ pageCourante }));
    const listePagineeNotification: IListePagineeNotification = MapperNotification.creerListePagineeNotification(pageNotificationRep);
    listePagineeNotification.requete = requeteNotification;
    return listePagineeNotification;
};

const ServiceNotification = {
    listerNotification,
};

export default ServiceNotification;
