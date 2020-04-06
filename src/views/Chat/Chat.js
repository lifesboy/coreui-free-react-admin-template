import React, {Component} from 'react';
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
  ListGroupItemHeading,
  ListGroupItemText,
  Row,
  TabContent,
  TabPane,
  Table,
  Collapse
} from 'reactstrap';
import CoreUIIcons from "../Icons/CoreUIIcons/CoreUIIcons";

class Chat extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 1
    };


    this.onEntering = this.onEntering.bind(this);
    this.onEntered = this.onEntered.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.toggleCustom = this.toggleCustom.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: false,
      accordion: [true, false, false],
      custom: [true, false],
      status: 'Closed',
      fadeIn: true,
      timeout: 300,
    };
  }

  onEntering() {
    this.setState({status: 'Opening...'});
  }

  onEntered() {
    this.setState({status: 'Opened'});
  }

  onExiting() {
    this.setState({status: 'Closing...'});
  }

  onExited() {
    this.setState({status: 'Closed'});
  }

  toggle() {
    this.setState({collapse: !this.state.collapse});
  }

  toggleAccordion(tab) {

    const prevState = this.state.accordion;
    const state = prevState.map((x, index) => tab === index ? !x : false);

    this.setState({
      accordion: state,
    });
  }

  toggleCustom(tab) {

    const prevState = this.state.custom;
    const state = prevState.map((x, index) => tab === index ? !x : false);

    this.setState({
      custom: state,
    });
  }

  toggleFade() {
    this.setState({fadeIn: !this.state.fadeIn});
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="12" xl="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Tin nhắn</strong>
              </CardHeader>
              <CardBody>
                <ListGroup>
                  <ListGroupItem>
                    <Row>
                      <Col className="col-sm-2">
                        <i className="flag-icon flag-icon-ad h1" title="ad" id="ad"></i>
                      </Col>
                      <Col className="col-sm-10">
                        <h2>Người dùng 1</h2>
                        <h6>Gửi báo cáo đi</h6>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <Col className="col-sm-2">
                        <i className="flag-icon flag-icon-ad h1" title="ad" id="ad"></i>
                      </Col>
                      <Col className="col-sm-10">
                        <h2>Tên nhóm 1</h2>
                        <h6>anh: đã nhận được báo cáo</h6>
                      </Col>
                    </Row>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" xl="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Danh bạ</strong>
              </CardHeader>

              <CardBody>
                <div id="accordion">

                  <Card className="mb-0">
                    <CardHeader id="headingOne">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(0)}
                              aria-expanded={this.state.accordion[0]} aria-controls="collapseOne">
                        <h5 className="m-0 p-0">I65</h5>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[0]} data-parent="#accordion" id="collapseOne"
                              aria-labelledby="headingOne">
                      <CardBody>
                        <Table responsive>
                          <thead>
                          <tr>
                            <th>STT</th>
                            <th>Tên người dùng</th>
                            <th>Tr.thái đăng nhập</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td>1</td>
                            <td>1</td>
                            <td>Đang đăng nhập</td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>1</td>
                            <td>Đang đăng nhập</td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>1</td>
                            <td>Đang đăng nhập</td>
                          </tr>
                          </tbody>
                        </Table>
                      </CardBody>
                    </Collapse>
                  </Card>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Chat;
