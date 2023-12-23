const { PDFDocument } = PDFLib

    async function fillForm() {
    	// Fetch the PDF with form fields
      const formUrl = '../pdfs/neck-disability-index.pdf'
      const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())

      // Load a PDF with form fields
      const pdfDoc = await PDFDocument.load(formPdfBytes)


      // Get the form containing all the fields
      const form = pdfDoc.getForm()

      const checkField = form.getCheckBox('1.1')
      checkField.check()


      // Serialize the PDFDocument to bytes (a Uint8Array)
      const pdfBytes = await pdfDoc.save()

			// Trigger the browser to download the PDF document
      download(pdfBytes, "neck-disability-index.pdf", "application/pdf");
    }