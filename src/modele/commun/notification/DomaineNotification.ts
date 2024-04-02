import { IPagination } from 'modele/commun/pagination/ModelePagination';
import { IReference } from 'modele/commun/reference/DomaineReference';

export interface INotification {
    id?: number;
    message?: string;
    utilisateur?: string;
    active?: boolean;
    typeNotification?: IReference;
    dateCreation?: string;
    createur?: string;
}

export interface IRequeteNotification extends INotification, IPagination {}

export interface IListePagineeNotification {
    liste: INotification[];
    pagination: IPagination;
    requete?: IRequeteNotification;
}
