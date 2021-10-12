import { FC, useState } from "react";
import { BrowserRouter, Route } from 'react-router-dom';

import { Layout } from "antd";

import "../assets/css/App.less";
import AA from '@components/AA';
import HeaderPage from '@components/Header';
import FooterPage from '@components/Footer';
import Home from './Home'

// import { bb } from '@utils/bb';

const { Content } = Layout;

const App: FC = () => {
  const [menuKey, setMenuKey] = useState<string>('1')
  console.log('key444',menuKey);

  return (
    <BrowserRouter>
      <Layout>
        <HeaderPage menuKey={menuKey} setMenuKey={setMenuKey} />
        <Content style={{ padding: "0 50px" }} className="content">
          <Route path="/aa" component={AA} />
          <Route exact path="/" component={Home} />

          {/* {bb()} */}
        </Content>
        <FooterPage setMenuKey={setMenuKey} />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
