function Footer({name="UM", date="2026"}) {
    return(
        <>
        <footer className="bg-orange-200 fixed bottom-0 p-5 w-full">
            <p>Created By {name}. &copy;{date}</p>
        </footer>
        </>
    );
}


export default Footer;