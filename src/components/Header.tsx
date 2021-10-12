import {FC} from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header} = Layout;
interface Props {
  menuKey:string;
  setMenuKey:Function;
}

const PageHeader:FC<Props> = ({menuKey,setMenuKey}) => {
  
  return (
    <Header className="header">
        <img src='https://www.xiuerxin.com/publics/webxex/static/picture/logoImg.png' alt="" className="logo" />
        <Menu mode="horizontal" selectedKeys={[menuKey]} className="menu" onClick={(e)=>{
          setMenuKey(e.key)
        }}>
          <Menu.Item key="1">
            <Link to="/home">首页</Link>
          </Menu.Item>
          <Menu.Item key="2">
          <Link to="/aa">信用体验</Link>
          </Menu.Item>
          <Menu.Item key="3">
          <Link to="/aa">信用修复</Link>
          </Menu.Item>
        </Menu>
      </Header>
  )

}
export default PageHeader;