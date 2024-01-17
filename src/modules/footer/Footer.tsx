import Logo from '@/shared/components/Logo/Logo';
import Container from '@/shared/components/Container/Container';

import { About, Contacts } from './components';
import config from '../../../tailwind.config';

export default function Footer() {
  return (
    <footer className="bg-slate-200">
      <Container>
        <div className="flex justify-between pt-5 pb-3 md:items-center">
          <div>
            <Logo />
          </div>
          <div>
            <About />
            <Contacts />
          </div>
        </div>
      </Container>
    </footer>
  );
}
