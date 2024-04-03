import { SaveOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { PopupConfirmation, useAppSelector, useContextePage, useRequete } from 'waxant';
import CtrlCreerProjet from '../CtrlCreerProjet';

const ActionCreerProjet = ({ form }) => {
    const navigate = useNavigate();
    const { carte } = useContextePage();
    const resultat = useAppSelector((state) => state.mdlCreerProjet.resultat);
    const { execute, rid, success } = useRequete(resultat);

    const attributes = {
        nom: 'creer.projet',
        entete: 'Etes vous sur de vouloir creer ce projet ?',
        actionConfirmer: () => executer(),
        icone: <SaveOutlined />,
    };

    const executer = () => {
        execute(CtrlCreerProjet.creerProjet, { form });
    };

    useEffect(() => {
        if (success) {
            navigate(carte.consulterProjet(resultat.projet));
        }
    }, [success]);

    return <PopupConfirmation {...attributes} rid={rid}></PopupConfirmation>;
};

export default ActionCreerProjet;
