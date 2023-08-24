import React from 'react'
import Header from '../../../../../partials/Header';
import BreadCrumbs from '../../../../../partials/BreadCrumbs';
import Navigation from '../../../../../partials/Navigation';
import RoleTable from './RoleTable';
import ModalAddRoles from './ModalAddRoles';

const Roles = () => {
  const [isShow, setIsShow] = React.useState(false);

  const handleAddRole = () => setIsShow(!isShow);



  return (
    <>
      <Header />
      <section className='main__grid'>
        <aside>
          <Navigation />
        </aside>
        <main className='pr-10'>
          <BreadCrumbs />
          <div className='flex justify-between items-center my-5'>
              <h1>Roles</h1>
              <button className='btn btn--accent btn--sm' onClick={handleAddRole}>Add</button>
          </div>
          
          <RoleTable />
        </main>
      </section>

      {isShow && <ModalAddRoles setIsShow={setIsShow} />}
    </>
  )
};

export default Roles;
