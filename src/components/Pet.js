import { createElement } from "react";
export const Pet = (props) => {
  return createElement("div", {}, [
    createElement("h1", {}, props.name),
    createElement("h2", {}, props.animal),
    createElement("h2", {}, props.breed),
  ]);
};
