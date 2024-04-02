import { BellFilled } from '@ant-design/icons';
import { List } from 'antd';
import { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector, util } from 'waxant';
import CtrlListerNotification from '../CtrlListerNotification';

const SNotificationListe = styled.div`
    width: 300px;
`;
export const SPlusAction = styled.div`
    text-align: right;
    .ant-btn {
        color: ${(props) => props.theme.token.colorPrimary};
    }
`;

export const SElementListe = styled(List.Item)`
    padding: 0 !important;
    &:hover {
        background-color: #f9f9f9;
    }
    &.SUCCES {
        .ant-list-item-meta {
            .ant-list-item-meta-content {
                .ant-list-item-meta-title {
                    margin: 5px 0 0 0;
                    color: ${(props) => props.theme.token.colorPrimary};
                    .anticon {
                        margin-right: 5px;
                    }
                }
                .ant-list-item-meta-description {
                    font-size: 12px;
                }
            }
        }
    }
`;

const ListeNotification = () => {
    const dispatch = useAppDispatch();
    const listeNotification = useAppSelector((state) => state.mdlListerNotification.listeNotification);

    useEffect(() => {
        dispatch(CtrlListerNotification.listerNotification({ pageCourante: 0 }));
    }, []);

    return (
        <SNotificationListe>
            {util.nonVide(listeNotification) && (
                <List
                    dataSource={listeNotification.liste.slice(0, 5)}
                    locale={{ emptyText: 'Aucune Notification' }}
                    renderItem={(item: any) => (
                        <SElementListe className={item.typeNotification.code}>
                            <List.Item.Meta
                                title={
                                    <div>
                                        <span>
                                            <BellFilled />
                                        </span>
                                        <span>{item.typeNotification.libelle}</span>
                                    </div>
                                }
                                description={item.message}
                            />
                        </SElementListe>
                    )}
                />
            )}
        </SNotificationListe>
    );
};
export default ListeNotification;
