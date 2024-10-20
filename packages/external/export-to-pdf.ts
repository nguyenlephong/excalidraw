
function svgToString(svg: SVGSVGElement): string {
  try {
    const serializer = new XMLSerializer();
    return serializer.serializeToString(svg);
  } catch (error) {
    console.error("Error converting SVG to string:", error);
    throw new Error("Failed to convert SVG to string");
  }
}

export async function svgToPdfBlob(svg: SVGSVGElement): Promise<Blob> {
  //@ts-ignore
  if(window.__createPdf) window.__createPdf(svg);

  //@ts-ignore
  return;
}
