import { useForm } from 'antd/lib/form/Form';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ActionAnnuler, BlocActionGauche, PanneauMaitre, useAppSelector, useContextePage, useRequete } from 'waxant';
import CtrlCreerProjet from './CtrlCreerProjet';
import ActionCreerProjet from './element/ActionCreerProjet';
import FormulaireProjet from './element/FormulaireProjet';

const ViewCreerProjet = () => {
    const navigate = useNavigate();
    const { carte } = useContextePage();
    const resultat = useAppSelector((state) => state.mdlCreerProjet.resultat);
    const [form] = useForm();
    const { execute, success } = useRequete(resultat);

    useEffect(() => {
        execute(CtrlCreerProjet.initCreationProjet, {});
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
                <ActionCreerProjet form={form} />
                <ActionAnnuler action={annuler} />
            </BlocActionGauche>
        </PanneauMaitre>
    );
};

export default ViewCreerProjet;
