import { useForm } from 'antd/lib/form/Form';
import { useEffect } from 'react';
import { ActionForte, ChampDate, ChampReference, ChampTexte, FormulaireInline, useAppDispatch } from 'waxant';
import CtrlChercherProjet from '../CtrlChercherProjet';

const FiltreProjet = () => {
    const dispatch = useAppDispatch();
    const [form] = useForm();

    useEffect(() => {
        form.resetFields();
        filtrer();
    }, []);

    const filtrer = () => {
        dispatch(CtrlChercherProjet.chercherProjet({ form, pageCourante: 0 }));
    };

    return (
        <FormulaireInline form={form} actionBloc={<ActionForte nom="filtrer.projet" action={filtrer} />}>
            <ChampTexte nom="nom" />
            <ChampDate nom="dateDebut" />
            <ChampDate nom="dateFin" />
            <ChampReference nom="typeProjet" />
            <ChampReference nom="statutProjet" />
        </FormulaireInline>
    );
};

export default FiltreProjet;
