const configOverrides = window['configs'] || {};

//export const APP_BASE_URL =  process?.env.PUBLIC_URL || '';

// Ce code est urilisé pour l'environement Developpement
//export const SINCORPO_API_URL = 'http://localhost:8091/sincorpo-api';
//export const REFERENTIEL_API_URL = 'http://localhost:8096/referentiel-api';
//export const CA_API_URL = 'http://localhost:8090/ca-api';
//export const INFRA_API_URL = 'http://localhost:8095/infra-api';
//export const NOTIFICATION_API_URL = 'http://localhost:8095/infra-api';
//export const GED_API_URL = 'http://localhost:8095/infra-api';

export const GATEWAY = 'http://192.168.1.236:8765/public/api/v1/';
export const SINCORPO_API_URL = GATEWAY + 'sincorpo-api';
export const REFERENTIEL_API_URL = GATEWAY + 'referentiel-api';
export const CA_API_URL = GATEWAY + 'ca-api';
export const INFRA_API_URL = GATEWAY + 'sincorpo-infra-api';
export const NOTIFICATION_API_URL = GATEWAY + 'sincorpo-infra-api';
export const GED_API_URL = GATEWAY + 'sincorpo-infra-api';
