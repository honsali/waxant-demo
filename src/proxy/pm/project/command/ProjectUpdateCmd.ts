import { ProjectCreateCmd } from './ProjectCreateCmd';

export interface ProjectUpdateCmd extends ProjectCreateCmd {
    id: number;
}
