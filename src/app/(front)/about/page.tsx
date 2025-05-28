import Contact01Page from "@/components/contact-01/contact-01";

export default async function About(){
    const data = await fetch('https://api.codingthailand.com/api/version',{ next:{revalidate:3600} });
    const apiInto = await data.json();
    return(
        <>
        {
            <Contact01Page version={apiInto.data.version}/>
        }
        </>
    );
}