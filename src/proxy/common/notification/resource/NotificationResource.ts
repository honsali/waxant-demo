import { Page } from 'proxy/common/page/Page';
import { Pageable } from 'proxy/common/page/Pageable';
import { NotificationRep } from '../representation/NotificationRep';

const storageKey = 'notification';

const saveNotificationListToStorage = (notificationList) => {
    localStorage.setItem(storageKey, JSON.stringify(notificationList));
};

const getNotificationListFromStorage = () => {
    const notificationList = localStorage.getItem(storageKey);
    return notificationList ? JSON.parse(notificationList) : [];
};

const listForUser = async (user, pageable: Pageable): Promise<Page<NotificationRep>> => {
    const notificationList = getNotificationListFromStorage();
    const notificationListFiltered = notificationList.filter((m) => m.user === user);
    return {
        content: notificationListFiltered,
        numberOfElements: notificationListFiltered.length,
    };
};

const getById = async (notificationId): Promise<NotificationRep> => {
    const notificationList = getNotificationListFromStorage();
    const notification = notificationList.find((m) => m.id === notificationId);
    if (!notification) {
        throw new Error('Notification not found');
    }
    return notification;
};

const NotificationResource = {
    listForUser,
    getById,
};

export default NotificationResource;
