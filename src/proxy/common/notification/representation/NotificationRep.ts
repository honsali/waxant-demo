export interface NotificationRep {
    id?: number;
    message?: string;
    user?: string;
    active?: boolean;
    notificationTypeCode?: string;
    notificationTypeLabel?: string;
    createdOn?: string;
    createdBy?: string;
}
