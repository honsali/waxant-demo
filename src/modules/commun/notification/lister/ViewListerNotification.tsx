import { Bloc, Section } from 'waxant';
import TableauNotification from './element/TableauNotification';
const ViewListerNotification = () => {
    return (
        <Section titre="notifications">
            <Bloc>
                <TableauNotification />
            </Bloc>
        </Section>
    );
};

export default ViewListerNotification;
