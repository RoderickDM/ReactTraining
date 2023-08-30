import React from "react";
import Header from "../../../../../partials/Header";
import Navigation from "../../../../../partials/Navigation";
import OtherTable from "./OtherTable";
import ModalAddOther from "./ModalAddOther";
import BreadCrumbs from "../../../../../partials/BreadCrumbs";

const Other = () => {
  const [isShow, setIsShow] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState([]);
  const handleAddRole = () => setIsShow(!isShow);

  return (
    <>
      <Header />
      <section className="main__grid">
        <aside>
          <Navigation />
        </aside>
        <main className="px-4 lg:px-0 lg:pr-10 overflow-x-hidden">
          <BreadCrumbs />
          <div className="flex justify-between items-center my-5">
            <h1>Other</h1>
            <button className="btn btn--accent btn--sm" onClick={handleAddRole}>
              Add
            </button>
          </div>

          <OtherTable setIsShow={setIsShow} setItemEdit={setItemEdit} />
        </main>
      </section>

      {isShow && (
        <ModalAddOther
          setIsShow={setIsShow}
          itemEdit={itemEdit}
          setItemEdit={setItemEdit}
        />
      )}
    </>
  );
};

export default Other;
