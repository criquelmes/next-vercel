import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'
import { DarkLayout } from '@/components/layouts/DarkLayout'

export default function AboutPage() {
  return (
    <>
        <h1>About page</h1>
          <h1>
            Ir a <Link href='/'>Home</Link>
          </h1>
    </>
  )
}

AboutPage.getLayout = function getLayout(page: JSX.Element) {
    return(
        <MainLayout>
            <DarkLayout>
                {page}
            </DarkLayout>
        </MainLayout>
    )
}
