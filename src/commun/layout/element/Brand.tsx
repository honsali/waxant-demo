import { Col, Row } from 'antd';
import styled from 'styled-components';

const SBrand = styled(Row)`
    background-color: #444;
    position: relative;
    z-index: 600;
`;

const Title = styled(Col)`
    padding: 14px 20px 13px 20px;
`;

const Sin = styled.span`
    color: ${(props) => props.theme.token.colorPrimary};
    font-size: 30px;
    font-weight: 700;
    font-family: 'ROBOTO';
`;

const Corpo = styled.span`
    color: ${(props) => props.theme.token.colorWarning};
    font-size: 30px;
    font-weight: 300;
    font-family: 'ROBOTO';
`;

const NoTitle = styled(Col)`
    margin: 2px 8px 0 10px;
`;

const Brand = ({ opened, toggle }) => {
    return (
        <SBrand>
            {opened ? (
                <Title>
                    <Sin>DEMO</Sin>
                    <Corpo>WAXANT</Corpo>
                </Title>
            ) : (
                <NoTitle />
            )}
        </SBrand>
    );
};

export default Brand;
