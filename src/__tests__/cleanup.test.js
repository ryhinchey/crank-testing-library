/** @jsx createElement */
import {createElement} from "@bikeshaving/crank";
import { render, cleanup } from "../index";

describe("cleanup()", () => {
  it("should clear the document", async () => {
    function Test() {
        return <div>Testing cleanup</div>
    }

    render(<Test />);
    expect(document.body.innerHTML).toBe("<div><div>Testing cleanup</div></div>");
    await cleanup();
    expect(document.body.innerHTML).toBe("");
  });
});
