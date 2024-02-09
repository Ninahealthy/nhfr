"use client";

import React, { useEffect } from "react";
import Script from "next/script";
export default function Adunit(/*{ slot, adformat, responsive } this is another way to integrate adsense*/) {
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
            /*</ad>data-ad-slot={slot}
            data-ad-format={adformat}
            data-full-width-responsive={responsive}*/
            data-ad-slot="2549748890"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </ad>
      </adunit>
    </>
  );
}

/* ignor this error (TagError: adsbygoogle.push() error: All 'ins' elements in the DOM with class=adsbygoogle already have ads in them.)*/
