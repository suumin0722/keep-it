import React from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

import s from "./ListGroup.module.scss";

import a3 from "../../../images/people/a3.jpg";
import a5 from "../../../images/people/a5.jpg";
import a6 from "../../../images/people/a6.jpg";

class NewNotificationsDemo extends React.Component {
  render() {
    return (
      <ListGroup className={[s.listGroup, "thin-scroll"].join(" ")}>
        <ListGroupItem className={`${s.listGroupItem} bg-attention`}>
          <span className={[s.notificationIcon, "thumb-sm"].join(" ")}>
            <i className="fa fa-check text-success fa-lg" />
          </span>
          <p className="m-0 overflow-hidden">
            2 issues require your approval.
            {}
            &nbsp;<a href="#">The Search Project</a> completed on time!
            {}
            <time className="help-block m-0">just now</time>
          </p>
        </ListGroupItem>
        <ListGroupItem className={`${s.listGroupItem} bg-attention`}>
          <span className={[s.notificationIcon, "thumb-sm"].join(" ")}>
            <img className="rounded-circle" src={a6} alt="..." />
          </span>
          <p className="m-0 overflow-hidden">
            <button className="btn-link">Jeniffer Willington</button>has just
            endorsed you with 50 points!
            <time className="help-block m-0">30 sec ago</time>
          </p>
        </ListGroupItem>
        <ListGroupItem className={s.listGroupItem}>
          <span className={[s.notificationIcon, "thumb-sm"].join(" ")}>
            <img className="rounded-circle" src={a3} alt="..." />
          </span>
          <p className="m-0 overflow-hidden">
            1 new user just signed up! Check out
            {}
            &nbsp;<a href="#">Monica Smith</a>'s account.
            {}
            <time className="help-block m-0">2 mins ago</time>
          </p>
        </ListGroupItem>
        <ListGroupItem className={s.listGroupItem}>
          <span className={[s.notificationIcon, "thumb-sm"].join(" ")}>
            <i className="bi bi-upload fa-lg" />
          </span>
          <p className="text-ellipsis m-0">
            2.1.0-pre-alpha just released.
            <time className="help-block m-0">5h ago</time>
          </p>
        </ListGroupItem>
        <ListGroupItem className={s.listGroupItem}>
          <span className={[s.notificationIcon, "thumb-sm"].join(" ")}>
            <i className="fa fa-bolt fa-lg" />
          </span>
          <p className="text-ellipsis m-0 overflow-hidden">
            Server load limited.
            <time className="help-block m-0">7h ago</time>
          </p>
        </ListGroupItem>
        <ListGroupItem className={s.listGroupItem}>
          <span className={[s.notificationIcon, "thumb-sm"].join(" ")}>
            <img className="rounded-circle" src={a5} alt="..." />
          </span>
          <p className="m-0 overflow-hidden">
            {}
            User <a href="#">Jeff</a> registered
            {}
            &nbsp;&nbsp;
            <Button size="xs" color="success" className="mr-1">
              Allow
            </Button>
            <Button size="xs" color="danger">
              Deny
            </Button>
            <time className="help-block m-0">12:18 AM</time>
          </p>
        </ListGroupItem>
        <ListGroupItem className={s.listGroupItem}>
          <span className={[s.notificationIcon, "thumb-sm"].join(" ")}>
            <i className="fa fa-shield fa-lg" />
          </span>
          <p className="m-0 overflow-hidden">
            {/* eslint-disable */}
            Instructions for changing your Envato Account password. Please check your account <a href="#">security page</a>.
            {/* eslint-enable */}
            <time className="help-block m-0">12:18 AM</time>
          </p>
        </ListGroupItem>
        <ListGroupItem className={s.listGroupItem}>
          <span className={[s.notificationIcon, "thumb-sm"].join(" ")}>
            <span className="rounded bg-primary rounded-lg">
              <i className="fa fa-facebook text-white" />
            </span>
          </span>
          <p className="text-ellipsis m-0">
            New <strong>76</strong> facebook likes received.
            <time className="help-block m-0">15 Apr 2014</time>
          </p>
        </ListGroupItem>
        <ListGroupItem className={s.listGroupItem}>
          <span className={[s.notificationIcon, "thumb-sm"].join(" ")}>
            <span className="circle circle-lg bg-gray-dark">
              <i className="fa fa-circle-o text-white" />
            </span>
          </span>
          <p className="text-ellipsis m-0">
            Dark matter detected.
            <time className="help-block m-0">15 Apr 2014</time>
          </p>
        </ListGroupItem>
      </ListGroup>
    );
  }
}

export default NewNotificationsDemo;
