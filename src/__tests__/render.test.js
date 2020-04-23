/** @jsx createElement */
import {createElement, Fragment} from "@bikeshaving/crank";
import { render, cleanup, fireEvent } from "../index";

describe("render()", () => {
  afterEach(cleanup);
  
  it("should render a sync component", () => {
    function Test() {
        return <div>Testing render</div>
    }

    render(<Test />);
    expect(document.body.innerHTML).toBe("<div><div>Testing render</div></div>");
  });

  it('should render an async component', async () => {
    const getName = () => new Promise((resolve, reject) => {
      resolve("Ryan");
    });

    async function Test() {
      const name = await getName();
      return <div>{name}</div>
    }

    await render(<Test />);
    expect(document.body.innerHTML).toBe("<div><div>Ryan</div></div>"); 
  });

  it('should render a sync generator component', async () => {
    function *Counter() {
      let count = 0;
      while (true) {
        count++;
        yield (
          <div>
            You have updated this component {count} {count === 1 ? "time" : "times"}
          </div>
        );
      }
    }

    await render(<Counter />);

    expect(document.body.innerHTML).toBe("<div><div>You have updated this component 1 time</div></div>"); 
  });

  it('should handle events', async () => {
    function *Counter() {
      let count = 0;
     
      const onclick = () => {
        count += 1;
        this.refresh();
      }
      
      while (true) {
        yield (
          <Fragment>
            <button onclick={onclick}>Click Me </button>
            <p>You have updated this component {count} {count === 1 ? "time" : "times"}</p>
          </Fragment>
        );
      }
    }

    const { getByText } = await render(<Counter />);

    expect(getByText("You have updated this component 0 times")).toBeTruthy();  
    
    const button = document.querySelector("button");
    
    fireEvent.click(button);

    expect(getByText("You have updated this component 1 time")).toBeTruthy(); 
  });
});