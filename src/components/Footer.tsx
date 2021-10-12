import { FC } from 'react';
import { Footer } from 'antd/lib/layout/layout';
import { useHistory } from 'react-router-dom';

interface Props {
  setMenuKey: Function
}

const PageHeader: FC<Props> = ({ setMenuKey }) => {
  let history: any = useHistory();
  return (
    <Footer style={{ textAlign: "center" }}>
      <div onClick={() => {
        history.push('./home')
        setMenuKey('1')
      }}>
        Ant Design ©2018 Created by Ant UED

      </div>
    </Footer>
  )

}
export default PageHeader;