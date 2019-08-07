import React from "react";
import { Route, Switch } from "react-router-dom";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

export default function Wizard() {
  return (
    <div>
      <Switch>
        <Route component={StepOne} path="/wizard/step1" />
        <Route component={StepTwo} path="/wizard/step2" />
        <Route component={StepThree} path="/wizard/step3" />
      </Switch>
    </div>
  );
}
