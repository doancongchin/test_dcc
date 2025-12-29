import React from 'react'

type ModalImgProps = {
  src: string | null;
}

export default function ModalImg( {src}: ModalImgProps) {
  if (!src) {
    return null;
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>
      <div className="bg-white p-2 rounded-lg shadow-2xl z-10 animate-in fade-in zoom-in duration-200">
        <img 
          src={src}
          alt="imgdemo"
          className="max-w-[50vw] max-h-[50vh] object-contain rounded" />
      </div>
    </div>
  )
}
