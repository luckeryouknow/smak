import React from 'react';
import Section from '@/shared/components/Section/Section';
import CardList from './CardList';
import Container from '@/shared/components/Container/Container';
import SectionTitle from '@/shared/components/SectionTitle/SectionTitle';

export default function ProductsWeek() {
  return (
    <Section>
      <Container>
        <SectionTitle name="Товари тижня" />

        <CardList />
      </Container>
    </Section>
  );
}