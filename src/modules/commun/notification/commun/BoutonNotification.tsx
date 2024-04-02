import { ArrowRightOutlined, BellOutlined } from '@ant-design/icons';
import { Avatar, Button, Popover } from 'antd';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { Separateur20 } from 'waxant';
import ListeNotification from '../lister/element/ListeNotification';

export const SPlusAction = styled.div`
    text-align: right;
    .ant-btn {
        color: ${(props) => props.theme.token.colorPrimary};
    }
`;

const SAvatar = styled(Avatar)`
    background-color: #fcfcfc;
    border-radius: 6px;
    color: ${(props) => props.theme.token.colorWarning};
    border: 1px solid ${(props) => props.theme.token.colorWarning};
    padding: 0;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => props.theme.token.colorWarning};
        color: #fefefe;
    }
`;

const BoutonNotification = () => {
    const navigate = useNavigate();

    const listeCompleteNotification = () => {
        navigate('/notification');
    };

    const contenuNotification = () => {
        return (
            <div>
                <ListeNotification />
                <Separateur20 />
                <SPlusAction>
                    <Button onClick={listeCompleteNotification}>
                        Tout
                        <ArrowRightOutlined />
                    </Button>
                </SPlusAction>
            </div>
        );
    };

    return (
        <Popover content={contenuNotification} trigger="hover">
            <SAvatar shape="square" size={40} icon={<BellOutlined />} />
        </Popover>
    );
};

export default BoutonNotification;
