import { useForm } from 'antd/lib/form/Form';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ActionAnnuler, BlocActionGauche, PanneauMaitre, useAppSelector, useContextePage, useRequete } from 'waxant';
import CtrlModifierProjet from './CtrlModifierProjet';
import ActionModifierProjet from './element/ActionModifierProjet';
import FormulaireProjet from './element/FormulaireProjet';

const ViewModifierProjet = () => {
    const navigate = useNavigate();
    const { carte } = useContextePage();
    const resultat = useAppSelector((state) => state.mdlModifierProjet.resultat);
    const { idProjet } = useParams();
    const [form] = useForm();
    const { execute, success } = useRequete(resultat);

    useEffect(() => {
        execute(CtrlModifierProjet.initModificationProjet, { idProjet });
    }, []);

    useEffect(() => {
        if (success) {
            form.setFieldsValue(resultat.projet);
        }
    }, [success]);

    const annuler = () => {
        navigate(carte.chercherProjet());
    };

    return (
        <PanneauMaitre titre="creer.projet">
            <FormulaireProjet form={form} />
            <BlocActionGauche key="footer">
                <ActionModifierProjet form={form} />
                <ActionAnnuler action={annuler} />
            </BlocActionGauche>
        </PanneauMaitre>
    );
};

export default ViewModifierProjet;
