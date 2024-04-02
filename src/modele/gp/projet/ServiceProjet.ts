import MapperPagination from 'modele/commun/pagination/MapperPagination';
import { Page } from 'proxy/common/page/Page';
import { ProjectQuery } from 'proxy/pm/project/query/ProjectQuery';
import { ProjectRep } from 'proxy/pm/project/representation/ProjectRep';
import ProjectResource from 'proxy/pm/project/resource/ProjectResource';
import { IProjet } from './DomaineProjet';
import MapperProjet from './MapperProjet';

const recuperer = async (idProjet: string) => {
    const projectRep: ProjectRep = await ProjectResource.getById(idProjet);
    return MapperProjet.creerProjet(projectRep);
};

const creer = async (projet: IProjet) => {
    const projetCreateCmd = MapperProjet.creerProjectCreateCmd(projet);
    return ProjectResource.create(projetCreateCmd);
};

const modifier = async (projet: IProjet) => {
    const projetUpdateCmd = MapperProjet.creerProjectUpdateCmd(projet);
    return ProjectResource.update(projet.id, projetUpdateCmd);
};

const chercher = async (projet: IProjet, pageCourante: number) => {
    const projetQuery: ProjectQuery = MapperProjet.creerProjectQuery(projet);
    const pageProjectRep: Page<ProjectRep> = await ProjectResource.search(projetQuery, MapperPagination.creerPageable({ pageCourante }));
    return MapperProjet.creerListePagineeProjet(pageProjectRep);
};

const ServiceMission = {
    recuperer,
    creer,
    modifier,
    chercher,
};

export default ServiceMission;
