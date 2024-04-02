import { createSlice, isPending, isRejected } from '@reduxjs/toolkit';
import { IRequete, IResultat } from 'waxant';
import CtrlCreerProjet from './CtrlCreerProjet';
import { IProjet } from 'modele/gp/projet/DomaineProjet';

export interface ReqCreerProjet extends IRequete {
    form?: any;
    idSinistre?: string;
}

export interface ResCreerProjet extends IResultat {
    projet?: IProjet;
}

const initialState = {
    resultat: {} as ResCreerProjet,
    projet: {} as IProjet,
};

const SliceCreerProjet = createSlice({
    name: 'MdlCreerProjet',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(CtrlCreerProjet.initCreationProjet.fulfilled, (state, action) => {
                state.resultat = action.payload;
                state.projet = action.payload.projet;
            })
            .addCase(CtrlCreerProjet.creerProjet.fulfilled, (state, action) => {
                state.resultat = action.payload;
                state.projet = action.payload.projet;
            })

            .addMatcher(isPending(CtrlCreerProjet.initCreationProjet, CtrlCreerProjet.creerProjet), (state) => {
                state.resultat = {} as ResCreerProjet;
            })
            .addMatcher(isRejected(CtrlCreerProjet.initCreationProjet, CtrlCreerProjet.creerProjet), (state) => {
                state.resultat = { rid: 'erreur' } as ResCreerProjet;
            });
    },
});

export const MdlCreerProjet = SliceCreerProjet.actions;

export default SliceCreerProjet.reducer;
