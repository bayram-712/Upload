import { useState } from "react";
import File from "../src/components/File";
import { useFileStore } from "./store/fileStore";

function App() {
  const get = useFileStore((store) => store.get);
  const files = useFileStore((store) => store.files);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  return (
    <>
      <div className="bg-white px-32 py-8 m-5 rounded-md flex flex-col">
        <h1 className="mb-4 text-2xl">Onlaýn ýüzlenme ugratmak</h1>
        <form
          action="#"
          method="get"
          encType="multipart/form-data"
          id="form"
          className="flex flex-wrap justify-between"
        >
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Ady"
            className="button"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            name="surname"
            id="surname"
            placeholder="Familiýasy"
            className="button"
            value={surname}
            onChange={(e) => {
              setSurname(e.target.value);
            }}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            className="button"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="tel"
            name="tel"
            id="tel"
            placeholder="Telefon belgisi"
            className="button"
            value={tel}
            onChange={(e) => {
              setTel(e.target.value);
            }}
          />
        </form>
        <p className="mt-4 mb-2 text-[#aaaaaa] text-base">Resminamalar</p>
        <div className="grid grid-cols-2 bg-[#f5f5f5] rounded-md p-3">
          <div className="flex flex-col items-center bg-white w-96 rounded-md">
            <img
              src="/upload.png"
              alt="upload"
              width={240}
              className="m-4 p-2"
            />
            <label
              htmlFor="file"
              className="bg-blue-500 p-2 rounded-md text-white w-24 text-center cursor-pointer"
            >
              Faýl saýla
            </label>
            <input
              type="file"
              name="file"
              id="file"
              accept=".doc, .docx, .pdf"
              placeholder="Faýl saýla"
              className="hidden"
              form="form"
              onChange={(e) => {
                let fileList = e.target.files;
                let files = new DataTransfer();
                let latest = [];
                for (let i = 0; i < fileList.length; i++) {
                  files.items.add(fileList[i]);
                }
                for (let i = 0; i < fileList.length; i++) {
                  latest.push(files.files[i]);
                }
                get(latest);
              }}
              multiple
            />
          </div>
          <div>
            {files &&
              files.map((file, index) => (
                <File
                  key={index}
                  name={file.name}
                  size={file.size}
                  index={index}
                />
              ))}
          </div>
        </div>
        <button
          type="submit"
          form="form"
          className="bg-blue-500 p-2 rounded-md text-lg text-white w-48 m-4 self-center"
        >
          Ugrat
        </button>
      </div>
    </>
  );
}

export default App;
