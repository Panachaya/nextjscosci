export default function AppWelcome(){
    const title = 'Welcome to cosci';
    const currentYear =  <p>2025</p>;
    const isShow = true;
    
    return(
        <>
            <p>{title.toUpperCase()}</p>
            {currentYear}
            {
                isShow && <p>Data: 10/10/1998</p>
            }
            {
                isShow ? <p> hello Next.js </p> : <p>Hello JavaScript</p> 
            }
                
        </>
    );
}