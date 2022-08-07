import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";


export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Watchd</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />
      <Results results={results} />
      <Footer />
    </div>
  );
}


export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const movie = context.query.movies;
  var request;
  
  if (genre!=null) {
      request = await fetch(
        `https://api.themoviedb.org/3${
          requests[genre]?.url || requests.fetchTrending.url
        }`
      ).then((res) => res.json());
  };

  if (movie!=null) {
    request = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=1e61f12700138cf66615a46f78c9fe4d&query=${movie}` ||`https://api.themoviedb.org/3${requests.fetchTrending.url}`
    ).then((res) => res.json());
  };

  if(movie==null && genre==null) {
    request = await fetch(`https://api.themoviedb.org/3${requests.fetchTrending.url}`).then((res) => res.json());
  }

  return {
    props: {
      results: request.results,
    },
  };
}
