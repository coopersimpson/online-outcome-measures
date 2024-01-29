# Online Outcome Measures
An online tool allowing for simple and quick completion of orthopedic outcome measures by clinicians or patients. Results can be exported into PDF format. For each outcome measure page, some brief information about the score and its relevant literature is cited. View live deployment [here](http://www.coopersimpson.com/online-outcome-measures/).

# Libraries
### PDF Lib
This app utilises the [pdf-lib](https://pdf-lib.js.org/) library for filling out the PDF forms and modifying existing PDF content. After some research, I found this tool to be the most suitable for my use, as many PDF libraries only allow for the creation of PDFs, rather than modification of existing PDFs.

## Motivation
Compared to tools like [OrthoToolKit](https://orthotoolkit.com/), Online Outcome Measures opts to modify existing and official outcome measure PDFs, rather than generating a unique form. Therefore the resultant document retains the formatting as intended by the score developer.

Using these tools can reduce friction and increase the productivity of clincians. Because the tool is hosted on a simple webpage, the outcome measures can be filled out easily by patients rather than clincians.

## Future plans
### Included Outcome Measures
Outcome measures implemented so far:
- [x] Neck disability index
- [ ] Quick dash
- [ ] WHODAS