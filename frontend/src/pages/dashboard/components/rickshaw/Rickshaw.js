import React from "react";
import Rickshaw from "rickshaw";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class RickshawGraph extends React.Component {
  static propTypes = {
    height: PropTypes.number,
  };

  static defaultProps = {
    height: 100,
  };

  constructor(props) {
    super(props);
    this.state = {
      graph: null,
    };
    this.initRickshaw = this.initRickshaw.bind(this);
    this.onResizeRickshaw = this.onResizeRickshaw.bind(this);
  }

  componentDidMount() {
    this.initRickshaw();
    window.addEventListener("resize", this.onResizeRickshaw);
  }

  componentDidUpdate(prevProps) {
    if (this.props.sidebarStatic !== prevProps.sidebarStatic) {
      setTimeout(() => this.onResizeRickshaw(), 1000);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResizeRickshaw);
  }

  onResizeRickshaw() {
    this.state.graph.configure({ height: this.props.height });
    this.state.graph.render();
  }

  initRickshaw() {
    const seriesData = [[], []];
    const random = new Rickshaw.Fixtures.RandomData(30);
    for (let i = 0; i < 30; i += 1) {
      random.addData(seriesData);
    }

    this.state.graph = new Rickshaw.Graph({
      element: this.rickshawChart,
      height: this.props.height,
      series: [
        {
          color: "#1A86D0",
          data: seriesData[0],
          name: "Uploads",
        },
        {
          color: "#005792",
          data: seriesData[1],
          name: "Downloads",
        },
      ],
    });

    const hoverDetail = new Rickshaw.Graph.HoverDetail({
      graph: this.state.graph,
      xFormatter: (x) => new Date(x * 1000).toString(),
    });

    hoverDetail.show();

    setInterval(() => {
      random.removeData(seriesData);
      random.addData(seriesData);
      this.state.graph.update();
    }, 1000);

    this.state.graph.render();
  }

  render() {
    return (
      <div
        ref={(r) => {
          this.rickshawChart = r;
        }}
      />
    );
  }
}

function mapStateToProps(store) {
  return {
    sidebarStatic: store.navigation.sidebarStatic,
  };
}

export default connect(mapStateToProps)(RickshawGraph);
