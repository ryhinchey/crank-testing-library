/** @jsx createElement */
import {createElement} from "@bikeshaving/crank";
import { render } from "../index";

describe("render()", () => {
  it("should render the component", () => {
    function Test() {
        return <div>Testing render</div>
    }

    render(<Test />);
    expect(document.body.innerHTML).toBe("<div><div>Testing render</div></div>");
  });
});