import React, { useCallback, useRef } from 'react';

import { Button, Input } from '@components/atoms';
import { IFormHandles } from '@contexts/ReactFormContext';

import { Container, OnboardingBox, Hero, FormBox, Unform } from './styles';

const Onboarding: React.FC = () => {
  const formRef = useRef<IFormHandles>(null);

  const handleSubmit = useCallback(async (formData: any) => {
    console.log(formData);
  }, []);

  return (
    <Container>
      <OnboardingBox>
        <Hero>
          <p>We need some informations before we start.</p>
        </Hero>

        <FormBox>
          <Unform ref={formRef} onSubmit={handleSubmit}>
            <Input label="Name" name="name" placeholder="Name" />
            <Input label="Surname" name="surname" placeholder="Surname" />
            <Input
              label="Phone Number"
              name="phone"
              placeholder="(00) 00000-0000"
              mask="cellphone"
            />

            <Button type="submit">Sign In</Button>
          </Unform>
        </FormBox>
      </OnboardingBox>
    </Container>
  );
};

export { Onboarding };
