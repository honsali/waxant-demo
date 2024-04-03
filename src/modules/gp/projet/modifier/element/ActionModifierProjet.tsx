import { SaveOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { PopupConfirmation, useAppSelector, useContextePage, useRequete } from 'waxant';
import CtrlModifierProjet from '../CtrlModifierProjet';

const ActionModifierProjet = ({ form }) => {
    const navigate = useNavigate();
    const { carte } = useContextePage();
    const resultat = useAppSelector((state) => state.mdlModifierProjet.resultat);
    const { execute, rid, success } = useRequete(resultat);

    const attributes = {
        nom: 'modifier.projet',
        entete: 'Etes vous sur de vouloir modifier ce projet ?',
        actionConfirmer: () => executer(),
        icone: <SaveOutlined />,
    };

    const executer = () => {
        execute(CtrlModifierProjet.modifierProjet, { form });
    };

    useEffect(() => {
        if (success) {
            navigate(carte.consulterProjet(resultat.projet));
        }
    }, [success]);

    return <PopupConfirmation {...attributes} rid={rid}></PopupConfirmation>;
};

export default ActionModifierProjet;
