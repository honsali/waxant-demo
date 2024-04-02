import _ from 'lodash';
import MapperPagination from 'modele/commun/pagination/MapperPagination';
import { NotificationRep } from 'proxy/common/notification/representation/NotificationRep';
import { Page } from 'proxy/common/page/Page';
import { IListePagineeNotification, INotification } from './DomaineNotification';

const creerNotification = (notificationRep: NotificationRep): INotification => {
    const notification: INotification = {} as INotification;

    notification.id = notificationRep.id;
    notification.message = notificationRep.message;
    notification.utilisateur = notificationRep.user;
    notification.active = notificationRep.active;
    notification.typeNotification = { code: notificationRep.notificationTypeCode, libelle: notificationRep.notificationTypeLabel };
    notification.dateCreation = notificationRep.createdOn;
    notification.createur = notificationRep.createdBy;
    return notification;
};

const creerListePagineeNotification = (pageNotificationRep: Page<NotificationRep>): IListePagineeNotification => {
    const listePagineeNotification: IListePagineeNotification = {} as IListePagineeNotification;
    listePagineeNotification.liste = _.map(pageNotificationRep.content, (notificationRep: NotificationRep) => creerNotification(notificationRep));
    listePagineeNotification.pagination = MapperPagination.creerPagination(pageNotificationRep);
    return listePagineeNotification;
};
const MapperNotification = {
    creerNotification,
    creerListePagineeNotification,
};

export default MapperNotification;
