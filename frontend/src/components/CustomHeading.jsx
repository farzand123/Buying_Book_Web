const CustomHeading = ({
  fontColor = "red",
  heading = "This is default heading",
}) => {
  return (
    <div>
      <h1 className="display-6" style={{ color: fontColor }}>
        {heading}
      </h1>
      <p className="custom_p ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
        exercitationem eum ipsum iure delectus facilis commodi molestiae quam
        voluptate labore ullam sint officiis perspiciatis et, temporibus
        accusantium a optio iusto.
      </p>
      <p style={{ alignItems: "center", textAlign: "right" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
        exercitationem eum ipsum iure delectus facilis commodi molestiae quam
        voluptate labore ullam sint officiis perspiciatis et, temporibus
        accusantium a optio iusto.
      </p>
    </div>
  );
};
export default CustomHeading;
