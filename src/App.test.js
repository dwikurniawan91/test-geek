import React from "react";
import { render, fireEvent } from "react-testing-library";
test("radio", () => {
  const { getByLabelText } = render(
    <form>
      <label>
         First <input type="radio" name="radio1" value="first" id="firstRadioId" />
      </label>
      <label>
        Second <input type="radio" name="radio1" value="second" />
      </label>
    </form>
  );
  const radio = getByLabelText('First')
  fireEvent.change(radio, { target: { value: "second" } });
  expect(radio.value).toBe('second')
});