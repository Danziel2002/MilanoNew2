from django.shortcuts import render


def readerPage(req):
    userLevel = req.COOKIES.get('level')
    userExp = req.COOKIES.get('exp')
    userName = req.COOKIES.get('username') 
    return render(req, 'barcodeReader/readerPage.html',{'Level':userLevel, 'Exp':userExp, 'username':userName})

