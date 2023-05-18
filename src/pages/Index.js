import Portraits from "../components/Portraits";

function Index() {
  return (
    <div className="flex flex-col items-center m-6 p-6 w-full justify-center rounded-lg shadow-red-500/50 border shadow-md">
      <h2 className="text-2xl tracking-wide font-bold mb-6">
        Build an Online Portfolio, just like these ..{" "}
      </h2>
      <p className="text-2xl tracking-wide font-bold mb-6">
        Click the thumbnails below to visit the portfolio..
      </p>
      <Portraits />
    </div>
  );
}

export default Index;
