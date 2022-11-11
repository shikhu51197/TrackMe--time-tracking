import React from 'react';


const BASE_EMBED_URL = 'https://www.youtube.com/embed/';

export function Vedio(props) {
  if (!props.id) {
    return null;
  }
  const embedUrl = `${BASE_EMBED_URL}${props.id}`;
  return (
            <iframe width={"100%"}  height={`${props.height}` } src={embedUrl} title="TMetric | Time Tracking Software" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  );
}