import { Breadcrumbs, ColorSpot, PageWrapper } from '@/shared/components';
import { SignupForm } from '@/modules';

export default function Page() {
  return (
    <>
      <PageWrapper>
        <ColorSpot />
        <Breadcrumbs
          containerClasses={'pt-[21px] md:pt-10 mb-0 md-mb-0'}
          homeElement={<span>Головна</span>}
          capitalizeLinks
        />
        <SignupForm signupType="page" />
      </PageWrapper>
    </>
  );
}
