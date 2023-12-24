const { PDFDocument } = PDFLib

async function fillForm() {
  // Fetch the PDF with form fields
  const formUrl = '../pdfs/neck-disability-index.pdf'
  const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())

  // Load a PDF with form fields
  const pdfDoc = await PDFDocument.load(formPdfBytes)

  // Get the form containing all the fields
  const form = pdfDoc.getForm()

  // Check the appropriate checkbox based on the selected radio buttons
  // Pain Intensity
  const painIntensityRadioButtonId = document.querySelector('input[name="pain-intensity"]:checked').id;
  const checkPainIntensity = form.getCheckBox(painIntensityRadioButtonId);
  checkPainIntensity.check();

  // Personal Care
  const personalCareRadioButtonId = document.querySelector('input[name="personal-care"]:checked').id;
  const checkPersonalCare = form.getCheckBox(personalCareRadioButtonId);
  checkPersonalCare.check();

  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save()

  // Trigger the browser to download the PDF document
  download(pdfBytes, "neck-disability-index.pdf", "application/pdf");
}