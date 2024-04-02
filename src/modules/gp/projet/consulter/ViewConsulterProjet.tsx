import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ActionRetourListe, BlocActionGauche, PanneauMaitre, useAppSelector, useContextePage, useRequete } from 'waxant';
import CtrlConsulterProjet from './CtrlConsulterProjet';
import EtatProjet from './element/EtatProjet';

const ViewConsulterProjet = () => {
    const navigate = useNavigate();
    const { carte } = useContextePage();
    const resultat = useAppSelector((state) => state.mdlConsulterProjet.resultat);
    const { idProjet } = useParams();
    const { execute } = useRequete(resultat);

    useEffect(() => {
        execute(CtrlConsulterProjet.consulterProjet, { idProjet });
    }, []);

    const listerProjet = () => {
        navigate(carte.chercherProjet());
    };

    return (
        <PanneauMaitre titre="consulter.projet">
            <EtatProjet />
            <BlocActionGauche key="footer">
                <ActionRetourListe typeEntite="projet" action={listerProjet} />
            </BlocActionGauche>
        </PanneauMaitre>
    );
};

export default ViewConsulterProjet;
