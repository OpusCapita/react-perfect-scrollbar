import React from 'react';
import { Panel, Grid, Row, Col } from 'react-bootstrap';
import PerfectScrollbarComponent from '../components/perfectscrollbar.component';
import NormalScrollbarComponent from '../components/normalscrollbar.component';
import SVGScrollbarComponent from '../components/svg-based.component';
import GithubLogo from '../images/logo-github.svg';
import './example.container.scss';


export default () => (
  <Grid>
    <Row>
      <Col xs={12} md={6}>
        <Row>
          <Col xs={10}>
            <h3>PerfectScrollbar</h3>
          </Col>
          <Col xs={2}>
            <a
              href="https://github.com/OpusCapita/react-component-template"
              style={{ marginTop: '20px', display: 'block' }}
            >
              <GithubLogo />
            </a>
          </Col>
        </Row>
        <Panel className="scrollContent">
          <PerfectScrollbarComponent />
        </Panel>
      </Col>
      <Col xs={12} md={6}>
        <Row>
          <Col xs={12}>
            <h3>Normal scrollbar</h3>
          </Col>
        </Row>
        <Panel className="scrollContent normal">
          <NormalScrollbarComponent />
        </Panel>
      </Col>
      <Col xs={12} md={6}>
        <Row>
          <Col xs={12}>
            <h3>Scrollbar with SVGs</h3>
          </Col>
        </Row>
        <Panel className="scrollContent">
          <SVGScrollbarComponent />
        </Panel>
      </Col>
    </Row>
  </Grid>
);
