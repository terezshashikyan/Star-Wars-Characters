import loadingCampaign from "../../assets/icons/loading.svg";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="spinner-wrapper">
      <img src={loadingCampaign} alt="loadingCampaign" />
    </div>
  );
};

export default Spinner;
