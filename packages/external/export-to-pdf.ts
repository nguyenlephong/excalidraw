import {jsPDF} from 'jspdf';

function svgToString(svg: SVGSVGElement): string {
  const serializer = new XMLSerializer();
  return serializer.serializeToString(svg);
}

// Helper function to convert SVG to PDF
export async function svgToPdfBlob(svg: SVGSVGElement): Promise<Blob> {
  const width = svg.width.baseVal.value;
  const height = svg.height.baseVal.value;
  const doc = new jsPDF({
    orientation: "landscape",
    unit: "px",
    format: [width, height]
  });

  doc.addSvgAsImage(svgToString(svg), 0, height, width, height);
  doc.save('exhibitions-artfolios.pdf');
  // Return PDF as blob
  return doc.output('blob');
}
