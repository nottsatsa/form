import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
// import "./App.css"

// export default function FilePicker() {
//   return <div className="container">
//     <input type='file' className='picker' />
//   </div>
// }

export default function MyDropzone() {
  const [dataURL, setDataURL] = useState(null);
  const [uploadedURL, setUploadedURL] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        const binaryStr = reader.result;
        setDataURL(binaryStr);
      };
      reader.readAsDataURL(file);
    });
  }, []);

  const { getRootProps, acceptedFiles, getInputProps, isDragActive } =
    useDropzone({ onDrop });

  const selectedFile = acceptedFiles[0];

  const uploadImage = async () => {
    let formData = new FormData();

    formData.append("file", selectedFile);
    formData.append(
      "upload_preset",
      import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
    );
    formData.append("api_key", import.meta.env.VITE_CLOUDINARY_API_KEY);

    await fetch(
      `https://api.cloudinary.com/v1_1/${
        import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
      }/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        setUploadedURL(data.url);
      });
  };

  return (
    <div className="container">
      <div className="zone">
        {dataURL ? (
          <div className="selected">
            <img src={dataURL} />
            <div className="actions">
              {uploadedURL ? (
                <span className="uploaded-txt">Uploaded!</span>
              ) : (
                <button onClick={uploadImage} className="upload-btn">
                  Upload
                </button>
              )}
              <button onClick={() => setDataURL(null)} className="cancel-btn">
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="drop-zone" {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <div className="drop-files">
                <p>oruulaarai</p>
              </div>
            ) : (
              <div className="drag-files">
                Drop your files here or click to browse
              </div>
            )}
          </div>
        )}
      </div>
      {uploadedURL && (
        <a target="_blank" href={uploadedURL}>
          <span className="uploaded-url">{uploadedURL}</span>
        </a>
      )}
    </div>
  );
}
