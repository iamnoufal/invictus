import "./Ribbon.css";

const Ribbon = ({ text, className }) => (
  <div class="ribbon-wrapper-green">
    <div class={`ribbon-green ${className}`}>{text}</div>
  </div>
);

export default Ribbon;
