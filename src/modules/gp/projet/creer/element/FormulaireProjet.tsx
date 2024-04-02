import { Bloc, ChampDate, ChampReference, ChampTexte, Formulaire } from 'waxant';

const FormulaireProjet = ({ form }) => {
    return (
        <Bloc>
            <Formulaire form={form} nombreColonne={2}>
                <ChampTexte nom="nom" />
                <ChampTexte nom="description" surTouteLaLigne />
                <ChampDate nom="dateDebut" />
                <ChampDate nom="dateFin" />
                <ChampReference nom="typeProjet" />
            </Formulaire>
        </Bloc>
    );
};

export default FormulaireProjet;
