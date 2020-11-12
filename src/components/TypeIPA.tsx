import React, {
  useReducer,
  useCallback,
  useRef,
  RefObject,
  MutableRefObject,
  useEffect,
} from "react";
import { Box, Grid, IconButton, TextField } from "@material-ui/core";

import Keyboard from "./keyboard/Keyboard";

import BackspaceOutlinedIcon from "@material-ui/icons/BackspaceOutlined";
import { cursorTo } from "readline";

interface Action<T> {
  type: T;
}

interface ValueAction<T> extends Action<T> {
  type: T;
  value: string;
}

type Actions = Action<"delete"> | ValueAction<"append"> | ValueAction<"set">;
interface State {
  cursor: number;
  value: string;
  ref: RefObject<HTMLInputElement>;
}

function reducer(state: State, action: Actions): State {
  const { value } = state;
  // make broad assumptions about never having a large cursor selection
  const cursor = state.ref?.current?.selectionStart || 0;
  console.log(cursor);
  switch (action.type) {
    case "delete":
      return {
        ...state,
        cursor: cursor > 0 ? cursor - 1 : cursor,
        value: value.slice(0, cursor - 1) + value.slice(cursor, value.length),
      };
    case "append":
      return {
        ...state,
        cursor: cursor + 1,
        value: value.slice(0, cursor) + action.value + value.slice(cursor, value.length),
      };
    case "set":
      return { ...state, value: action.value };
  }
}

const TypeIPA = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [state, dispatch] = useReducer(reducer, { cursor: 0, value: "", ref: inputRef });
  const keyboardClick = useCallback((char: string) => dispatch({ type: "append", value: char }), [
    dispatch,
  ]);
  const setValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => dispatch({ type: "set", value: e.target.value }),
    [dispatch]
  );
  const deleteClick = useCallback(() => dispatch({ type: "delete" }), [dispatch]);

  const { cursor } = state;

  useEffect(() => {
    if (cursor) {
      inputRef?.current?.setSelectionRange(cursor, cursor);
    }
  }, [cursor]);

  return (
    <div>
      <Grid container alignItems="center" justify="center" spacing={2}>
        <Grid item xs={10} md={8}>
          <TextField
            id="filled-multiline-flexible"
            multiline
            fullWidth
            rowsMax={4}
            inputRef={inputRef}
            value={state.value}
            onChange={setValue}
            variant="outlined"
            inputProps={{ spellCheck: "false" }}
          />
        </Grid>
        <Grid>
          <IconButton aria-label="delete" color="secondary" onClick={deleteClick}>
            <BackspaceOutlinedIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Box mb={1} />
      <Keyboard onClick={keyboardClick} />
    </div>
  );
};

export default TypeIPA;
