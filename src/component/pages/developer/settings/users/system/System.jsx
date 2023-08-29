import React from "react";
import Header from "../../../../../partials/Header";
import Navigation from "../../../../../partials/Navigation";
import BreadCrumbs from "../../../../../partials/Breadcrumbs";
import SystemTable from "./SystemTable";
import ModalAddSystem from "./ModalAddSystem";

const System = () => {
  const [isShow, setIsShow] = React.useState(false);

  const handleAddRole = () => setIsShow(!isShow);

  return (
    <>
      <Header />
      <section className="main__grid">
        <aside>
          <Navigation />
        </aside>
        <main className="pr-10">
          <BreadCrumbs />
          <div className="flex justify-between items-center my-5">
            <h1>System</h1>
            <button className="btn btn--accent btn--sm" onClick={handleAddRole}>
              Add
            </button>
          </div>

          <SystemTable />
        </main>
      </section>

      {isShow && <ModalAddSystem setIsShow={setIsShow} />}
    </>
  );
};

export default System;
