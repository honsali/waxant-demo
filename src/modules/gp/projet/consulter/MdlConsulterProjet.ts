import { createSlice, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit';
import { IProjet } from 'modele/gp/projet/DomaineProjet';
import { IRequete, IResultat } from 'waxant';
import CtrlConsulterProjet from './CtrlConsulterProjet';

export interface ReqConsulterProjet extends IRequete {
    form?: any;
    idProjet?: string;
}

export interface ResConsulterProjet extends IResultat {
    projet?: IProjet;
}

const initialState = {
    resultat: {} as ResConsulterProjet,
    projet: {} as IProjet,
};

const SliceConsulterProjet = createSlice({
    name: 'MdlConsulterProjet',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addMatcher(isFulfilled(CtrlConsulterProjet.consulterProjet), (state, action) => {
                state.resultat = action.payload;
                state.projet = action.payload.projet;
            })
            .addMatcher(isPending(CtrlConsulterProjet.consulterProjet), (state) => {
                state.resultat = {} as ResConsulterProjet;
            })
            .addMatcher(isRejected(CtrlConsulterProjet.consulterProjet), (state) => {
                state.resultat = { rid: 'erreur' } as ResConsulterProjet;
            });
    },
});

export const MdlConsulterProjet = SliceConsulterProjet.actions;

export default SliceConsulterProjet.reducer;
