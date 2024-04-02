import { Avatar, Popover } from 'antd';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectRole, selectUser, useI18n } from 'waxant';

const SAvatar = styled(Avatar)`
    background-color: #fcfcfc;
    border-radius: 6px;
    color: ${(props) => props.theme.token.colorPrimary};
    border: 1px solid ${(props) => props.theme.token.colorPrimary};
    padding: 0;
    cursor: pointer;
    &:hover {
        background-color: ${(props) => props.theme.token.colorPrimary};
        color: #fefefe;
    }
`;
const BoutonRole = () => {
    const i18n = useI18n();
    const user = useSelector(selectUser);
    const role = useSelector(selectRole);

    const initials = useMemo(() => {
        if (!user?.username) {
            return '';
        }
        return user.username
            .split('.')
            .map((name) => name.charAt(0).toUpperCase())
            .join(' ');
    }, [user]);

    return (
        <Popover
            content={
                <div>
                    <div>{user.username}</div>
                    <div>{i18n.libelle(role)}</div>
                </div>
            }
            title="Informations Compte"
            trigger="hover"
            placement="bottomRight"
        >
            <SAvatar size={40}>{initials}</SAvatar>
        </Popover>
    );
};

export default BoutonRole;
