import React, { FC } from "react";
import { Button } from "antd";
import "../assets/css/App.less";
import AA from '@components/AA';
import {bb} from '@utils/bb'

const App: FC = () => {
  return (
    <div className="app">
      <AA/>
      {bb()}
      <Button className="btn" type="primary">
        Button
      </Button>
    </div>
  );
};

export default App;
