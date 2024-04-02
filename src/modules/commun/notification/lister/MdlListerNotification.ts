import { createSlice, isPending, isRejected } from '@reduxjs/toolkit';
import { IListePagineeNotification } from 'modele/commun/notification/DomaineNotification';
import { IRequete, IResultat } from 'waxant';
import CtrlListerNotification from './CtrlListerNotification';

export interface ReqListerNotification extends IRequete {
    pageCourante?: number;
}

export interface ResListerNotification extends IResultat {
    listeNotification?: IListePagineeNotification;
}

const initialState = {
    resultat: {} as ResListerNotification,
    listeNotification: {} as IListePagineeNotification,
};

const SliceListerNotification = createSlice({
    name: 'MdlListerNotification',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(CtrlListerNotification.listerNotification.fulfilled, (state, action) => {
                state.resultat = action.payload;
                state.listeNotification = action.payload.listeNotification;
            })
            .addMatcher(isPending(CtrlListerNotification.listerNotification), (state) => {
                state.resultat = {} as ResListerNotification;
            })
            .addMatcher(isRejected(CtrlListerNotification.listerNotification), (state) => {
                state.resultat = { rid: 'erreur' } as ResListerNotification;
            });
    },
});

export const MdlListerNotification = SliceListerNotification.actions;

export default SliceListerNotification.reducer;
