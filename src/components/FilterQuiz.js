import React from "react";
class FilterQuiz extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      list: ["car", "map", "house"],
    };
  }
  inputValue(e) {
    this.setState({
      text: e.target.value,
    });
  }
  addValue() {
    const text = this.state.text;
    this.setState({ list: [...this.state.list, text] });
  }
  render() {
    return (
      <div>
        <input onChange={this.inputValue.bind(this)} type="text" />
        <ul>
          {this.state.list.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        <button onClick={this.addValue.bind(this)}>Add Element</button>
      </div>
    );
  }
}
export default FilterQuiz;
