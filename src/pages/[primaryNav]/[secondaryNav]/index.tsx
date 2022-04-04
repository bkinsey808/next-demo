import { NextPage } from "next";
import { useRouter } from "next/router";

const SecondaryPage: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Secondary Page</h1>
      <h2>pathname:- {router.pathname}</h2>
      <h2>query:- {JSON.stringify(router.query)}</h2>
      <h2>asPath:- {router.asPath}</h2>
    </div>
  );
};

export default SecondaryPage;
