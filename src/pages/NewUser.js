import NewUserForm from "../components/SignUp";

function NewUser() {
  return (
    <div className="items-center mx-12 px-2 py-4 justify-center mt-2">
      <div className="p-6 m-6 rounded-lg shadow-red-500/50 border shadow-lg">
        <h1 className="m-6 text-center text-4xl font-bold">
          Create your New Account . . . {" "}
        </h1>
        <NewUserForm />
      </div>
    </div>
  );
}
export default NewUser;
