/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { Card, Container, List, Row, Col } from "reactstrap";
import Dropzone from "react-dropzone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose, faUpload } from "@fortawesome/free-solid-svg-icons";
const FileUpload = () => {
  const [files, setFiles] = useState([]);

  const handleDrop = (acceptedFiles) => {
    setFiles(files.concat(acceptedFiles[0]));
  };

  const removeitem = (remove) => {
    const DeleteFile = [...files];
    DeleteFile.map((item, index) => {
      if (item.path === remove.path) {
        DeleteFile.splice(index, 1);
      }
    });
    setFiles(DeleteFile);
  };
  return (
    <div className="App">
      <Container>
        <Card className="text-center">
          <Container>
            <Card className="dropzone-div">
              <Dropzone onDrop={handleDrop}>
                {({ getRootProps, getInputProps }) => (
                  <div {...getRootProps({ className: "dropzone" })}>
                    <input {...getInputProps()} />
                    <FontAwesomeIcon className="remove-icon" icon={faUpload} />
                    <h1>upload Files</h1>
                  </div>
                )}
              </Dropzone>
            </Card>
          </Container>
          <p className="file-style">Files:</p>
          <ol className="order-list-style">
            {files.map((file) => (
              <div className="list-div">
                <List className="list-card">
                  <div className="file-uploaded">
                    <li className="list-style">
                      {file.name} ({file.size} )
                    </li>
                    <FontAwesomeIcon className="remove-icon" icon={faUpload} />
                  </div>
                </List>
              </div>
            ))}
          </ol>
        </Card>
      </Container>
    </div>
  );
};
export default FileUpload;
