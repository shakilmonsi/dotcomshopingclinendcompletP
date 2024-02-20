import useAuth from "../../../hooks/useAuth";


const UserHome=()=> {
    const {user}=useAuth()
    return (
        <div>
         <h4 className=" text-center   text-green-700  ">   this is  userHome</h4>
        </div>
    );
}

export default UserHome;