import { Champ, Etat, useAppSelector } from 'waxant';

const EtatProjet = () => {
    const projet = useAppSelector((state) => state.mdlConsulterProjet.projet);

    return (
        <Etat modele={projet} nombreColonne={1}>
            <Champ nom="nom" />
            <Champ nom="description" />
            <Champ nom="dateDebut" />
            <Champ nom="dateFin" />
            <Champ reference="typeProjet" />
            <Champ reference="statutProjet" />
        </Etat>
    );
};

export default EtatProjet;
