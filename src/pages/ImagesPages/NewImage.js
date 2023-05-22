import NewImageForm from "../../components/ImagesComponents/NewImageForm";

function NewImage() {
  return (
    <div className="items-center mx-auto px-4 py-3 justify-center bg-gradient-to-r from-yellow-200 via-pink-500 to-red-500 mt-4">
      <div className="p-6 m-6 rounded-lg shadow-yellow-500/50 shadow-lg">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
          Add Images . . .
        </h1>
        <div className="max-w-lg mx-auto mt-6">
          <NewImageForm />
        </div>
      </div>
    </div>
  );
}

export default NewImage;
