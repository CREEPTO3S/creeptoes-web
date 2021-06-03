import React, { useRef, useEffect, useState } from 'react';
import { AVAILABLE_COMMANDS } from '@helpers';
import style from './style';

const {
  Pre,
  Input,
  Command,
} = style;

const CommandPromptComponent = () => {
  const [commands, setCommands] = useState(['']);
  const [responses, setResponses] = useState(['']);

  const setCommandFieldWidth = () => {
    const commandField = document.querySelector(`#cmd-${commands.length}`);
    commandField.style.width = `${commands[commands.length - 1].length + 1}ch`;
  };

  const focusOnInput = () => {
    document.querySelector(`#cmd-${commands.length}`).focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setCommands((prevState) => {
        const newCommands = [...prevState];
        newCommands.push('');

        return newCommands;
      });
    }
  };

  const prevCommandsLengthRef = useRef();
  useEffect(() => {
    prevCommandsLengthRef.current = commands.length;
  });
  const prevCommandsLength = prevCommandsLengthRef.current;

  useEffect(() => {
    if (prevCommandsLength && prevCommandsLength !== commands.length) {
      setResponses((prevState) => {
        const availableCommands = Object.entries(AVAILABLE_COMMANDS).map((cmd) => `${cmd[1].cmd} - ${cmd[1].desc}`).join('\n');
        const command = commands[commands.length - 2];
        let newResponses = [...prevState];
        switch (command) {
          case AVAILABLE_COMMANDS.clear.cmd:
            setCommands(['']);
            newResponses = [''];
            break;
          case AVAILABLE_COMMANDS.help.cmd:
            newResponses[commands.length - 2] = availableCommands;
            break;
          default:
            newResponses[commands.length - 2] = `'${command}' is not recognized as an internal or external command,\noperable program or batch file.`;
            break;
        }

        return newResponses;
      });
      focusOnInput();
      return;
    }

    setCommandFieldWidth();
  }, [commands]);

  return (
    <Pre onClick={focusOnInput}>
      Microsoft&#10094;R&#10095; Windows DOS
      <br />
      &#10094;C&#10095; Copyright Microsoft Corp 1990-2001.
      <br />
      <br />
      {commands.map((command, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Command key={index + 1}>
          C:&#92;WINDOWS&#92;SYSTEM32&gt;
          <Input
            id={`cmd-${index + 1}`}
            value={command}
            onChange={(e) => setCommands((prevState) => {
              const newCommands = [...prevState];
              newCommands[index] = e.target.value;
              return newCommands;
            })}
            onKeyDown={handleKeyDown}
          />
          {responses[index] && (
            <>
              <br />
              {responses[index]}
            </>
          )}
          {(commands.length > 1 && responses[index]) && (
            <>
              <br />
              <br />
            </>
          )}
        </Command>
      ))}
    </Pre>
  );
};

export default CommandPromptComponent;
