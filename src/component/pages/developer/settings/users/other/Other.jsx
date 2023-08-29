import React from "react";
import Header from "../../../../../partials/Header";
import Navigation from "../../../../../partials/Navigation";
import BreadCrumbs from "../../../../../partials/Breadcrumbs";
import OtherTable from "./OtherTable";
import ModalAddOther from "./ModalAddOther";

const Other = () => {
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
            <h1>Other</h1>
            <button className="btn btn--accent btn--sm" onClick={handleAddRole}>
              Add
            </button>
          </div>

          <OtherTable />
        </main>
      </section>

      {isShow && <ModalAddOther setIsShow={setIsShow} />}
    </>
  );
};

export default Other;
