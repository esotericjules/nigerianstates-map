import React, { Component } from "react";
import PropTypes from "prop-types"; 
class Delta extends Component {
  constructor(props) {
    super(props);
    this.myRef1 = React.createRef();
    this.myRef2 = React.createRef();

    this.state = {
      ...props
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
    this.myRef1.current.innerHTML += this.state.renderData;
  }                                                      
 render() {
    return (
      <div className="App">
        <a href="javascript:void(0)" className="tip">
          <span id={this.state.id} ref={this.myRef1}>Delta State</span>
          <svg
            height="300.0226150793651"
            version="1.1"
            width="369.2"
            xmlns="http://www.w3.org/2000/svg"
            style={{overflow: "hidden", position: "relative", left: "-0.2px", top: "0.466667px"}}
            viewBox="69.47800152201039 227.9530303030303 57.364631876614105 46.61616161616162"
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
              strokeWidth="0.4242104457327651"
              style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "fillOpacity": "0"}}
              fillOpacity="0"
            />
            <path
              fill="#88a4bc"
               stroke="#ffffff"id={this.state.id}ref={this.myRef2}
              d="M328.2,690.7L326.09999999999997,700.4000000000001L324.4,704.2L323.7,708.3000000000001L322.7,710.3000000000001L321.09999999999997,712.0000000000001L319.09999999999997,712.9000000000001L317.4,714.7L318.9,718.4000000000001L319,720.2L317.7,720.9000000000001L306.9,722.6000000000001L305.59999999999997,723.0000000000001L303.99999999999994,724.2000000000002L302.59999999999997,725.7000000000002L302.2,726.5000000000001L302,728.7000000000002L301.8,729.2000000000002L300.3,729.6000000000001L296.8,729.5000000000001L295.3,730.1000000000001L294.6,732.1000000000001L294.8,733.0000000000001L295.6,734.3000000000001L295.70000000000005,735.0000000000001L295.30000000000007,735.9000000000001L294.4000000000001,736.4000000000001L292.30000000000007,737.0000000000001L290.6000000000001,738.5000000000001L289.50000000000006,738.7000000000002L286.50000000000006,738.1000000000001L285.80000000000007,738.4000000000001L283.4000000000001,741.7L282.0000000000001,742.5L279.8000000000001,742.2L278.10000000000014,741.4000000000001L276.3000000000001,740.4000000000001L273.5000000000001,737.9000000000001L272.4000000000001,738.4000000000001L269.7000000000001,742.3000000000001L267.4000000000001,743.5000000000001L264.80000000000007,744.0000000000001L263.30000000000007,743.7000000000002L261.70000000000005,744.2000000000002L260.20000000000005,744.9000000000002L258.6,745.4000000000002L255.8,747.4000000000002L252.8,749.0000000000002L251.5,748.9000000000002L250,749.1000000000003L248,748.8000000000003L246.4,747.6000000000003L242.20000000000002,745.3000000000003L238.4,744.0000000000003L235.20000000000002,741.9000000000003L232.9,740.0000000000003L232.5,738.7000000000004L234.2,738.9000000000004L235.89999999999998,739.3000000000004L235.29999999999998,738.3000000000004L232.99999999999997,735.8000000000004L232.19999999999996,735.3000000000004L231.89999999999995,735.7000000000004L231.89999999999995,737.2000000000004L231.59999999999994,737.5000000000003L230.29999999999993,737.7000000000004L228.99999999999991,738.1000000000004L227.99999999999991,737.6000000000004L225.99999999999991,738.0000000000003L225.0999999999999,737.5000000000003L224.89999999999992,736.9000000000003L225.0999999999999,733.8000000000003L224.6999999999999,730.0000000000003L222.99999999999991,722.5000000000003L223.39999999999992,721.4000000000003L225.39999999999992,720.9000000000003L230.89999999999992,720.8000000000003L232.49999999999991,720.4000000000003L232.89999999999992,721.7000000000003L233.5999999999999,722.7000000000003L234.2999999999999,722.2000000000003L234.8999999999999,720.9000000000003L235.7999999999999,720.0000000000003L238.6999999999999,718.9000000000003L240.0999999999999,718.7000000000003L241.39999999999992,718.7000000000003L242.0999999999999,718.2000000000003L240.0999999999999,716.5000000000002L239.2999999999999,715.2000000000003L238.8999999999999,712.7000000000003L239.09999999999988,711.4000000000003L239.59999999999988,710.4000000000003L240.69999999999987,709.7000000000003L241.9999999999999,709.4000000000003L244.69999999999987,709.5000000000003L245.69999999999987,709.0000000000003L246.69999999999987,707.9000000000003L247.89999999999986,706.0000000000003L246.59999999999985,706.6000000000004L245.39999999999986,707.6000000000004L244.29999999999987,708.2000000000004L242.69999999999987,707.8000000000004L241.59999999999988,709.0000000000005L239.69999999999987,708.5000000000005L237.69999999999987,709.5000000000005L236.4999999999999,711.4000000000004L236.9999999999999,713.5000000000005L236.09999999999988,715.6000000000005L234.9999999999999,716.8000000000005L233.59999999999988,717.1000000000005L231.8999999999999,716.4000000000004L230.8999999999999,714.9000000000004L229.8999999999999,714.7000000000004L229.4999999999999,715.2000000000004L229.69999999999987,716.3000000000004L230.79999999999987,718.1000000000004L225.89999999999986,717.9000000000003L216.59999999999985,714.7000000000003L215.49999999999986,712.9000000000003L212.79999999999987,710.5000000000003L211.09999999999988,709.3000000000003L210.4999999999999,707.5000000000003L210.2999999999999,705.7000000000004L210.5999999999999,704.9000000000004L211.0999999999999,704.6000000000005L212.49999999999991,703.1000000000005L213.79999999999993,702.5000000000005L221.99999999999991,702.8000000000004L224.99999999999991,703.4000000000004L226.79999999999993,704.3000000000004L227.29999999999993,704.3000000000004L228.19999999999993,703.2000000000004L229.49999999999994,700.2000000000004L230.19999999999993,699.2000000000004L231.29999999999993,698.7000000000004L232.59999999999994,698.8000000000004L233.79999999999993,699.1000000000004L234.69999999999993,699.8000000000004L235.59999999999994,702.6000000000004L236.89999999999995,702.3000000000004L236.99999999999994,700.9000000000004L236.39999999999995,699.6000000000005L234.99999999999994,698.2000000000005L233.29999999999995,697.0000000000005L231.89999999999995,696.3000000000004L230.29999999999995,696.4000000000004L229.49999999999994,697.2000000000004L228.49999999999994,699.8000000000004L227.59999999999994,700.6000000000004L226.19999999999993,701.2000000000004L224.69999999999993,701.6000000000004L223.39999999999992,701.5000000000003L221.79999999999993,700.6000000000004L221.09999999999994,699.4000000000003L221.09999999999994,698.0000000000003L222.69999999999993,693.4000000000003L222.89999999999992,692.2000000000003L222.69999999999993,690.6000000000003L222.19999999999993,690.6000000000003L219.99999999999994,696.9000000000002L219.09999999999994,698.5000000000002L217.99999999999994,699.6000000000003L216.49999999999994,700.2000000000003L214.59999999999994,700.3000000000003L213.69999999999993,700.6000000000003L211.69999999999993,701.7000000000003L209.59999999999994,702.5000000000002L207.99999999999994,701.5000000000002L206.69999999999993,700.3000000000002L205.39999999999992,698.7000000000002L204.39999999999992,697.0000000000001L203.5999999999999,694.6000000000001L201.99999999999991,691.9000000000001L201.6999999999999,690.0000000000001L201.8999999999999,688.3000000000001L202.3999999999999,686.4000000000001L203.1999999999999,684.9000000000001L204.1999999999999,684.2L205.1999999999999,684.6L206.8999999999999,685.9L207.4999999999999,686.1L207.8999999999999,685.5L207.3999999999999,683.9L207.4999999999999,683.1L210.09999999999988,680.8000000000001L216.8999999999999,678.3000000000001L218.7999999999999,675.1L217.0999999999999,675.4L214.1999999999999,678L210.99999999999991,679L204.5999999999999,682.3L203.39999999999992,683.1999999999999L199.19999999999993,687.0999999999999L198.39999999999992,686.9999999999999L195.29999999999993,680.1999999999999L194.89999999999992,679.6999999999999L204.19999999999993,656.9999999999999L210.09999999999994,659.7999999999998L213.99999999999994,664.2999999999998L213.19999999999993,669.8999999999999L213.89999999999992,674.1999999999998L215.5999999999999,675.4999999999998L216.99999999999991,674.8999999999997L221.79999999999993,670.6999999999997L221.39999999999992,667.9999999999997L222.19999999999993,665.8999999999996L227.59999999999994,666.1999999999996L230.09999999999994,665.7999999999996L233.19999999999993,665.9999999999997L236.39999999999992,668.2999999999996L238.79999999999993,669.0999999999996L239.59999999999994,668.3999999999995L240.09999999999994,667.2999999999995L244.69999999999993,664.3999999999995L249.79999999999993,664.1999999999995L259.49999999999994,669.4999999999994L264.09999999999997,674.4999999999994L266.9,675.9999999999994L269.2,677.7999999999994L268.8,680.7999999999994L267.1,683.7999999999994L267.40000000000003,684.6999999999994L268.40000000000003,685.4999999999993L268.8,686.4999999999993L268.5,687.4999999999993L268.6,688.7999999999993L270,689.2999999999993L271.5,689.1999999999992L279.6,687.4999999999992L283.90000000000003,684.3999999999992L287.3,680.3999999999992L291.90000000000003,676.8999999999992L295.40000000000003,672.8999999999992L296.40000000000003,669.6999999999991L296.3,666.3999999999992L295.2,665.4999999999992L293.7,665.0999999999992L288.7,660.4999999999992L286.2,656.2999999999992L285.2,652.9999999999992L284.9,650.1999999999992L282.2,645.4999999999992L282.5,642.4999999999992L283.7,640.0999999999992L285.59999999999997,638.2999999999993L288.49999999999994,638.5999999999992L290.59999999999997,640.7999999999993L292.29999999999995,643.4999999999993L294.59999999999997,643.4999999999993L297.99999999999994,639.1999999999994L300.19999999999993,637.7999999999994L308.0999999999999,634.4999999999994L318.19999999999993,628.3999999999994L323.29999999999995,626.2999999999994L326.19999999999993,626.1999999999994L329.19999999999993,626.6999999999994L331.49999999999994,625.8999999999994L334.09999999999997,622.7999999999994L334.09999999999997,625.3999999999994L334.49999999999994,627.8999999999994L336.79999999999995,636.0999999999995L337.29999999999995,640.6999999999995L338.79999999999995,644.7999999999995L339.09999999999997,647.9999999999995L339.49999999999994,649.1999999999996L340.59999999999997,651.2999999999996L340.99999999999994,652.3999999999996L341.09999999999997,653.5999999999997L340.9,657.2999999999997L340.5,658.3999999999997L340,659.0999999999998L338,659.8999999999997L336.4,661.1999999999997L336,663.0999999999997L336.3,667.4999999999997L335.2,671.7999999999996L335.3,673.9999999999997L334.8,675.4999999999997L331.5,679.8999999999996L329.9,682.7999999999996L329.09999999999997,684.8999999999996L328.49999999999994,687.1999999999996L328.19999999999993,690.6999999999996Z"
              className="sm_state_NGA2860"
              opacity="1"
              strokeOpacity="1"
              strokeWidth="0.29365968105850665"
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
              x="101.56662698412698"
              y="261.1870238095238"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", opacity: "1", cursor: "pointer", "strokeOpacity": "1", "strokeLinejoin": "round", "fillOpacity": "1"}}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,64.3658,165.5221)"
              className="sm_label_16"
            >
              <tspan
                dy="7.632336309523794"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Delta
              </tspan>
            </text>
            <text
              x="101.56662698412698"
              y="261.1870238095238"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", opacity: "1", cursor: "pointer", "strokeOpacity": "1", "strokeLinejoin": "round", "fillOpacity": "1"}}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,64.3658,165.5221)"
              className="sm_label_53"
            >
              <tspan
                dy="7.632336309523794"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Delta
              </tspan>
            </text>
            <text
              x="101.56662698412698"
              y="261.1870238095238"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", opacity: "1", cursor: "pointer", "strokeOpacity": "1", "strokeLinejoin": "round", "fillOpacity": "1"}}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,64.3658,165.5221)"
              className="sm_label_90"
            >
              <tspan
                dy="7.632336309523794"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Delta
              </tspan>
            </text>
            <text
              x="101.56662698412698"
              y="261.1870238095238"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", opacity: "1", cursor: "pointer", "strokeOpacity": "1", "strokeLinejoin": "round", "fillOpacity": "1"}}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,64.3658,165.5221)"
              className="sm_label_127"
            >
              <tspan
                dy="7.632336309523794"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Delta
              </tspan>
            </text>
            <text
              x="101.56662698412698"
              y="261.1870238095238"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", opacity: "1", cursor: "pointer", "strokeOpacity": "1", "strokeLinejoin": "round", "fillOpacity": "1"}}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,64.3658,165.5221)"
              className="sm_label_164"
            >
              <tspan
                dy="7.632336309523794"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Delta
              </tspan>
            </text>
            <text
              x="101.56662698412698"
              y="261.1870238095238"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", opacity: "1", cursor: "pointer", "strokeOpacity": "1", "strokeLinejoin": "round", "fillOpacity": "1"}}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,64.3658,165.5221)"
              className="sm_label_199"
            >
              <tspan
                dy="7.632336309523794"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Delta
              </tspan>
            </text>
            <text
              x="101.56662698412698"
              y="261.1870238095238"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", opacity: "1", cursor: "pointer", "strokeOpacity": "1", "strokeLinejoin": "round", "fillOpacity": "1"}}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,64.3658,165.5221)"
              className="sm_label_236"
            >
              <tspan
                dy="7.632336309523794"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Delta
              </tspan>
            </text>
            <text
              x="101.56662698412698"
              y="261.1870238095238"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", opacity: "1", cursor: "pointer", "strokeOpacity": "1", "strokeLinejoin": "round", "fillOpacity": "1"}}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,64.3658,165.5221)"
              className="sm_label_273"
            >
              <tspan
                dy="7.632336309523794"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Delta
              </tspan>
            </text>
            <text
              x="101.56662698412698"
              y="261.1870238095238"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", opacity: "1", cursor: "pointer", "strokeOpacity": "1", "strokeLinejoin": "round", "fillOpacity": "1"}}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,64.3658,165.5221)"
              className="sm_label_310"
            >
              <tspan
                dy="7.632336309523794"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Delta
              </tspan>
            </text>
            <text
              x="101.56662698412698"
              y="261.1870238095238"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", opacity: "1", cursor: "pointer", "strokeOpacity": "1", "strokeLinejoin": "round", "fillOpacity": "1"}}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,64.3658,165.5221)"
              className="sm_label_347"
            >
              <tspan
                dy="7.632336309523794"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Delta
                           </tspan>
            </text>
          </svg>
        </a>
      </div>
    );
  }
}
const state = "State Info";
    const val = 55;
const deltaData =
      '<div class="hoverinfo">' +
      "<h6>" +
      state +
      " </h6>" +
      "Total No Of Beneficiaries - " +
      val +
      "" +
      "</div>";
Delta.defaultProps = {
  hoverColor:"red",
  hoverBackgroundColor:"grey",
  renderData:deltaData,
  defaultColor:"green",
  id:"delt"
};

Delta.propTypes = {
  hoverColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string.isRequired,
  renderData: PropTypes.string.isRequired,
  defaultColor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Delta;
