import _ from 'lodash';
import MapperPagination from 'modele/commun/pagination/MapperPagination';
import { Page } from 'proxy/common/page/Page';
import { ProjectCreateCmd } from 'proxy/pm/project/command/ProjectCreateCmd';
import { ProjectUpdateCmd } from 'proxy/pm/project/command/ProjectUpdateCmd';
import { ProjectQuery } from 'proxy/pm/project/query/ProjectQuery';
import { ProjectRep } from 'proxy/pm/project/representation/ProjectRep';
import { IListePagineeProjet, IProjet } from './DomaineProjet';

const creerProjet = (projetRep: ProjectRep): IProjet => {
    const projet: IProjet = {} as IProjet;
    projet.id = '' + projetRep.id;
    projet.nom = projetRep.name;
    projet.description = projetRep.description;
    projet.dateDebut = projetRep.startAt;
    projet.dateFin = projetRep.endAt;
    projet.statutProjet = { code: projetRep.statusCode, libelle: projetRep.statusLabel };
    projet.typeProjet = { code: projetRep.typeCode, libelle: projetRep.typeLabel };
    projet.chefProjet = projetRep.manager;
    return projet;
};

const creerProjectCreateCmd = (projet: IProjet): ProjectCreateCmd => {
    const projetCreateCmd: ProjectCreateCmd = {} as ProjectCreateCmd;
    projetCreateCmd.name = projet.nom;
    projetCreateCmd.description = projet.description;
    projetCreateCmd.startAt = projet.dateDebut;
    projetCreateCmd.endAt = projet.dateFin;
    projetCreateCmd.statusCode = projet.statutProjet?.code;
    projetCreateCmd.typeCode = projet.typeProjet?.code;
    projetCreateCmd.manager = projet.chefProjet;
    return projetCreateCmd;
};

const creerProjectUpdateCmd = (projet: IProjet): ProjectUpdateCmd => {
    const projetUpdateCmd: ProjectUpdateCmd = creerProjectCreateCmd(projet) as ProjectUpdateCmd;
    projetUpdateCmd.id = +projet.id;
    return projetUpdateCmd;
};

const creerProjectQuery = (projet: IProjet): ProjectQuery => {
    const projetQuery: ProjectQuery = {} as ProjectQuery;
    if (projet.nom) {
        projetQuery.name = projet.nom;
    }
    if (projet.dateDebut) {
        projetQuery.startAt = projet.dateDebut;
    }
    if (projet.dateFin) {
        projetQuery.endAt = projet.dateFin;
    }
    if (projet.statutProjet?.code) {
        projetQuery.statusCode = projet.statutProjet?.code;
    }
    if (projet.typeProjet?.code) {
        projetQuery.typeCode = projet.typeProjet?.code;
    }
    return projetQuery;
};

const creerListePagineeProjet = (pageProjectRep: Page<ProjectRep>): IListePagineeProjet => {
    const listePagineeProjet: IListePagineeProjet = {} as IListePagineeProjet;
    listePagineeProjet.liste = _.map(pageProjectRep.content, (projectRep) => creerProjet(projectRep));
    listePagineeProjet.pagination = MapperPagination.creerPagination(pageProjectRep);
    return listePagineeProjet;
};

const MapperProjet = {
    creerProjet,
    creerProjectCreateCmd,
    creerProjectUpdateCmd,
    creerProjectQuery,
    creerListePagineeProjet,
};

export default MapperProjet;
