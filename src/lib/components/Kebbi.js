import React, { Component } from "react";
import PropTypes from "prop-types"; 
class Kebbi extends Component {
  constructor(props) {
    super(props);
     

    this.state = {
      hoverColor:this.props.hoverColor,
   hoverBackgroundColor:this.props.hoverBackgroundColor,
      renderData:this.props.renderData,
      defaultColor:this.props.defaultColor,
      id:this.props.id
    };
  }

  componentWillMount() {}
  componentDidMount() {
    let styles = document.head.appendChild(document.createElement("style"));
    styles.innerHTML += `
    #${this.state.id}:hover{fill: ${this.state.hoverColor} }
    #${this.state.id}{fill: ${this.state.defaultColor} }
    #${this.state.id}{background-color: ${this.state.hoverBackgroundColor} }
    `;
      this.refs.myRef1.innerHTML = "";
this.refs.myRef1.innerHTML += this.state.renderData;
  }                                                      
 render() {
    return (
      <div className="App">
        <a href="javascript:void(0)" className="tip">
          <span id={this.state.id} ref="myRef1">Kebbi State</span>
          <svg
            height="300.0226150793651"
            version="1.1"
            width="369.2"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display:"block", overflow: "hidden", position: "relative", left: "-0.2px", top: "0.733333px"}}
            viewBox="2.9962615905581202 20.385321468654798 121.10311173951865 98.41189674523008"
            preserveAspectRatio="xMinYMin"
          >
            <rect
              x="-2015.01"
              y="-1637.27"
              width="5040"
              height="4095.65"
              r="0"
              rx="0"
              ry="0"
              fill="#ffffff"
              stroke="none"
              transform="matrix(0.3663,0,0,0.3663,0,0)"
              strokeWidth="0.8955553854358375"
              style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "fillOpacity": "0"}}
              fillOpacity="0"
            />
            <path
              fill="#88a4bc"
               stroke="#ffffff"id={this.state.id}ref="myRef2"
              d="M196.6,188.8L200,188.20000000000002L203.4,189.50000000000003L204.8,190.60000000000002L206.5,191.00000000000003L210.9,189.90000000000003L212.8,189.80000000000004L214.3,188.90000000000003L215,186.90000000000003L216.4,185.40000000000003L218.20000000000002,185.30000000000004L220.00000000000003,186.20000000000005L222.00000000000003,186.30000000000004L226.70000000000002,185.60000000000005L228.70000000000002,187.20000000000005L229.9,189.70000000000005L237.1,192.80000000000004L242.1,193.90000000000003L254.7,193.00000000000003L256,192.30000000000004L257.4,191.90000000000003L263.59999999999997,193.00000000000003L266.7,194.10000000000002L270.59999999999997,197.90000000000003L270.2,203.70000000000005L268.09999999999997,210.10000000000005L269.7,212.70000000000005L273,214.00000000000006L279.4,224.20000000000005L280.09999999999997,237.10000000000005L277.49999999999994,235.50000000000006L274.59999999999997,235.60000000000005L273.4,236.60000000000005L271.29999999999995,239.00000000000006L270.4,240.30000000000007L268.29999999999995,242.00000000000006L265.4,242.30000000000007L262.5,243.10000000000008L248.1,249.20000000000007L242.6,250.20000000000007L234.29999999999998,250.20000000000007L232.1,249.40000000000006L231,246.40000000000006L230.9,243.10000000000005L231.4,236.60000000000005L230.1,233.80000000000004L227.4,232.10000000000005L224.4,226.70000000000005L223.3,220.30000000000004L218.4,217.30000000000004L212.3,217.20000000000005L187.70000000000002,222.20000000000005L176.3,227.30000000000004L175,232.70000000000005L180.2,236.70000000000005L186.2,239.20000000000005L192.6,240.20000000000005L194,240.20000000000005L195.1,240.90000000000003L195.79999999999998,242.40000000000003L196.89999999999998,243.00000000000003L199.2,243.70000000000002L200.2,246.20000000000002L201,249.60000000000002L201.2,253.00000000000003L197.2,258.1L200.6,262.40000000000003L202.4,268.00000000000006L200.20000000000002,269.70000000000005L194.3,271.40000000000003L188.70000000000002,274.1L182.9,273.3L180.3,274.3L178.9,279.90000000000003L179.3,286.3L178.9,289.2L179.4,292L183.3,297.2L185.9,302.9L183.8,308.5L181.4,310.2L178.6,311.2L168.9,313.2L166,314.2L165.1,317.2L165.1,320.59999999999997L164,322.79999999999995L158.4,322.49999999999994L156.4,320.69999999999993L157.6,314.49999999999994L158.1,308.29999999999995L156.4,306.4L154.20000000000002,304.7L152.9,301.8L152.6,298.6L153.1,292.3L156.29999999999998,286.90000000000003L165.89999999999998,281.40000000000003L166.09999999999997,279.90000000000003L168.19999999999996,277.70000000000005L168.79999999999995,276.6L168.99999999999994,275.1L168.89999999999995,271.90000000000003L171.69999999999996,256.8L171.59999999999997,254.70000000000002L166.19999999999996,253.10000000000002L156.09999999999997,246.40000000000003L147.69999999999996,244.20000000000005L139.09999999999997,245.40000000000003L116.29999999999997,246.00000000000003L111.89999999999996,245.50000000000003L102.59999999999997,241.20000000000002L95.19999999999996,236.60000000000002L87.59999999999997,235.70000000000002L86.99999999999997,236.3L85.39999999999998,236.4L83.39999999999998,234.4L68.49999999999997,213.3L67.29999999999997,211L67.09999999999997,209L69.29999999999997,203.2L70.29999999999997,199.29999999999998L76.09999999999997,189.39999999999998L77.89999999999996,187.49999999999997L82.19999999999996,184.89999999999998L83.19999999999996,183.89999999999998L83.79999999999995,182.09999999999997L83.39999999999995,180.39999999999998L82.39999999999995,178.79999999999998L80.39999999999995,176.7L79.79999999999995,176.2L78.99999999999996,174.5L78.49999999999996,169.7L78.89999999999996,168.29999999999998L79.79999999999997,166.99999999999997L81.29999999999997,165.59999999999997L82.69999999999997,162.69999999999996L82.29999999999997,159.79999999999995L80.19999999999997,153.59999999999997L80.29999999999997,149.89999999999998L82.49999999999997,138.7L81.69999999999997,117.49999999999999L81.99999999999997,116.59999999999998L100.19999999999997,102.79999999999998L105.59999999999998,97.69999999999999L118.89999999999998,76.69999999999999L121.49999999999997,58.29999999999999L122.19999999999997,58.19999999999999L128.49999999999997,57.999999999999986L133.89999999999998,58.899999999999984L136.79999999999998,57.499999999999986L139.79999999999998,56.79999999999998L142.39999999999998,58.899999999999984L144.89999999999998,61.29999999999998L150.09999999999997,64.39999999999998L155.69999999999996,66.49999999999997L158.69999999999996,67.29999999999997L161.59999999999997,68.29999999999997L164.39999999999998,70.29999999999997L167.39999999999998,71.69999999999997L170.49999999999997,71.99999999999997L173.09999999999997,70.39999999999998L174.39999999999998,68.19999999999997L175.89999999999998,66.09999999999998L178.09999999999997,65.39999999999998L179.59999999999997,67.19999999999997L179.29999999999995,69.89999999999998L177.99999999999994,72.39999999999998L177.79999999999995,73.99999999999997L177.79999999999995,75.59999999999997L177.39999999999995,76.89999999999996L176.89999999999995,78.09999999999997L175.99999999999994,81.29999999999997L175.49999999999994,84.79999999999997L178.29999999999995,89.59999999999997L180.19999999999996,94.89999999999996L179.49999999999997,101.09999999999997L178.69999999999996,104.19999999999996L178.29999999999995,107.49999999999996L180.79999999999995,121.19999999999996L180.49999999999994,127.59999999999997L176.79999999999995,129.49999999999997L171.09999999999997,127.69999999999997L165.09999999999997,129.2L162.09999999999997,134.5L162.69999999999996,167.2L159.89999999999995,180.5L156.19999999999996,188.5L155.49999999999997,196.6L158.19999999999996,199.6L161.89999999999995,200.9L165.59999999999994,198.6L168.49999999999994,195L184.29999999999995,187.8L185.99999999999994,187.4L187.79999999999995,187.8L189.09999999999997,188.5L190.99999999999997,187.9L192.29999999999998,188.70000000000002L193.2,190.00000000000003L195,189.80000000000004L196.6,188.80000000000004Z"
              className="sm_state_NGA2879"
              opacity="1"
              strokeOpacity="1"
              strokeWidth="0.6199482155679584"
              strokeLinejoin="round"
              transform="matrix(0.3663,0,0,0.3663,0,0)"
              style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", opacity: "1", cursor: "pointer", "strokeOpacity": "1", "strokeLinejoin": "round", "fillOpacity": "1"}}
              fillOpacity="1"
            />
            <desc style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}>
             Created by Uchendu Precious. @allindeveloper
            </desc>
            <defs style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}} />
            <text
              x="44.68492063492063"
              y="55.563134920634916"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "textAnchor": "middle", font: "bold 22px Arial", cursor: "pointer", opacity: "1"}}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,28.3182,35.212)"
              className="sm_label_2"
            >
              <tspan
                dy="7.711572420634916"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Kebbi
              </tspan>
            </text>
            <text
              x="44.68492063492063"
              y="55.563134920634916"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "textAnchor": "middle", font: "bold 22px Arial", cursor: "pointer", opacity: "1"}}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,28.3182,35.212)"
              className="sm_label_39"
            >
              <tspan
                dy="7.711572420634916"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Kebbi
              </tspan>
            </text>
            <text
              x="44.68492063492063"
              y="55.563134920634916"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "textAnchor": "middle", font: "bold 22px Arial", cursor: "pointer", opacity: "1"}}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,28.3182,35.212)"
              className="sm_label_76"
            >
              <tspan
                dy="7.711572420634916"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Kebbi
              </tspan>
            </text>
            <text
              x="44.68492063492063"
              y="55.563134920634916"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "textAnchor": "middle", font: "bold 22px Arial", cursor: "pointer", opacity: "1"}}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,28.3182,35.212)"
              className="sm_label_113"
            >
              <tspan
                dy="7.711572420634916"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Kebbi
              </tspan>
            </text>
            <text
              x="44.68492063492063"
              y="55.563134920634916"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "textAnchor": "middle", font: "bold 22px Arial", cursor: "pointer", opacity: "1"}}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,28.3182,35.212)"
              className="sm_label_150"
            >
              <tspan
                dy="7.711572420634916"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Kebbi
              </tspan>
            </text>
            <text
              x="44.68492063492063"
              y="55.563134920634916"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "textAnchor": "middle", font: "bold 22px Arial", cursor: "pointer", opacity: "1"}}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,28.3182,35.212)"
              className="sm_label_187"
            >
              <tspan
                dy="7.711572420634916"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Kebbi
              </tspan>
            </text>
            <text
              x="44.68492063492063"
              y="55.563134920634916"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "textAnchor": "middle", font: "bold 22px Arial", cursor: "pointer", opacity: "1"}}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,28.3182,35.212)"
              className="sm_label_224"
            >
              <tspan
                dy="7.711572420634916"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Kebbi
              </tspan>
            </text>
            <text
              x="44.68492063492063"
              y="55.563134920634916"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "textAnchor": "middle", font: "bold 22px Arial", cursor: "pointer", opacity: "1"}}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,28.3182,35.212)"
              className="sm_label_261"
            >
              <tspan
                dy="7.711572420634916"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Kebbi
              </tspan>
            </text>
            <text
              x="44.68492063492063"
              y="55.563134920634916"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "textAnchor": "middle", font: "bold 22px Arial", cursor: "pointer", opacity: "1"}}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,28.3182,35.212)"
              className="sm_label_298"
            >
              <tspan
                dy="7.711572420634916"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Kebbi
                           </tspan>
            </text>
          </svg>
        </a>
      </div>
    )
  }
}
const state = "State Info";
    const val = 55;
const kebbiData =
      '<div class="hoverinfo">' +
      "<h6>" +
      state +
      " </h6>" +
      "Total No Of Farms - " +
      val +
      "" +
      "</div>";
Kebbi.defaultProps = {
  hoverColor:"red",
  hoverBackgroundColor:"grey",
  renderData:kebbiData,
  defaultColor:"green",
  id:"kebb"
};

Kebbi.propTypes = {
  hoverColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string.isRequired,
  renderData: PropTypes.string.isRequired,
  defaultColor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Kebbi;
