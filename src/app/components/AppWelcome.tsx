'use client'

export default function AppWelcome(){
    const title = 'Welcome to cosci';
    const currentYear =  <p>2025</p>;
    const isShow = true;
    const handleClick = () =>{
        alert('Hello TypeScipt');
    }

    return(
        <>
            <p>{title.toUpperCase()}</p>
            <button className="bg-blue-500 p-3 m-3 text-white rounded-lg" onClick={handleClick}>กดได้เลย!</button>
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