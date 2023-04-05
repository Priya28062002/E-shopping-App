import '../App.css';


function Header(props) {
    return (
        <div className='flex shopping'>
            <div onClick={() => props.handleShow(false)} >
                <h1>Welcome to E-Shopping App </h1></div>
            <div onClick={() => props.handleShow(true)}> 
            <h4> your Cart Items</h4>
                <sup> {props.count} </sup>
               
            </div>
        </div>
    );
}

export default Header;