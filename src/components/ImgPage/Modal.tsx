import { useRouter } from "next/router";
import Photo, { PhotoProps } from "./Photo";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

export type PhotooProps = {
  url: string;
  alt: string;
  setIsOn: Dispatch<SetStateAction<boolean>>;
};

const Modal = ({ url, alt, setIsOn }: PhotooProps) => {
  const handleClose = () => {
    // 쿼리 파라미터를 제거하고 URL을 업데이트하여 모달을 닫습니다.
    setIsOn(false);
  };

  return (
    <div className="modal-con">
      <button onClick={handleClose}>CLOSE</button>
      <Image src={url} alt={alt} style={{ objectFit: "cover" }} fill />
    </div>
  );
};
export default Modal;
