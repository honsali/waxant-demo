import { useEffect } from 'react';
import { Colonne, Tableau, useAppDispatch, useAppSelector } from 'waxant';
import CtrlListerNotification from '../CtrlListerNotification';

const TableauNotification = () => {
    const dispatch = useAppDispatch();
    const listeNotification = useAppSelector((state) => state.mdlListerNotification.listeNotification);

    useEffect(() => {
        dispatch(CtrlListerNotification.listerNotification({ pageCourante: 0 }));
    }, []);

    const actionChangementPage = (pageCourante: number) => {
        dispatch(CtrlListerNotification.listerNotification({ pageCourante }));
    };

    return (
        <Tableau listeDonnee={listeNotification.liste} pagination={listeNotification.pagination} texteAucunResultat="Aucune Notification" siChangementPage={actionChangementPage}>
            <Colonne nom="message" />
            <Colonne tc="reference" nom="typeNotification" />
            <Colonne tc="date" nom="dateCreation" />
            <Colonne nom="createur" />
        </Tableau>
    );
};

export default TableauNotification;
