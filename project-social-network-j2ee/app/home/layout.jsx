import SideBar from '../components/SideBar';
const layout = ({ children }) => {

  return (
    <>
      <SideBar />
      <main>{children}</main>
    </>
  );
};

export default layout;