import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <img src="/images/logo.png" alt="" />
        <Title>Prueba</Title>
      </main>

      <Footer />
    </div>
  );
}
