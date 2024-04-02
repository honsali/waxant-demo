import { createSlice, isPending, isRejected } from '@reduxjs/toolkit';
import { IListePagineeProjet, IProjet } from 'modele/gp/projet/DomaineProjet';
import { IRequete, IResultat } from 'waxant';
import CtrlChercherProjet from './CtrlChercherProjet';

export interface ReqChercherProjet extends IRequete {
    filtre?: IProjet;
    form?: any;
    pageCourante?: number;
}

export interface ResChercherProjet extends IResultat {
    filtre?: IProjet;
    listeProjet?: IListePagineeProjet;
}

const initialState = {
    resultat: {} as ResChercherProjet,
    listeProjet: {} as IListePagineeProjet,
    requete: {} as ReqChercherProjet,
};

const SliceChercherProjet = createSlice({
    name: 'MdlChercherProjet',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(CtrlChercherProjet.chercherProjet.fulfilled, (state, action) => {
                state.resultat = action.payload;
                state.listeProjet = action.payload.listeProjet;
                state.requete = { filtre: action.payload.filtre };
            })
            .addCase(CtrlChercherProjet.changerPageProjet.fulfilled, (state, action) => {
                state.resultat = action.payload;
                state.listeProjet = action.payload.listeProjet;
            })
            .addMatcher(isPending(CtrlChercherProjet.chercherProjet, CtrlChercherProjet.changerPageProjet), (state) => {
                state.resultat = {} as ResChercherProjet;
            })
            .addMatcher(isRejected(CtrlChercherProjet.chercherProjet, CtrlChercherProjet.changerPageProjet), (state) => {
                state.resultat = { rid: 'erreur' } as ResChercherProjet;
            });
    },
});

export const MdlChercherProjet = SliceChercherProjet.actions;

export default SliceChercherProjet.reducer;
