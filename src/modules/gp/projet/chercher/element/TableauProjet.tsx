import { useNavigate } from 'react-router';
import { Colonne, Tableau, useAppDispatch, useAppSelector, useContextePage } from 'waxant';
import CtrlChercherProjet from '../CtrlChercherProjet';

const TableauProjet = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { carte } = useContextePage();
    const listeProjet = useAppSelector((state) => state.mdlChercherProjet.listeProjet);

    const consulterProjet = (projet) => {
        navigate(carte.consulterProjet(projet));
    };
    const actionChangementPage = (pageCourante: number) => {
        dispatch(CtrlChercherProjet.changerPageProjet({ pageCourante }));
    };

    return (
        <Tableau listeDonnee={listeProjet?.liste} pagination={listeProjet?.pagination} texteAucunResultat="Aucun Projet" siClicLigne={consulterProjet} siChangementPage={actionChangementPage}>
            <Colonne nom="nom" />
            <Colonne tc="date" nom="dateDebut" />
            <Colonne tc="date" nom="dateFin" />
            <Colonne tc="reference" nom="typeProjet" />
            <Colonne tc="reference" nom="statutProjet" />
        </Tableau>
    );
};

export default TableauProjet;
