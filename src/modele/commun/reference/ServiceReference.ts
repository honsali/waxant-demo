import _ from 'lodash';
import { ReferenceDataRep } from 'proxy/common/referenceData/ReferenceDataRep';
import { IReference, IRequeteReference } from './DomaineReference';
import DonneeReference from './DonneeReference';
import MapperReference from './MapperReference';

const lister = async (requeteReference: IRequeteReference): Promise<IReference[]> => {
    let referencePromise: Promise<ReferenceDataRep[]> = null;
    switch (requeteReference.reference) {
        case 'statutProjet':
            referencePromise = Promise.resolve(DonneeReference.statutProjet);
            break;
        case 'typeProjet':
            referencePromise = Promise.resolve(DonneeReference.typeProjet);
            break;
        default:
            referencePromise = null;
    }
    return mapReference(referencePromise, requeteReference);
};

const mapReference = (referencePromise: Promise<ReferenceDataRep[]>, requeteReference?: IRequeteReference): Promise<IReference[]> => {
    return new Promise<IReference[]>((resolve) => {
        if (referencePromise === null) {
            resolve([] as IReference[]);
        }
        referencePromise.then((listeReferenceDataRep: any) => {
            const liste = _.isArray(listeReferenceDataRep.data) ? listeReferenceDataRep.data : listeReferenceDataRep;
            const listeReference = [] as IReference[];
            _.forEach(liste, (referentielRep: ReferenceDataRep) => {
                listeReference.push(MapperReference.creerReference(referentielRep, requeteReference?.reference));
            });
            resolve(listeReference);
        });
    });
};

const ServiceReference = {
    lister,
};

export default ServiceReference;
