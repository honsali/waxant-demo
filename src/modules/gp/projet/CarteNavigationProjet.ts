import _ from 'lodash';

const CarteNavigationProjet = {
    initialiser: () => {
        return {
            chercherProjet: _.template('/projet/chercher'),
            consulterProjet: _.template('/projet/consulter/<%=id%>'),
            creerProjet: _.template('/projet/creer'),
            modifierProjet: _.template('/projet/modifier/<%=id%>'),
        };
    },
};

export default CarteNavigationProjet;
