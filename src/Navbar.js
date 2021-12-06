import { useAuth0 } from "@auth0/auth0-react";

const Navbar = (props) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div className="d-flex p-2 border-bottom align-items-center justify-content-center">
      <div className="bg-warning d-flex justify-content-center">
        <h3 className="m-2">Welcome to the Random Store</h3>
      </div>
      <div className="flex-grow-1" />
      {!isAuthenticated && (
        <div>
          <button className="btn btn-primary" onClick={loginWithRedirect}>
            Login To Make Purchase
          </button>
        </div>
      )}
      {isAuthenticated && (
        <div>
          <button className="btn btn-info m-2">
            Your Current Amount: {props.wallet}
          </button>
        </div>
      )}

      {isAuthenticated && (
        <div className="ml-2">
          <button className="btn btn-primary ml-2" onClick={logout}>
            Logout :)
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
