import React, { useCallback, useMemo, useState } from "react";

import { useAsync } from "react-async-hook";
import { TaskDef, parseTask } from "../utils/parsers/task";
import {
  Button,
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  makeStyles,
} from "@material-ui/core";
import WordInput from "./WordInput";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

interface LoadProps {
  taskFileUrl: string;
}

interface TaskProps {
  task: TaskDef;
}

const AudioContext = window.AudioContext || (window as any).webkitAudioContext;

const useStyles = makeStyles((theme) => ({
  playButton: {
    color: theme.palette.background.default,
    backgroundColor: theme.palette.info.light,
    margin: "4px",
    padding: "4px 8px",
    boxSizing: "content-box",
    borderRadius: "4px",
  },
}));

const fetchTask = async (taskFileUrl: string) => {
  if (!taskFileUrl) {
    // Absurd. klass will actually always be defined
    console.log("empty task");
    return;
  }

  const req = await fetch(taskFileUrl);
  const body = await req.text();

  return parseTask(body);
};

interface StatusProps {
  msg: string;
  error?: boolean;
}

const Status = ({ msg, error }: StatusProps) => (
  <Typography variant="h3" component="h1" gutterBottom align="center">
    {error && "Error: "}
    {msg}
  </Typography>
);
const Task = React.memo((props: TaskProps) => {
  const { task } = props;
  const [currWord, setCurrWord] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showWord, setShowWord] = useState(true);
  const [hash, setHash] = useState("");

  const { title, words, instructions } = task;
  const word = words[currWord];

  const classes = useStyles();

  const handleSubmit = useCallback(() => {
    setShowModal(true);
  }, []);

  const lastWord = task.words.length - 1;

  const dismissModal = useCallback(() => {
    if (currWord === lastWord) {
      // Display the new stuff
      setShowWord(false);
    } else {
      setCurrWord((prev) => prev + 1);
    }
    setShowModal(false);
  }, [currWord, lastWord]);

  var audioCtx = useMemo(
    () =>
      new AudioContext({
        latencyHint: "interactive",
        sampleRate: 44100,
      }),
    []
  );

  const audioFile = useMemo(() => {
    return word.audio ? new Audio(`/ex-lign101/${word.audio}`) : null;
  }, [word.audio]);

  const playAudio = useCallback(() => {
    if (audioFile) {
      audioFile.currentTime = 0;
      audioFile.play();
    }
  }, [audioFile]);

  /**
   * Cases:
   * if classTasks.result : Good
   * while loading class && manifest: Class name
   * while loading manifest: Loading...
   * if (classTasks.error) : "cannot load class X"
   *
   */

  const dismissText = currWord < lastWord ? "Next word" : "Finish";

  return (
    <div>
      <Typography variant="h3" component="h2" gutterBottom align="center">
        {title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {instructions}
      </Typography>
      <Typography variant="h4" component="p" align="center">
        Transcribe "{word.display}"{" "}
        <Button
          variant="contained"
          color="secondary"
          startIcon={<PlayCircleFilledIcon />}
          onClick={playAudio}
        >
          Play
        </Button>
      </Typography>

      <Collapse in={showWord}>
        <WordInput word={word} onSubmit={handleSubmit} />
      </Collapse>
      {showWord || (
        <>
          <Typography variant="h3" component="h3" gutterBottom align="center">
            You're done!
          </Typography>
        </>
      )}

      <Dialog
        open={showModal}
        onClose={dismissModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        disableRestoreFocus
      >
        <DialogTitle id="alert-dialog-title">Congrats! You got it correct</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You did a good job of getting the word correct!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={dismissModal} color="primary">
            {dismissText}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
});

/**
 * Wrapper around the Task with loading state
 */
const LoadTask = (props: LoadProps) => {
  const { taskFileUrl } = props;
  const task = useAsync(fetchTask, [taskFileUrl]);

  if (task.result) {
    return <Task task={task.result} />;
  } else if (task.loading) {
    return (
      <div>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Loading...
        </Typography>
      </div>
    );
  } else if (task.error) {
    console.log(task.error);
    return <Status error msg="Cannot load task file" />;
  } else {
    return <Status error msg="Unreachable state???" />;
  }
};

export default LoadTask;