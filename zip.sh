rm -rf ./owl-redirector/* owl-redirector.zip
cp -r  _locales background options common manifest.json owl.png ./owl-redirector/
7z a owl-redirector.zip ./owl-redirector/
