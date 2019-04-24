import React from "react";
import styled from "../../typed-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.label`
  cursor: pointer;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  overflow: hidden;
  & img {
    width: 100px;
    height: 100px;
  }
`;

const Input = styled.input`
  color: white;
  opacity: 0;
  height: 1px;
  &:focus {
    outline: none;
  }
`;

interface IProps {
  uploading: boolean;
  fileUrl: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PhotoInput: React.SFC<IProps> = ({ uploading, fileUrl, onChange }) => (
  <Container>
    <Input id={"photo"} type="file" accept="image/*" onChange={onChange} />
    <Image htmlFor="photo">
      {uploading && (
        <img
          src={
            "https://66.media.tumblr.com/695ce9a82c8974ccbbfc7cad40020c62/tumblr_o9c9rnRZNY1qbmm1co1_1280.gif"
          }
        />
      )}
      {!uploading && (
        <img
          src={
            fileUrl ||
            "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
          }
        />
      )}
    </Image>
  </Container>
);

export default PhotoInput;
