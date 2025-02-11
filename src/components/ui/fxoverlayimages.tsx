import Image from 'next/image';
import React from 'react';

interface FxOverlayImagesPropsType {
    images?: string[];
}

export function FxOverlayImages({ images }: FxOverlayImagesPropsType) {
    const defaultImages = images && images.length && images;

    return (
        <div className="relative w-[75px] h-[30px] select-none">
            {defaultImages ? defaultImages.slice(0, 3).map((image, index) => (
                <Image
                    key={index}
                    src={image}
                    width={30}
                    height={30}
                    alt={`image-${index}`}
                    className={`w-[30px] h-[30px] rounded-[50%] flex-shrink-0 absolute left-[${index * 20}px] z-[${5 - index}] border fx-border-color`}
                />
            )) : <><Image src={""} width={100} height={100} alt='image' className='w-[30px] h-[30px] rounded-[50%] flex-shrink-0 absolute left-0 bg-red-600 z-[5] border fx-border-color' />
                <Image src={""} width={100} height={100} alt='image' className='w-[30px] h-[30px] rounded-[50%] flex-shrink-0 absolute left-[20px] bg-blue-700 z-[4] border fx-border-color' />
                <Image src={""} width={100} height={100} alt='image' className='w-[30px] h-[30px] rounded-[50%] flex-shrink-0 absolute left-[40px] bg-yellow-400 z-[3] border fx-border-color' />
            </>

            }
        </div>
    );
}
