import { IPagination } from 'modele/commun/pagination/ModelePagination';
import { IReference } from 'modele/commun/reference/DomaineReference';

export interface IProjet {
    id?: string;
    nom?: string;
    description?: string;
    dateDebut?: string;
    dateFin?: string;
    statutProjet?: IReference;
    typeProjet?: IReference;
    chefProjet?: string;
}

export interface IListePagineeProjet {
    liste?: IProjet[];
    pagination?: IPagination;
}
