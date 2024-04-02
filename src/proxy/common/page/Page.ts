interface Sort {
    unsorted?: boolean;
    sorted?: boolean;
    empty?: boolean;
}

interface Pageable {
    offset?: number;
    pageNumber?: number;
    pageSize?: number;
    paged?: boolean;
    unpaged?: boolean;
}

export interface Page<T> {
    empty?: boolean;
    first?: boolean;
    last?: boolean;
    number?: number;
    numberOfElements?: number;
    pageable?: Pageable;
    sort?: Sort | null;
    size?: number;
    totalElements?: number;
    totalPages?: number;
    content?: T[];
}
