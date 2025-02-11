"use client"
import { StarIcon } from '@/components/ui/icons/star-icon';
import React, { useState } from 'react'

export default function AddToFavourite() {
    const [starClicked, setStarClicked] = useState(false);
    return <div onClick={() => setStarClicked(!starClicked)}>
        <StarIcon
            className={`cursor-pointer active:scale-[0.5] transition ${starClicked ? "yellow-star-active" : ""}`}
        />
    </div>
}


