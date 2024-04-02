import { Page } from 'proxy/common/page/Page';
import { Pageable } from 'proxy/common/page/Pageable';
import { IPagination } from './ModelePagination';

const NOMBRE_LIGNE_PAR_PAGE_PAR_DEFAUT = 10;
const creerPagination = function (page: Page<any>): IPagination {
    const pagination = {} as IPagination;
    pagination.nombreTotalDeLigne = page.totalElements;
    pagination.nombreLigneParPage = page.size ? page.size : NOMBRE_LIGNE_PAR_PAGE_PAR_DEFAUT;
    pagination.pageCourante = page.number + 1;
    return pagination;
};

const creerPaginationSurListe = function (liste: any[]): IPagination {
    const pagination = {} as IPagination;
    pagination.nombreTotalDeLigne = liste.length;
    pagination.nombreLigneParPage = NOMBRE_LIGNE_PAR_PAGE_PAR_DEFAUT;
    pagination.pageCourante = 1;
    return pagination;
};
const creerPageable = function (pagination: IPagination): Pageable {
    const pageable = {} as Pageable;
    pageable.page = (pagination?.pageCourante || 1) - 1;
    pageable.size = pagination.nombreLigneParPage ? pagination.nombreLigneParPage : NOMBRE_LIGNE_PAR_PAGE_PAR_DEFAUT;

    return pageable;
};

const creerPageableRequetePage = function (pageCourante: number): Pageable {
    const pageable = {} as Pageable;
    pageable.page = (pageCourante || 1) - 1;
    pageable.size = NOMBRE_LIGNE_PAR_PAGE_PAR_DEFAUT;

    return pageable;
};

const MapperPagination = {
    creerPagination,
    creerPageable,
    creerPageableRequetePage,
    creerPaginationSurListe,
};
export default MapperPagination;
