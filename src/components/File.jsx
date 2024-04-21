import { useFileStore } from "../store/fileStore";
import { filesize } from "filesize";

const File = (prop) => {
  const name = prop.name;
  const size = prop.size;
  const extension = name.slice(name.lastIndexOf(".") + 1);

  const del = useFileStore((store) => store.del);
  return (
    <>
      <div className="flex bg-white border border-[#e1e1e1] mb-4 p-2 last-of-type:mb-0 rounded-md">
        <img src={`/${extension}.svg`} alt="doc" width={32} />
        <div className="w-full flex justify-between pl-4 pr-2">
          <div>
            <p className="text-base font-bold">{name}</p>
            <p className="text-xs text-[#aaaaaa]">{filesize(size)}</p>
          </div>
          <button
            onClick={() => {
              del(name);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default File;
