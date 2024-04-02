import { Col, Row, Space } from 'antd';
import { ROLE_INVITE } from 'commun/securite/mapRole';
import BoutonNotification from 'modules/commun/notification/commun/BoutonNotification';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectRole } from 'waxant';
import BoutonLogout from './element/BoutonLogout';
import BoutonRole from './element/BoutonRole';

const SHeader = styled(Row)`
    box-shadow: 0px 2px 2px #e0e0e0;
    background: #f8f8f4;
    padding: 12px 50px 12px 50px;
    z-index: 5;
`;

const LayoutHeader = () => {
    const role = useSelector(selectRole);

    return (
        <SHeader align="middle">
            <Col flex="auto"></Col>
            <Col flex="none">
                <Space>
                    <BoutonNotification />
                    {!role || role === ROLE_INVITE ? <BoutonRole /> : <BoutonLogout />}
                </Space>
            </Col>
        </SHeader>
    );
};

export default LayoutHeader;
