import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';

import * as Icons from '@assets/icons';
import { Button, Input, Visibility, InputCode } from '@components/atoms';
import { IFormHandles } from '@contexts/ReactFormContext';

import {
  Container,
  OnboardingBox,
  FormBox,
  Unform,
  ResendCode,
  BoxMessage,
} from './styles';

interface IStepsProps {
  step: 'sign-in-email' | 'access-code';
}

const SignIn: React.FC = () => {
  const formRef = useRef<IFormHandles>(null);
  const [step, setStep] = useState<IStepsProps['step']>('sign-in-email');
  const [canResendCode, setCanResendCode] = useState(false);
  const [counter, setCounter] = useState(0);
  const [codeStatus] = useState<'success' | 'warning' | 'error'>('success');

  const handleResendCode = useCallback(async () => {
    setCanResendCode(false);
    setCounter(30);
  }, []);

  const requestCodeAccess = useCallback(async (formData: any) => {
    console.log(formData);
    setStep('access-code');
    setCanResendCode(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(value => {
        if (value === 0) {
          setCanResendCode(true);
          return 0;
        }
        return value - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [counter]);

  return (
    <Container>
      <OnboardingBox>
        {step === 'sign-in-email' && (
          <FormBox>
            <h2>Sign In</h2>

            <p>Enter your email so we can send you your access code.</p>

            <Unform ref={formRef} onSubmit={requestCodeAccess}>
              <Input label="E-mail" name="email" placeholder="name@email.com" />

              <Button type="submit">Send access code</Button>
            </Unform>
          </FormBox>
        )}

        {step === 'access-code' && (
          <FormBox isAccessCode>
            {codeStatus === 'success' && (
              <BoxMessage>
                <AiOutlineCheckCircle size={40} color="#219653" />

                <span>Code sent to your email!</span>

                <p>Access your email and enter the access code below.</p>
              </BoxMessage>
            )}

            {codeStatus === 'warning' && (
              <BoxMessage>
                <Icons.ExpiredCode />

                <span>Expired code!</span>

                <p>Click resend code to receive a new code in your email.</p>
              </BoxMessage>
            )}

            {codeStatus === 'error' && (
              <BoxMessage>
                <Icons.InvalidCode />

                <span>Invalid code!</span>

                <p>Check your email and enter the code correctly.</p>
              </BoxMessage>
            )}

            <Unform ref={formRef} onSubmit={requestCodeAccess}>
              <InputCode quantity={6} />

              <Button type="submit">Sign In</Button>
            </Unform>

            <Visibility visible={canResendCode}>
              <p>Did not get the email?</p>

              <ResendCode type="button" onClick={handleResendCode}>
                Resend code
              </ResendCode>
            </Visibility>

            <Visibility visible={!canResendCode}>
              <p>Wait to send again</p>

              <span>{counter}s</span>
            </Visibility>
          </FormBox>
        )}
      </OnboardingBox>
    </Container>
  );
};

export { SignIn };
