import _ from 'lodash';
import { Page } from 'proxy/common/page/Page';
import { Pageable } from 'proxy/common/page/Pageable';
import { ProjectCreateCmd } from '../command/ProjectCreateCmd';
import { ProjectUpdateCmd } from '../command/ProjectUpdateCmd';
import { ProjectQuery } from '../query/ProjectQuery';
import { ProjectRep } from '../representation/ProjectRep';

const storageKey = 'project';

const saveProjectListToStorage = (projectList) => {
    localStorage.setItem(storageKey, JSON.stringify(projectList));
};

const getProjectListFromStorage = () => {
    const projectList = localStorage.getItem(storageKey);
    return projectList ? JSON.parse(projectList) : [];
};

const create = async (projectCreateCmd: ProjectCreateCmd) => {
    const projectList = getProjectListFromStorage();
    const newProject = { ...projectCreateCmd, id: _.uniqueId() };
    projectList.push(newProject);
    saveProjectListToStorage(projectList);
    return { id: newProject.id };
};
const update = async (projectId, projectUpdateCmd: ProjectUpdateCmd) => {
    const projectList = getProjectListFromStorage();
    const index = projectList.findIndex((m) => m.id === projectId);
    if (index === -1) {
        throw new Error('Project not found');
    }
    projectList[index] = { ...projectList[index], ...projectUpdateCmd };
    saveProjectListToStorage(projectList);
};

const search = async (projectQuery: ProjectQuery, pageable: Pageable): Promise<Page<ProjectRep>> => {
    const projectList = getProjectListFromStorage();
    const filteredList = _.filter(projectList, projectQuery);
    return {
        content: filteredList,
        totalElements: filteredList.length,
        number: 0,
    };
};

const getById = async (projectId): Promise<ProjectRep> => {
    const projectList = getProjectListFromStorage();
    const project = projectList.find((m) => m.id === projectId);
    if (!project) {
        throw new Error('Project not found');
    }
    return project;
};

const ProjectResource = {
    create,
    update,
    search,
    getById,
};

export default ProjectResource;
