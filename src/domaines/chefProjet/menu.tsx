import { FileSearchOutlined, HomeOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const MenuChefProjet = () => {
    const list = [
        { key: '/', icon: <HomeOutlined />, label: <Link to="/">Accueil</Link> },
        { key: '/projet/chercher', icon: <FileSearchOutlined />, label: <Link to="/projet/chercher">Gestion Projet</Link> },
    ];

    return <Menu items={list} mode="inline" theme="dark" />;
};

export default MenuChefProjet;
