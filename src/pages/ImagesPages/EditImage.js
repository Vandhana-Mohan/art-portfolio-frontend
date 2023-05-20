import EditImageForm from "../../components/ImagesComponents/EditImageForm";

function EditImage() {
  return (
    <div className="items-center mx-6 px-2 py-4 justify-center mt-2">
      <div className="p-6 m-6 rounded-lg shadow-red-500/50 border shadow-lg">
        <h1 className="m-6 text-center text-4xl font-bold">
          Add Images . . .{" "}
        </h1>
        <EditImageForm />
      </div>
    </div>
  );
}

export default EditImage;
