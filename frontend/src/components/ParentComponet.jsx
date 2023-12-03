import Footer from "./Footer";
import Navigation, { CustomNav } from "./Navigation";

const ParentComponet = (props) => {
  return (
    <div className="">
      {/* <Navigation /> */}
      <CustomNav />

      <div style={{ minHeight: "100vh" }}>{props.children}</div>

      <Footer />
    </div>
  );
};
export default ParentComponet;
