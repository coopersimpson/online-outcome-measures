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

  // Lifting
  const liftingRadioButtonId = document.querySelector('input[name="lifting"]:checked').id;
  const checkLifting = form.getCheckBox(liftingRadioButtonId);
  checkLifting.check();

  // Reading
  const readingRadioButtonId = document.querySelector('input[name="reading"]:checked').id;
  const checkReading = form.getCheckBox(readingRadioButtonId);
  checkReading.check();

  // Headaches
  const headachesRadioButtonId = document.querySelector('input[name="headaches"]:checked').id;
  const checkHeadaches = form.getCheckBox(headachesRadioButtonId);
  checkHeadaches.check();

  // Concentration
  const concentrationRadioButtonId = document.querySelector('input[name="concentration"]:checked').id;
  const checkConcentration = form.getCheckBox(concentrationRadioButtonId);
  checkConcentration.check();

  // Work
  const workRadioButtonId = document.querySelector('input[name="work"]:checked').id;
  const checkWork = form.getCheckBox(workRadioButtonId);
  checkWork.check();

  // Driving
  const drivingRadioButtonId = document.querySelector('input[name="driving"]:checked').id;
  const checkDriving = form.getCheckBox(drivingRadioButtonId);
  checkDriving.check();

  // Sleeping
  const sleepingRadioButtonId = document.querySelector('input[name="sleeping"]:checked').id;
  const checkSleeping = form.getCheckBox(sleepingRadioButtonId);
  checkSleeping.check();

  // Recreation
  const recreationRadioButtonId = document.querySelector('input[name="recreation"]:checked').id;
  const checkRecreation = form.getCheckBox(recreationRadioButtonId);
  checkRecreation.check();

  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save()

  // Trigger the browser to download the PDF document
  download(pdfBytes, "neck-disability-index.pdf", "application/pdf");
}

// Add event listeners to radio buttons to color their parent element
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