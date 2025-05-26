import { FadeLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
};

function Loader() {
  return (
    <div className="sweet-loading">
      <FadeLoader
        color="black"
        loading={true}
        cssOverride={override}
        height={15}
        width={5}
        margin={2}
        radius={2}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loader;
