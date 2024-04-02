import { createSlice, isPending, isRejected } from '@reduxjs/toolkit';
import { IProjet } from 'modele/gp/projet/DomaineProjet';
import { IRequete, IResultat } from 'waxant';
import CtrlModifierProjet from './CtrlModifierProjet';

export interface ReqModifierProjet extends IRequete {
    form?: any;
    idProjet?: string;
}

export interface ResModifierProjet extends IResultat {
    projet?: IProjet;
}

const initialState = {
    resultat: {} as ResModifierProjet,
    projet: {} as IProjet,
};

const SliceModifierProjet = createSlice({
    name: 'MdlModifierProjet',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(CtrlModifierProjet.initModificationProjet.fulfilled, (state, action) => {
                state.resultat = action.payload;
                state.projet = action.payload.projet;
            })
            .addCase(CtrlModifierProjet.modifierProjet.fulfilled, (state, action) => {
                state.resultat = action.payload;
                state.projet = action.payload.projet;
            })

            .addMatcher(isPending(CtrlModifierProjet.initModificationProjet, CtrlModifierProjet.modifierProjet), (state) => {
                state.resultat = {} as ResModifierProjet;
            })
            .addMatcher(isRejected(CtrlModifierProjet.initModificationProjet, CtrlModifierProjet.modifierProjet), (state) => {
                state.resultat = { rid: 'erreur' } as ResModifierProjet;
            });
    },
});

export const MdlModifierProjet = SliceModifierProjet.actions;

export default SliceModifierProjet.reducer;
