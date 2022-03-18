import { KeyboardEvent, MouseEvent, useEffect, useRef, useState } from 'react';
import classes from './App.module.css';
import Button from './UI/Button/Button';
import ButtonBigger from './UI/ButtonBigger/ButtonBigger';
import ButtonBiggerVertical from './UI/ButtonBiggerVertical/ButtonBiggerVertical';
import ButtonTool from './UI/ButtonTool/ButtonTool';
import ButtonZero from './UI/ButtonZero/ButtonZero';

const App = () => {
  const [memory, setMemory] = useState<string>('');
  const [currentNumber, setCurrentNumber] = useState('');
  const [temp, setTemp] = useState('');
  const [displayHistory, setDisplayHistory] = useState('');
  const [isFinalResult, setIsFinalResult] = useState(false);

  const clickHandler = (e: MouseEvent) => {
    const target = e.target as HTMLDivElement;

    if (isFinalResult) {
      if (target.innerText === '.') {
        setTemp(memory);
      } else {
        setTemp('');
      }
      setIsFinalResult(false);
    }

    setTemp(prev => {
      if (
        (target.innerText === '.' && prev === '') ||
        (target.innerText === '.' && prev[prev.length - 1] === '/') ||
        (target.innerText === '.' && prev[prev.length - 1] === '+') ||
        (target.innerText === '.' && prev[prev.length - 1] === '-') ||
        (target.innerText === '.' && prev[prev.length - 1] === '*')
      ) {
        return prev;
      }
      return (prev += target.innerText);
    });

    setCurrentNumber(prev => {
      if (
        (target.innerText === '.' && prev === '') ||
        (target.innerText === '.' && prev[prev.length - 1] === '/') ||
        (target.innerText === '.' && prev[prev.length - 1] === '+') ||
        (target.innerText === '.' && prev[prev.length - 1] === '-') ||
        (target.innerText === '.' && prev[prev.length - 1] === '*')
      ) {
        return prev;
      }
      return target.innerText;
    });
  };

  const toolHandler = (e: MouseEvent) => {
    if (isFinalResult) {
      setTemp(memory);
      setIsFinalResult(false);
    }

    const target = e.target as HTMLDivElement;

    setTemp(prev => {
      if (
        prev === '' ||
        prev === 'Select number' ||
        prev[prev.length - 1] === '.' ||
        prev[prev.length - 1] === '/' ||
        prev[prev.length - 1] === '*' ||
        prev[prev.length - 1] === '+' ||
        prev[prev.length - 1] === '-'
      ) {
        return prev;
      }
      return (prev += target.innerText);
    });

    setCurrentNumber(prev => {
      if (
        prev === '' ||
        prev === 'Select number' ||
        prev === '.' ||
        prev[prev.length - 1] === '/' ||
        prev[prev.length - 1] === '*' ||
        prev[prev.length - 1] === '+' ||
        prev[prev.length - 1] === '-'
      ) {
        return '';
      }
      return target.innerText;
    });
  };

  const clearHandler = () => {
    setTemp('');
    setDisplayHistory('');
    setCurrentNumber('');
    setMemory('');
  };

  const finalResultHandler = () => {
    if (
      temp[temp.length - 1] === '/' ||
      temp[temp.length - 1] === '+' ||
      temp[temp.length - 1] === '-' ||
      temp[temp.length - 1] === '*'
    ) {
      return;
    }

    //eslint-disable-next-line
    const result = eval(temp);
    if (!result) {
      return setCurrentNumber('Select number');
    }
    setMemory(result);
    setDisplayHistory(prev => prev + '= ' + result);
    setCurrentNumber(result);
    setIsFinalResult(true);
  };

  const keyHandler = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'Enter':
        document.getElementById('equals')?.click();
        break;
      case '-':
        document.getElementById('-')?.click();
        break;
      case '+':
        document.getElementById('+')?.click();
        break;
      case '*':
        document.getElementById('*')?.click();
        break;
      case '/':
        document.getElementById('/')?.click();
        break;
      case '1':
        document.getElementById('1')?.click();
        break;
      case '2':
        document.getElementById('2')?.click();
        break;
      case '3':
        document.getElementById('3')?.click();
        break;
      case '4':
        document.getElementById('4')?.click();
        break;
      case '5':
        document.getElementById('5')?.click();
        break;
      case '6':
        document.getElementById('6')?.click();
        break;
      case '7':
        document.getElementById('7')?.click();
        break;
      case '8':
        document.getElementById('8')?.click();
        break;
      case '9':
        document.getElementById('9')?.click();
        break;
      case '0':
        document.getElementById('0')?.click();
        break;
      case '.':
        document.getElementById('.')?.click();
        break;
    }
  };

  useEffect(() => {
    setDisplayHistory(temp);
  }, [temp]);

  const controls = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (controls.current) {
      controls.current.focus();
      controls.current.style.outline = 'none';
    }
  }, []);

  document.addEventListener('click', () => {
    if (controls.current) {
      controls.current.focus();
    }
  });

  return (
    <div className={classes.App}>
      <div className={classes.Display}>
        <div className={classes.Memory}>{displayHistory}</div>
        <div className={classes.Actual}>{currentNumber}</div>
      </div>
      <div
        className={classes.Controls}
        ref={controls}
        onKeyPress={keyHandler}
        tabIndex={0}
      >
        <div className={classes.Numbers}>
          <ButtonBigger onClick={clearHandler} />
          <ButtonTool inner="-" onClick={toolHandler} />
          <Button inner="7" onClick={clickHandler} />
          <Button inner="8" onClick={clickHandler} />
          <Button inner="9" onClick={clickHandler} />
          <Button inner="4" onClick={clickHandler} />
          <Button inner="5" onClick={clickHandler} />
          <Button inner="6" onClick={clickHandler} />
          <Button inner="1" onClick={clickHandler} />
          <Button inner="2" onClick={clickHandler} />
          <Button inner="3" onClick={clickHandler} />
          <ButtonZero onClick={clickHandler} />
          <Button inner="." onClick={clickHandler} />
        </div>
        <div className={classes.Tools}>
          <ButtonTool inner="+" onClick={toolHandler} />
          <ButtonTool inner="*" onClick={toolHandler} />
          <ButtonTool inner="/" onClick={toolHandler} />
          <ButtonBiggerVertical onClick={finalResultHandler} />
        </div>
      </div>
    </div>
  );
};

export default App;
