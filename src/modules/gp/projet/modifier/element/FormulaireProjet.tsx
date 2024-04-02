import { Bloc, ChampCache, ChampDate, ChampReference, ChampTexte, Formulaire } from 'waxant';

const FormulaireProjet = ({ form }) => {
    return (
        <Bloc>
            <Formulaire form={form} nombreColonne={1}>
                <ChampTexte nom="nom" />
                <ChampTexte nom="description" surTouteLaLigne />
                <ChampDate nom="dateDebut" />
                <ChampDate nom="dateFin" />
                <ChampReference nom="typeProjet" />
                <ChampCache nom="id" />
            </Formulaire>
        </Bloc>
    );
};

export default FormulaireProjet;
