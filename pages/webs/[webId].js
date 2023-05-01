import Link from "next/link";
import styles from "../../styles/_atelier.module.scss";
import { useRouter } from "next/router";
import ErrorPage from "next/error";

function Web({ web }) {
  const router = useRouter();

  if (!router.isFallback && !web) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <div className={styles.div_web}>
      <h2>SITE {web.id}</h2>
      <h3>TITRE DU SITE{web.title}</h3>
      <p>BODY du site{web.body}</p>
      <Link href={"/webs"}>Retour vers choix site</Link>
    </div>
  );
}
export default Web;

export async function getStaticPaths() {
  return {
    paths: [{ params: { webId: "1" } }],
    fallback: true,
  };
}
//import de tout les elemeents avec un id params
export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.webId}`
  );
  const data = await res.json();
  return {
    props: {
      web: data,
    },
    revalidate: 10,
  };
}
