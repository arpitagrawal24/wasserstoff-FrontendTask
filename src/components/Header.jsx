export default function Header({ fileName }) {
  return (
    <div className="w-full flex items-center justify-center bg-[#11212d] rounded-md h-12">
      <p className="text-gray-400 text-lg">{fileName}</p>
    </div>
  );
}
