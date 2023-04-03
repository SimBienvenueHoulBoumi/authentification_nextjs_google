import React from 'react';
import { authOptions } from './api/auth/[...nextauth]';
import { getServerSession } from 'next-auth/next';

function Dashbord() {
  return <div className="flex justify-center h-screen pt-64">Dashbord</div>;
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }

  return {
    props: {
      session
    }
  };
}

export default Dashbord;
