"use client";

import React, { useEffect } from "react";
import Script from "next/script";
export default function Adunit1() {
  useEffect(() => {
    /*if (window.adsbygoogle && window.adsbygoogle.loaded) {
      window.adsbygoogle.push({});
    }
  }, []);*/

    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <>
      <adunit>
        <ad>
          <Script
            id="Adunit1"
            strategy="lazyOnload"
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2087636695455778"
            crossorigin="anonymous"
          />
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-2087636695455778"
            data-ad-slot="4949230260"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </ad>
      </adunit>
    </>
  );
}
