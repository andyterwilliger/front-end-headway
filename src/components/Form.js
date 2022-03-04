import "../css/form.css";
import { Button } from "react-bootstrap";
function Form() {
  return (
    <div className="form-container">
      <form className="form" action="https://7tnxqt.sse.codesandbox.io/">
        <label for="url"></label>
        <br />
        <input
          type="text"
          id="url"
          name="url"
          placeholder="Make your links shorter"
        />{" "}
        <br />
        <label for="slug"></label>
        <br />
        <input
          type="text"
          id="slug"
          name="slug"
          placeholder="Custom Slug"
        />{" "}
        <br /> <br />
        <div className="button-container">
          <Button type="submit" id="submit-url" size="lg" active>
            Shorten URL
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Form;
