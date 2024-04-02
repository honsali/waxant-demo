import { useNavigate } from 'react-router';
import { ActionAjouter, BlocActionGauche, PanneauMaitre, useContextePage } from 'waxant';
import FiltreProjet from './element/FiltreProjet';
import TableauProjet from './element/TableauProjet';

const ViewListerProjet = () => {
    const navigate = useNavigate();
    const { carte } = useContextePage();

    const ajouterProjet = () => {
        navigate(carte.creerProjet());
    };

    return (
        <PanneauMaitre titre="liste.projet">
            <FiltreProjet />
            <TableauProjet />
            <BlocActionGauche key="footer">
                <ActionAjouter typeEntite="projet" action={ajouterProjet} />
            </BlocActionGauche>
        </PanneauMaitre>
    );
};

export default ViewListerProjet;
