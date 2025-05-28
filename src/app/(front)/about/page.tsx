import Contact01Page from "@/components/contact-01/contact-01";

export default async function About(){
    const data = await fetch('https://api.codingthailand.com/api/version');
    const apiInto = await data.json();
    return(
        <>
        <p>{JSON.stringify(apiInto)}</p>
        {
            <Contact01Page version={apiInto.data.version}/>
        }
        </>
    );
}