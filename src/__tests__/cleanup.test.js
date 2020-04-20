/** @jsx createElement */
import {createElement} from "@bikeshaving/crank";
import { render, cleanup } from "../index";

describe("cleanup()", () => {
  it("should clear the document", () => {
    function Test() {
        return <div>Testing cleanup</div>
    }

    render(<Test />);
    expect(document.body.innerHTML).toBe("<div><div>Testing cleanup</div></div>");
    cleanup();
    expect(document.body.innerHTML).toBe("");
  });
});
