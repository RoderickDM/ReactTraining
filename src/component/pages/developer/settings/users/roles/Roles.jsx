import React from "react";
import Header from "../../../../../partials/Header";
import Navigation from "../../../../../partials/Navigation";
import RoleTable from "./RoleTable";
import ModalAddRoles from "./ModalAddRoles";
import BreadCrumbs from "../../../../../partials/BreadCrumbs";

const Roles = () => {
  const [isShow, setIsShow] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState([]);
  const handleAddRole = () => setIsShow(!isShow);

  return (
    <>
      <Header />
      <section className="main__grid ">
        <aside>
          <Navigation menu="settings" submenu="users" />
        </aside>
        <main className="px-4 lg:px-0 lg:pr-10 overflow-x-hidden">
          <BreadCrumbs />
          <div className="flex justify-between items-center my-5">
            <h1>Roles</h1>
            <button className="btn btn--accent btn--sm" onClick={handleAddRole}>
              Add
            </button>
          </div>

          <RoleTable setIsShow={setIsShow} setItemEdit={setItemEdit} />
        </main>
      </section>

      {isShow && (
        <ModalAddRoles
          setIsShow={setIsShow}
          itemEdit={itemEdit}
          setItemEdit={setItemEdit}
        />
      )}
    </>
  );
};

export default Roles;
