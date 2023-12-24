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

// function colorParentElement() {
//   const radioButtons = document.querySelectorAll('input[type="radio"]');
//   radioButtons.forEach(radioButton => {
//     if (radioButton.checked) {
//       radioButton.parentElement.style.backgroundColor = 'blue';
//     }
//     else {
//       radioButton.parentElement.style.backgroundColor = 'white';
//     }
//   });
// }


function colorParentElement() {
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  radioButtons.forEach(radioButton => {
    radioButton.addEventListener('change', () => {
      // Reset all radio buttons' parent background color
      radioButtons.forEach(rb => {
        if (rb.checked) {
          rb.parentElement.style.backgroundColor = 'rgba(0, 123, 255, 0.5)'; // Set transparency to 0.5
        } else {
          rb.parentElement.style.backgroundColor = '';
        }
      });
      // Color the clicked radio button's parent
      if (radioButton.checked) {
        radioButton.parentElement.style.backgroundColor = 'rgba(0, 123, 255, 0.5)'; // Set transparency to 0.5
      }
    });
  });
}

// Call the function to add event listeners
colorParentElement();