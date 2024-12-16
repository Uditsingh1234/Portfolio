import React, { useEffect } from 'react'
import Header from '../../components/Header'
import { Tabs } from 'antd';
import { useSelector } from 'react-redux';
import Adminintro from './Adminintro';
import Adminabout from './Adminabout';
import Experiences from './AdminExperiences';
import AdminProject from './AdminProject';
import AdminCourse from './AdminCourse';
import AdminContact from './AdminContact';
// import { TabsProps } from 'antd';
const { TabPane } = Tabs;
function Admin() {
  const { portfolioData } = useSelector((state) => state.root);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/admin-login";
    }
  }, []);


  return (
    <div>
      <Header />
      <div className='flex items-center justify-between p-5'>
        <h1 className='text-2xl  text-primary'>Portfolio Admin</h1>
        <h1 className="px-2 py-1 bg-primary text-white cursor-pointer" onClick={()=>{
          localStorage.removeItem("token");
          window.location.href = "/admin-login";
        }}>Logout</h1>
      </div>
      <hr />
      {portfolioData &&
        <div className='p-5 pb-10'>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Intro" key="1">
              <Adminintro />
            </TabPane>

            <TabPane tab="About" key="2">
              <Adminabout />
            </TabPane>

            <TabPane tab="Experiences" key="3">
              <Experiences />
            </TabPane>

            <TabPane tab="Projects" key="4">
              <AdminProject />
            </TabPane>

            <TabPane tab="Courses" key="5">
              <AdminCourse />
            </TabPane>

            <TabPane tab="Conatct" key="6">
              <AdminContact />
            </TabPane>
          </Tabs>
        </div>}
    </div>
  )
}

export default Admin
