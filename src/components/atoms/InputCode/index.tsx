import React, { useCallback, useRef } from 'react';

import { v4 } from 'uuid';

import { Container } from './styles';

interface IInputCodeProps {
  quantity?: number;
}

const InputCode: React.FC<IInputCodeProps> = ({ quantity = 6 }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSetNext = useCallback((index: number) => {
    const inputs = containerRef.current?.getElementsByTagName('input');
    const nextInput = inputs?.item(index + 1);

    if (!nextInput) return;

    nextInput.focus();
  }, []);

  const handlePaste = useCallback((value: string) => {
    console.log('handlepaste', value);
    const inputs = containerRef.current?.getElementsByTagName('input');
    const values = value.split('');

    inputs?.item(0)?.setAttribute('value', '');

    values.forEach((item, position) => {
      inputs?.item(position)?.setAttribute('value', item);
    });
  }, []);

  const onKeyUp = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
      const regex = new RegExp(/^[0-9]*$/);
      const isValid = regex.test(e.key);
      if (isValid) {
        handleSetNext(index);
      }
    },
    [handleSetNext],
  );

  return (
    <Container ref={containerRef}>
      {Array.from({ length: quantity }).map((_: any, index) => (
        <input
          key={v4()}
          id={v4()}
          type="text"
          autoComplete="off"
          onPaste={(e: any) => {
            handlePaste(e.clipboardData.getData('text/plain'));
          }}
          onChange={e => {
            e.target.value = e.target.value.replace(/\D/g, '').substring(0, 1);
          }}
          onKeyUp={(e: any) => {
            if (e.target?.value.length <= 1) {
              onKeyUp(e, index);
            }
          }}
        />
      ))}
    </Container>
  );
};

export { InputCode };
