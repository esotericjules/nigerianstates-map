import React, { Component } from "react";
import PropTypes from "prop-types"; 
class Ebonyi extends Component {
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
          <span id={this.state.id} ref="myRef1">Ebonyi State</span>
          <svg
            height="300.0226150793651"
            version="1.1"
            width="369.2"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display:"block", overflow: "hidden", position: "relative", left: "-0.2px", top: "0.733333px"}}
            viewBox="141.0872588709321 219.95613876863877 42.34056162321516 34.407166907166896"
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
              strokeWidth="0.31310770994561227"
              style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "fillOpacity": "0"}}
              fillOpacity="0"
            />
            <path
              fill="#88a4bc"
               stroke="#ffffff"id={this.state.id}ref="myRef2"
              d="M468.5,611L469.7,615.6L472.9,619.3000000000001L475.09999999999997,620.9000000000001L475.7,621.7L476,622.6L477.4,624.2L477.79999999999995,626.8000000000001L478.69999999999993,629.1L480.3999999999999,631.3000000000001L480.69999999999993,634.0000000000001L475.49999999999994,636.9000000000001L474.8999999999999,639.7L476.49999999999994,642.2L475.79999999999995,647.9000000000001L471.09999999999997,652.6000000000001L469.2,655.1000000000001L467.59999999999997,657.6000000000001L466.09999999999997,663.9000000000001L464.7,666.1000000000001L462.3,665.0000000000001L460.1,665.0000000000001L459,666.8000000000001L457.7,668.4000000000001L453.9,670.2L452.29999999999995,671.7L450.19999999999993,671.8000000000001L448.5999999999999,668.0000000000001L445.4999999999999,667.1000000000001L442.0999999999999,668.2000000000002L441.0999999999999,670.3000000000002L442.4999999999999,672.9000000000002L441.39999999999986,676.6000000000003L438.4999999999999,681.2000000000003L437.2999999999999,682.3000000000003L437.1999999999999,684.3000000000003L437.4999999999999,686.2000000000003L436.39999999999986,687.9000000000003L435.09999999999985,689.4000000000003L434.29999999999984,691.4000000000003L433.99999999999983,693.5000000000003L430.99999999999983,692.4000000000003L428.29999999999984,690.3000000000003L426.89999999999986,687.7000000000003L426.29999999999984,684.8000000000003L421.79999999999984,682.7000000000003L409.6999999999998,682.6000000000003L404.79999999999984,680.1000000000003L405.49999999999983,674.7000000000003L405.3999999999998,669.8000000000003L409.5999999999998,668.5000000000003L411.6999999999998,669.6000000000004L413.49999999999983,670.8000000000004L416.3999999999998,673.6000000000004L418.6999999999998,672.4000000000003L417.6999999999998,668.1000000000004L418.29999999999984,663.9000000000003L420.29999999999984,661.6000000000004L421.99999999999983,659.1000000000004L421.79999999999984,656.6000000000004L421.1999999999998,654.0000000000003L420.99999999999983,651.4000000000003L420.09999999999985,647.9000000000003L419.99999999999983,646.8000000000003L418.49999999999983,644.6000000000003L422.09999999999985,633.4000000000002L422.1999999999999,627.5000000000002L418.89999999999986,616.8000000000002L421.4999999999999,615.1000000000001L424.2999999999999,615.4000000000001L429.8999999999999,614.8000000000001L432.5999999999999,620.6L438.2999999999999,624.1L441.9999999999999,619.1L442.7999999999999,612.1L444.0999999999999,609.3000000000001L447.5999999999999,608.8000000000001L450.8999999999999,608.8000000000001L454.0999999999999,608.0000000000001L457.19999999999993,603.9000000000001L459.0999999999999,603.5000000000001L460.9999999999999,603.5000000000001L461.89999999999986,602.2000000000002L462.29999999999984,601.3000000000002L463.99999999999983,601.4000000000002L464.8999999999998,602.8000000000002L465.49999999999983,606.0000000000002L466.59999999999985,608.8000000000002L468.49999999999983,611.0000000000002Z"
              className="sm_state_NGA2863"
              opacity="1"
              strokeOpacity="1"
              strokeWidth="0.21674881220985007"
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
              x="164.12551587301587"
              y="236.09753968253966"
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
              transform="matrix(0.3663,0,0,0.3663,104.0113,149.6221)"
              className="sm_label_13"
            >
              <tspan
                dy="7.6991021825396615"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Ebonyi
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
const ebonyiData =
      '<div class="hoverinfo">' +
      "<h6>" +
      state +
      " </h6>" +
      "Total No Of Farms - " +
      val +
      "" +
      "</div>";
Ebonyi.defaultProps = {
  hoverColor:"red",
  hoverBackgroundColor:"grey",
  renderData:ebonyiData,
  defaultColor:"green",
  id:"ab"
};

Ebonyi.propTypes = {
  hoverColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string.isRequired,
  renderData: PropTypes.string.isRequired,
  defaultColor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Ebonyi;
