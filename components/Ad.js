"use client";

import { useEffect } from "react";
import Script from "next/script";
export default function Ad({ slot, adformat, responsive }) {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <>
      <adunit>
        <ad>
          <Script
            id="Adunit"
            strategy="lazyOnload"
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2087636695455778"
            crossorigin="anonymous"
          />
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-2087636695455778"
            data-ad-slot={slot}
            data-ad-format={adformat}
            data-full-width-responsive={responsive}
          ></ins>
        </ad>
      </adunit>
    </>
  );
}

/* ignor this error (TagError: adsbygoogle.push() error: All 'ins' elements in the DOM with class=adsbygoogle already have ads in them.)*/
