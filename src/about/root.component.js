import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

const AnimationExample = () => (
  <div className="container">
    <div className="row">
      <div className="col s12">
        <h1>About</h1>
        <p>
          Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores não
          altera o pão duris. In elementis mé pra quem é amistosis quis leo.
          Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean
          sit amet nisi. Si num tem leite então bota uma pinga aí cumpadi!
        </p>
      </div>
    </div>
  </div>
);

export default AnimationExample;
