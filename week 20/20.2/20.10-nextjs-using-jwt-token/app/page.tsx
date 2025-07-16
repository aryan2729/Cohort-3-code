import Image from "next/image";

export default function Home() {
  return (
    <div>
      Go to /signin and write username and password then check localstorage token created or not ?
      <br/> <br/>
      Go to /profile from here you get profilePicture according to token stored in localstorage but we used SSR so it's server not browser so no localStorage exist here ( bad practise -/ JWT + localStorage in NEXT.JS)
    </div>
  );
}
