import "./profile.css";

const profile = () => {
    return ( 
        <div className="profile">
            <div className="upper-container">
                <div className="image-container">
                    <img src="https://blogs.sun.ac.za/cib/files/2020/03/wits-logo.jpg" alt="" height="100px" width="100px" />
                </div>
            </div>
            <div className="lower-container">
                {/* <h3> { username } : { stuNo }</h3>
                <h4> { email } </h4>
                <h5> { } </h5> */}
                <h3> Username : Student No. </h3>
                <h4> Email Address </h4>
                <h4> About </h4>
                <button> back </button>
            </div>
        </div>
    );
}
 
export default profile;
