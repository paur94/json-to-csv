import React, { Component } from 'react';
import { CSVLink } from "react-csv";
import myData from './json.json';

 
class AsyncCSV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    this.csvLinkEl = React.createRef();
  }
 
  getUserList = () => {
    return myData
  }
 
  downloadReport = async () => {
    const data = await this.getUserList();
    this.setState({ data: data }, () => {
        console.log(data)
      setTimeout(() => {
        this.csvLinkEl.current.link.click();
      });
    });
  }
 
  render() {
    const { data } = this.state;
 
    return (
      <div>
        <input type="button" value="Download CSV" onClick={this.downloadReport} />
        <CSVLink
          filename="report.csv"
          data={data}
          ref={this.csvLinkEl}
        />
      </div>
    );
  }
}
 
export default AsyncCSV;